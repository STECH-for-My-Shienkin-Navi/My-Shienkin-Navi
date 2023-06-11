import { GetIncomeData } from '../repository/GetIncomeData';
import { GetPensionData } from '../repository/GetPensionData';
import { GetAccountData } from '../repository/GetAccountData';
import { GetResidentCard } from '../repository/GetResidentCardData';
import { GetSpecialHealthData } from '../repository/GetSpecialHealth';

import { Request, Response } from "firebase-functions"; 

export async function PortalMockController(req: Request, res: Response) {
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
  
  var requestQuery = req.query.req;

  // リクエストクエリとダミー環境のパスとの対応付けを行うオブジェクト
  var apiDict: {[query: string]: Function} = {
    "income": GetIncomeData,
    "pension": GetPensionData,
    "account": GetAccountData,
    "residentCard": GetResidentCard,
    "specialHealth": GetSpecialHealthData,
  };

  if(typeof requestQuery == 'string'){
    // リクエストをカンマ区切りで分解する
    var reqDataList = requestQuery.split(',')

    // APIの結果待ち状況を持つリスト
    var axiosResultList: Promise<any>[] = [];
    var axiosResultLabelList: string[] = [];

    // 各リクエストクエリに対して処理を実施
    reqDataList.forEach(async elm => {
      if(apiDict[elm]) {  // 対応するAPIが存在するとき
        axiosResultList.push(apiDict[elm]());
        axiosResultLabelList.push(elm)
      }
    });

    // レスポンスのオブジェクト
    var responseData: {[query: string]: any} = {};

    // レスポンスを作成する
    for(var i = 0; i < axiosResultList.length; i++) {
      responseData[axiosResultLabelList[i]] = (await axiosResultList[i]);
    }

    res.json({data: responseData});
  } else {
    res.json({});
  }
}