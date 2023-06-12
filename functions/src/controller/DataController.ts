import * as express from 'express';
import * as cors from 'cors';
import * as admin from 'firebase-admin'
import * as NodeRSA from 'node-rsa';
import { createHash } from 'crypto';

// データをハッシュ化する関数
const encryptSha256 = (str: string) => {
  const hash = createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
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

// 暗号を復号する関数
function privateDecrypt(key: Buffer, buffer: Buffer){
  var input = Buffer.from(buffer);
  var der = Buffer.from(key);
  const rsa = new NodeRSA(der, 'pkcs1-private-der', { encryptionScheme : 'pkcs1_oaep' });
  var dec = rsa.decrypt(input);
  return dec;
}

export const DataController = express();
DataController.use(cors({origin: true}));

// GETリクエストの処理
DataController.get('/', async (req, res) => {
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
  
  // shareCodeを取得
  const shareCode = req.query.shareCode;

  var status = 200;

  // データIDを取得
  var dataId: string | undefined;
  if(typeof shareCode == 'string') {
      await admin.firestore().collection('shareId').where('shareCode', '==', shareCode).limit(1).get()
        .then(shareIdResult => {
          if(shareIdResult.empty) {
            status = 404;
          } else {
            dataId = shareIdResult.docs[0].get('id');
          }
        })
        .catch(err => {
            status = 404;
        })
  } else {  // shareCodeが指定されていなければ
    status = 404;
  }

  // 秘密鍵を取得
  var secretKey: string | undefined;
  var secretKeyBuff: Buffer | undefined;
  if(dataId) {
    await admin.firestore().collection('key').where('id', '==', dataId).limit(1).get()
      .then(keyResult => {
        if(keyResult.empty) {
          status = 404;
        } else {
          secretKey = keyResult.docs[0].get('secret');
          if(secretKey) secretKeyBuff = Buffer.from(secretKey, 'hex');
        }
      })
      .catch(err => { status = 404; });
  }

  // 暗号データを取得して復号する
  var encBuff: Buffer | undefined;
  var shareData: string | undefined;
  if(dataId && secretKeyBuff) {
    await admin.firestore().collection('data').doc(dataId).get()
      .then(dataResult => {
        if(dataResult.exists && secretKeyBuff) {
          var encData = dataResult.get('content');
          encBuff = Buffer.from(encData, 'hex');
          shareData = privateDecrypt(secretKeyBuff, encBuff).toString('utf-8');
        } else {
          status = 404;
        }
      })
      .catch(err => { status = 404; });
  }

  // 暗号データを復号
  if(status == 200 && shareData) {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json({data: JSON.parse(shareData)});
  } else {
    res.status(404).json({message: "データソースが見つかりません。"})
  }
});

// POSTリクエストの処理
DataController.post('/', async (req, res) => {
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
  
  // 秘密鍵と暗号鍵を生成する
  var key = generateKeyPair(1024);

  // データを暗号化する
  var enc2 = publicEncrypt(key.public, Buffer.from(JSON.stringify(req.body), 'utf-8'));

  // 暗号化したデータを保存
  const dataId = (await admin.firestore().collection('data').add({content: (enc2).toString('hex')})).id;

  // 秘密鍵を保存
  await admin.firestore().collection('key').add({
    id: dataId,
    secret: (key.private).toString('hex'),
  });

  // 共有コードを生成して保存
  var shareCode = encryptSha256(dataId);
  await admin.firestore().collection('shareId').add({
    id: dataId,
    shareCode: shareCode,
  });

  res.json({shareCode: shareCode});
})