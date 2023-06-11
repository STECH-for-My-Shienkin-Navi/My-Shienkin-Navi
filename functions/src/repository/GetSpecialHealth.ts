import { PostMynaPortalAPI } from "./PostMynaPortalAPI";

interface SpecialHealthDataResponse {
  "特定健診情報・後期高齢者健診情報": any
}

export function GetSpecialHealthData(authCode: number = 1234): Promise<SpecialHealthDataResponse> {
  var responseData: Promise<SpecialHealthDataResponse> = PostMynaPortalAPI('2-7').then(result => {
    console.log(result.data);
    var res: SpecialHealthDataResponse = {
      "特定健診情報・後期高齢者健診情報": result.data[0]["わたしの情報"]["特定健診情報・後期高齢者健診情報"]
    }
    return res;
  });
  
  return responseData;
}