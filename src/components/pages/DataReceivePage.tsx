import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Typography } from '@mui/material';

export const DataReceivePage: FC = () => {
  return (
    <MainLayout title="共有データの受け取り">
      <Typography variant='body1'>共有されたデータを受け取ります。<br></br>共有リンクを入力して「次へ」を押してください。</Typography>
    </MainLayout>
  );
};
