import { PostMynaPortalAPI } from "./PostMynaPortalAPI";

interface AccountDataResponse {
  "公的給付支給等口座情報": {
    "口座番号": string, 
    "名義人氏名（カナ）": string,
    "店番": string,
    "支店名（カナ）": string,
    "金融機関コード": string,
    "金融機関名（カナ）": string,
    "預貯金種目コード": string
  }
}

export function GetAccountData(authCode: number = 1234): Promise<AccountDataResponse> {
  var responseData: Promise<AccountDataResponse> = PostMynaPortalAPI('89').then(result => {
    console.log(result.data);
    var res: AccountDataResponse = {
      "公的給付支給等口座情報": result.data[0]["特定個人情報等"]["公的給付支給等口座登録簿関係情報"]["公的給付支給等口座情報"],
    }
    return res;
  });
  
  return responseData;
}