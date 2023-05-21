import { FC, useState } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Stack, Typography } from '@mui/material';
import { TextField } from '@mui/material';

export const DataReceivePage: FC = () => {
  const [textValue, setTextValue] = useState<string>('');
  const [textError, setTextError] = useState<boolean>(false);

  const textValidation = (text: string) => {
    if (text === '') {
      setTextError(true);
    } else {
      setTextError(false);
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
      </Stack>
    </MainLayout>
  );
};
