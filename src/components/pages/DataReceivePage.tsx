import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { Stack, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Col } from '../common/Col';
import { CommonButton } from '../common/CommonButton';

export const DataReceivePage: FC = () => {
  const navigate = useNavigate();

  const [textValue, setTextValue] = useState<string>('');
  const [textError, setTextError] = useState<boolean>(false);
  const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState<boolean>(true);

  const handle = () => {
    console.log('clicked');
  };

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
    <MainLayout title="共有データの受け取り">
      <Typography variant='body1' style={{marginBottom: "20px"}}>共有されたデータを受け取ります。<br></br>共有リンクを入力して「次へ」を押してください。</Typography>
      <Stack spacing={1} style={{width: "70%"}}>
        <Typography variant='body1' style={{fontWeight: "bold"}}>共有リンク <span style={{color: "#FF0000"}}>必須</span></Typography>
        <TextField fullWidth required error={textError} id='outlined-required' defaultValue={''} value={textValue} placeholder='入力してください'
        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setTextValue(event.target.value);
          textValidation(event.target.value);
        }} />
        {textError ? <p style={{color: "#FF0000"}}>共有リンクは必須入力です。</p> : <p>        </p>}
        <CommonButton isText onClick={handle}>共有リンクの取得方法</CommonButton>
      </Stack>
      <Box sx={{marginTop: "30px"}}>
        <Col spacing={2}>
          <CommonButton isDisabled={nextButtonIsDisabled} onClick={handle}>次へ</CommonButton>
          <CommonButton isSecondary onClick={() => navigate('/DataTop')}>戻る</CommonButton>
        </Col>
      </Box>
    </MainLayout>
  );
};
