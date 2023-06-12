import { FC, useState } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography, TextField } from '@mui/material';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';

export const PasswordEntryPage: FC = () => {
  const navigate = useNavigate();

  const [textValue, setTextValue] = useState<string>('');
  const [textError, setTextError] = useState<boolean>(false);
  const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState<boolean>(true);

  const textValidation = (text: string) => {
    if (text === '') {
      setTextError(true);
      setNextButtonIsDisabled(true);
    } else {
      setTextError(false);
      setNextButtonIsDisabled(false);
    }
  };

  return (
    <>
      <MainLayout title="認証コードの入力">
        <Box>
          <Typography sx={{ mt: 2 }}>
            マイナンバーカードの
            利用者証明用電子証明書パスワード(4桁の数字)
            を入力してください。
          </Typography>
          <TextField
            error={textError}
            id="outlined-basic"
            defaultValue={''}
            variant="outlined"
            sx={{ mx: 2, mt: 4, display: 'grid', justifyContent: 'center' }}
            onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              setTextValue(event.target.value);
              textValidation(event.target.value);
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {textError ? <p style={{ color: '#FF0000' }}>パスワードは必須入力です。</p> : <p> </p>}
          </Box>

          <Box sx={{ marginTop: '30px', mx: 2, mt: 6 }}>
            <Col spacing={2}>
              <CommonButton
                isDisabled={nextButtonIsDisabled}
                onClick={() => navigate('/ConfirmProvision', { replace: true })}
              >
                OK
              </CommonButton>

              <CommonButton isSecondary onClick={() => navigate('/DataShareAgree')}>
                キャンセル
              </CommonButton>
            </Col>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};
