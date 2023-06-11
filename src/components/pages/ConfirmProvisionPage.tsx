import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography } from '@mui/material';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';
import { SelectGettingDataState } from '../../hooks/SelectGettingDataState';
import { useRecoilValue } from 'recoil';

export const ConfirmProvisionPage: FC = () => {
  const navigate = useNavigate();
  const CheckList = useRecoilValue(SelectGettingDataState);

  return (
    <>
      <MainLayout title="情報提供可否の確認">
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
              <CommonButton isPrimary onClick={() => navigate('/MynaReceivePage4')}>
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
