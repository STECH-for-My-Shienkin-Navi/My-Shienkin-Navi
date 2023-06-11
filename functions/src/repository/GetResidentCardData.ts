import { PostMynaPortalAPI } from "./PostMynaPortalAPI";

interface ResidentCardDataResponse {
  "世帯主との続柄コード": string
  "世帯番号": string
}

export function GetResidentCard(authCode: number = 1234): Promise<ResidentCardDataResponse> {
  var responseData: Promise<ResidentCardDataResponse> = PostMynaPortalAPI('1').then(result => {
    console.log(result.data);
    var res: ResidentCardDataResponse = {      
      "世帯主との続柄コード": result.data[0]["特定個人情報等"]["住民情報"]["世帯主との続柄コード"]["続柄コード１"],
      "世帯番号": result.data[0]["特定個人情報等"]["住民情報"]["世帯番号"],
    }
    return res;
  });
  
  return responseData;
}