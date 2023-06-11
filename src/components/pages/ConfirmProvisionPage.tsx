import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography } from '@mui/material';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';
import { SelectGettingDataState } from '../../hooks/SelectGettingDataState';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { Loading } from '../loading';
import axios from 'axios';

export const ConfirmProvisionPage: FC = () => {
  const navigate = useNavigate();
  const CheckList = useRecoilValue(SelectGettingDataState);

  const selectShare = [true, true, false, false, false]; //前の画面で選択されたデータの番号を受け取る
  const agreeList = ['所得・個人住民税情報', '年金情報', '公金受け取り口座', '世帯情報', '医療保険情報'];
  const id2Query = ['income', 'pension', 'account', 'residentCard', 'specialHealth']

  const [isLoading, setIsLoading] = useState(false); // ロード中かどうかの状態

  return (
    <>
      <MainLayout title="情報提供可否の確認">
        {isLoading && <Loading />}
        <Box>
          <Typography sx={{ mt: 2, mb: 4 }}>
            マイナンバーカードの読み取りが完了しました。
            <br />
            引き続き、情報提供手続きを実施いたします。
            <br />
            My支援金ナビに
            <br />
            以下の情報を提供してもよい場合、
            <br />
            「データ取得」ボタンを押してください。
          </Typography>

          <ul>
            {CheckList.map((item) => (item.isCheck ? <li key={item.id}>{item.label}</li> : null))}
          </ul>

          <Box sx={{ marginTop: '40px', mx: 2, mt: 6 }}>
            <Col spacing={2}>
              <CommonButton isPrimary onClick={ async () => {
                setIsLoading(true);
                var reqURL = 'http://127.0.0.1:5001/my-shienkin-navi-67cc2/us-central1/portalMock?req=';
                CheckList.map((elm) => {
                  if(elm.isCheck) reqURL += id2Query[elm.id-1] + ',';
                })

                // axiosでマイナポータルのモックからデータを取得するリクエストを送信
                const requestResult = await axios.get(reqURL);
                setIsLoading(false);
                console.log(requestResult);

                navigate('/MynaReceivePage4');
              }}>
                データ取得
              </CommonButton>
              <CommonButton isSecondary onClick={() => navigate('/SelectGettingData')}>
                キャンセル
              </CommonButton>
            </Col>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};
