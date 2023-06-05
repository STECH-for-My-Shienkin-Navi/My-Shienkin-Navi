import {config, DotenvConfigOptions} from 'dotenv'
var dotenvOptions: DotenvConfigOptions = {path: './src/.env'}
config(dotenvOptions)

import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

// マイナポータルAPI　ダミー環境のAPIKey
const mynaPortalAPIKey = process.env.apiKey;
const mynaPortalBaseURL = process.env.baseURL

export function PostMynaPortalAPI(APIId: string, authCode: number = 1234): Promise<AxiosResponse> {
  // リクエストを作成
  const axiosReqOption: AxiosRequestConfig = {
    url: `${mynaPortalBaseURL}${APIId}`,
    method: 'POST',
    headers: {Authorization: `Bearer ${mynaPortalAPIKey}`},
    data: {auth_code: authCode}
  }

  // POST リクエスト
  return axios(axiosReqOption);
}