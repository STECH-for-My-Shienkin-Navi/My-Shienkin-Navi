import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography } from '@mui/material';
import familyImg from '../../assets/familImg.png';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';

export const MynaReceivePage4: FC = () => {
  const navigator = useNavigate();

  const navList = [
    {
      labele: 'データを共有する',
      path: '/DataShare',
      isPrimary: true,
    },
    {
      labele: '共有されたデータを受け取る',
      path: '/DataReceive',
      isSecondary: true,
    },
    {
      labele: 'データ共有についての説明を見る',
      path: '/',
      isText: true,
    },
    {
      labele: '最初の画面へ戻る',
      path: '/',
      isText: true,
    },
  ];

  return (
    <MainLayout title="データ取得結果">
      <Box>
        <Typography>
          選択した以下の情報を取得しました。
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          あああああ
        </Box>
      </Box>
    </MainLayout>
  );
};
