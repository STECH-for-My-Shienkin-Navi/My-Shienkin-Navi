import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography, TextField } from '@mui/material';
import familyImg from '../../assets/familImg.png';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';

export const PasswordEntryPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainLayout title="認証コードの入力">
        <Box>
          <Typography sx={{ mt: 2, textAlign: 'center' }}>
            マイナンバーカードの
            <br />
            利用者証明用電子証明書パスワード(4桁の数字)
            <br />
            を入力してください。
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ mx: 2, mt: 4, display: 'grid', justifyContent: 'center' }}
          />

          <Box sx={{ marginTop: '30px', mx: 2, mt: 6 }}>
            <Col spacing={2}>
              <CommonButton isPrimary onClick={() => navigate('/DataTop')}>
                OK
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
