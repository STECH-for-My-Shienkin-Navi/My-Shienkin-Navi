import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { Row } from '../common/Row';
import { CommonCard } from '../common/CommonCard';
import checkpaper from '../../assets/checkpaper.png';
import datashare from '../../assets/datashare.png';

const cardStyle = {
  width: '90%',
  height: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto',
  cursor: 'pointer',
};

const cardItem = [
  {
    title: '支援金検索',
    description: 'あなたのマイナポータルの情報を用いて、ピッタリの支援金を検索できます。',
    img: checkpaper,
    path: '/SupportSearch',
  },
  {
    title: '個人データの共有・受け取り',
    description:
      '支援金の検索や新生児に、他の方（同世帯）の個人データを一時的に共有・受け取ることができます。',
    img: datashare,
    path: '/DataTop',
  },
];

export const TopPage: FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="My支援金ナビ">
      <Stack spacing={2}>
        <Typography sx={{ textAlign: 'center' }}>
          My支援金Naviでは各種支援金に
          <br />
          必要なデータの共有・受取・申請までを
          <br />
          ワンストップで行えます
        </Typography>
        {cardItem.map((item) => {
          return (
            <CommonCard
              key={item.title}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <Stack alignItems="center">
                <img src={item.img} loading="lazy" style={{ width: '200px' }} alt={item.title} />
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                  {item.title}
                </Typography>
              </Stack>
            </CommonCard>
          );
        })}
      </Stack>
    </MainLayout>
  );
};
