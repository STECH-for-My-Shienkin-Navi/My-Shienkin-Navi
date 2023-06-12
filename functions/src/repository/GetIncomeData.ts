import { PostMynaPortalAPI } from "./PostMynaPortalAPI";

interface IncomeDataResponse {
  "合計所得金額": number
  "総所得金額等": number
  "課税所得額（課税標準額）": number
}

export function GetIncomeData(authCode: number = 1234): Promise<IncomeDataResponse> {
  var responseData: Promise<IncomeDataResponse> = PostMynaPortalAPI('2').then(result => {
    console.log(result.data);
    var res: IncomeDataResponse = {
      "合計所得金額": parseInt(result.data[0]["特定個人情報等"]["地方税法その他の地方税に関する法律に基づく条例の規定により算定した税額若しくはその算定の基礎となる事項に関する情報"]["個人住民税情報"]["合計所得金額"].replace(/,/g, "")),
      "総所得金額等": parseInt(result.data[0]["特定個人情報等"]["地方税法その他の地方税に関する法律に基づく条例の規定により算定した税額若しくはその算定の基礎となる事項に関する情報"]["個人住民税情報"]["総所得金額等"].replace(/,/g, "")),
      "課税所得額（課税標準額）": parseInt(result.data[0]["特定個人情報等"]["地方税法その他の地方税に関する法律に基づく条例の規定により算定した税額若しくはその算定の基礎となる事項に関する情報"]["課税所得額（課税標準額）"].replace(/,/g, ""))
    }
    return res;
  });
  
  return responseData;
}