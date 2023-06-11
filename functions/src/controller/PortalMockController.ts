import { PostMynaPortalAPI } from '../repository/PostMynaPortalAPI'

import { Request, Response } from "firebase-functions"; 
import {AxiosResponse} from 'axios'

export async function PortalMockController(req: Request, res: Response) {
  res.set("Access-Control-Allow-Origin", "*");
  
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
        axiosResultList.push(PostMynaPortalAPI(apiDict[elm]));
        axiosResultLabelList.push(elm)
      }
    });

    // レスポンスのオブジェクト
    var responseData: {[query: string]: any} = {};

    // レスポンスを作成する
    for(var i = 0; i < axiosResultList.length; i++) {
      responseData[axiosResultLabelList[i]] = (await axiosResultList[i]).data[0];
    }

    res.json({data: responseData});
  } else {
    res.json({});
  }
}