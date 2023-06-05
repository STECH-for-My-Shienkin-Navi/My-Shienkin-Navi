import {config, DotenvConfigOptions} from 'dotenv'
var dotenvOptions: DotenvConfigOptions = {path: './src/.env'}
config(dotenvOptions)

import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

admin.initializeApp()

// マイナポータルAPI　ダミー環境のAPIKey
const mynaPortalAPIKey = process.env.apiKey;
const mynaPortalBaseURL = process.env.baseURL

// ライフチェックのための関数
exports.ping = functions.https.onRequest(async (req, res) => {
  res.json({msg: "Hello, firebase functions."});
});

// マイナポータルのモックAPI
exports.portalMock = functions.https.onRequest(async (req, res) => {
  var requestQuery = req.query.req;

  // リクエストクエリとダミー環境のパスとの対応付けを行うオブジェクト
  var apiDict: {[query: string]: string} = {
    "income": "2",
    "pension": "64",
    "account": "89",
    "residentCard": "1",
    "specialHealth": "2-7",
  };

  if(typeof requestQuery == 'string'){
    // リクエストをカンマ区切りで分解する
    var reqDataList = requestQuery.split(',')

    // APIの結果待ち状況を持つリスト
    var axiosResultList: Promise<AxiosResponse<any, any>>[] = [];
    var axiosResultLabelList: string[] = [];

    // 各リクエストクエリに対して処理を実施
    reqDataList.forEach(async elm => {
      if(apiDict[elm]) {  // 対応するAPIが存在するとき
        // リクエストを作成
        const axiosReqOption: AxiosRequestConfig = {
          url: `${mynaPortalBaseURL}${apiDict[elm]}`,
          method: 'POST',
          headers: {Authorization: `Bearer ${mynaPortalAPIKey}`},
          data: {auth_code: 1234}
        }

        // POST リクエスト
        var axiosRes = axios(axiosReqOption);
        axiosResultList.push(axiosRes);
        axiosResultLabelList.push(elm);
      }
    });

    // レスポンスのオブジェクト
    var responseData: {[query: string]: any} = {};

    // レスポンスを作成する
    for(var i = 0; i < axiosResultList.length; i++) {
      responseData[axiosResultLabelList[i]] = (await axiosResultList[i]).data[0];
    }

    res.json({data: responseData});
    console.log("send data.")
  } else {
    res.json({});
  }
});