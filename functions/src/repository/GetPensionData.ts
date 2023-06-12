import { PostMynaPortalAPI } from "./PostMynaPortalAPI";

interface PensionDataResponse {
  "厚生年金加入月数情報": number
  "国民年金加入月数情報": number
  "年金加入月数合計情報": number
}

export function GetPensionData(authCode: number = 1234): Promise<PensionDataResponse> {
  var responseData: Promise<PensionDataResponse> = PostMynaPortalAPI('64').then(result => {
    console.log(result.data);
    var res: PensionDataResponse = {
      "厚生年金加入月数情報": result.data[0]["特定個人情報等"]["国民年金法又は被用者年金各法による年金である給付の支給又は保険料の徴収に関する情報"]["年金給付記録情報"]["年金資格記録情報"]['厚生年金加入記録情報']['年金加入期間・納付等月数記録情報']['厚生年金加入月数情報'],
      "国民年金加入月数情報": result.data[0]["特定個人情報等"]["国民年金法又は被用者年金各法による年金である給付の支給又は保険料の徴収に関する情報"]["年金給付記録情報"]["年金資格記録情報"]['厚生年金加入記録情報']['年金加入期間・納付等月数記録情報']['国民年金加入月数情報'],
      "年金加入月数合計情報": result.data[0]["特定個人情報等"]["国民年金法又は被用者年金各法による年金である給付の支給又は保険料の徴収に関する情報"]["年金給付記録情報"]["年金資格記録情報"]['厚生年金加入記録情報']['年金加入期間・納付等月数記録情報']['年金加入月数合計情報'],
    }
    return res;
  });
  
  return responseData;
}