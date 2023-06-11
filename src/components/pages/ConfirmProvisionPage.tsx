import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography } from '@mui/material';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';

export const ConfirmProvisionPage: FC = () => {
  const navigate = useNavigate();

  const selectShare = [true, true, false, false]; //前の画面で選択されたデータの番号を受け取る
  const agreeList = ['所得・個人住民税情報', '年金情報', '世帯情報', '医療保険情報'];

  return (
    <>
      <MainLayout title="情報提供可否の確認">
        <Box>
          <Typography sx={{ mt: 2, mb: 4 }}>
            マイナンバーカードの読み取りが完了しました。
            <br />
            引き続き、情報提供手続きを実施いたします。
            <br />
            マイナポータルデモアプリに
            <br />
            以下の情報を提供してもよい場合、
            <br />
            「データ取得」ボタンを押してください。
          </Typography>

          <ul>
            {agreeList.map((item, index) =>
              selectShare[index] ? <li key={item}>{item}</li> : null
            )}
          </ul>

          <Box sx={{ marginTop: '40px', mx: 2, mt: 6 }}>
            <Col spacing={2}>
              <CommonButton isPrimary onClick={() => navigate('/')}>
                データ取得
              </CommonButton>
              <CommonButton isSecondary onClick={() => navigate('/DataTop')}>
                キャンセル
              </CommonButton>
            </Col>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};
