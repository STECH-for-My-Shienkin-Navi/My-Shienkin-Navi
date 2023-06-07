import * as express from 'express';
import * as cors from 'cors';
import * as admin from 'firebase-admin'
import * as NodeRSA from 'node-rsa';
import { createHash } from 'crypto';

// データをハッシュ化する関数
const encryptSha256 = (str: string) => {
  const hash = createHash('sha256');
  hash.update(str);
  return hash.digest('base64');
}

// 暗号化鍵を生成する関数
function generateKeyPair(bits: number){
  const key = new NodeRSA({b: bits});

  var priv = key.exportKey('pkcs1-private-der');
  var pub = key.exportKey('pkcs1-public-der');

  return { public: pub, private: priv };
}

// データを暗号化する関数
function publicEncrypt(key: Buffer, buffer: Buffer){
  var input = Buffer.from(buffer);
  var der = Buffer.from(key);
  const rsa = new NodeRSA(der, 'pkcs1-public-der', { encryptionScheme : 'pkcs1_oaep' });
  var enc = rsa.encrypt(input);
  return enc;
}


export const DataController = express();
DataController.use(cors({origin: true}));

DataController.get('/', (req, res) => {
  res.json('This is GET methods.');
});

// POSTリクエストの処理
DataController.post('/', async (req, res) => {
  // 秘密鍵と暗号鍵を生成する
  var key = generateKeyPair(1024);

  // データを暗号化する
  var enc2 = publicEncrypt(key.public, Buffer.from(JSON.stringify(req.body)));

  // 暗号化したデータを保存
  const dataId = (await admin.firestore().collection('data').add({cotent: enc2})).id;

  // 秘密鍵を保存
  await admin.firestore().collection('key').add({
    id: dataId,
    secret: key.private,
  });

  // 共有コードを生成して保存
  var shareCode = encryptSha256(dataId);
  await admin.firestore().collection('shareId').add({
    id: dataId,
    shareId: shareCode,
  });

  res.json({shareCode: shareCode});
})