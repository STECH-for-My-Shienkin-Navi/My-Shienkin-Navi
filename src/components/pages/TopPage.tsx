import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { Card, CardContent, Stack, Typography } from '@mui/material';

const cardStyle = {
  width: '90%',
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  cursor: 'pointer'
};

export const TopPage: FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="My支援金ナビ">
      <Stack spacing={2}>
      <Card variant='outlined' style={cardStyle} onClick={() => navigate("/support-search")}>
        <CardContent>
          <Typography variant='h5' style={{fontWeight: "bold"}}>支援金検索</Typography>
          <Typography variant='body1'>あなたのマイナポータルの情報を用いて、ピッタリの支援金を検索できます。</Typography>
        </CardContent>
      </Card>
      <Card variant='outlined' style={cardStyle} onClick={() => navigate("/data-top")}>
        <CardContent>
          <Typography variant='h5' style={{fontWeight: "bold"}}>個人データの共有・受け取り</Typography>
          <Typography variant='body1'>支援金の検索や新生児に、他の方（同世帯）の個人データを一時的に共有・受け取ることができます。</Typography>
        </CardContent>
      </Card>
      </Stack>
    </MainLayout>
  );
};
