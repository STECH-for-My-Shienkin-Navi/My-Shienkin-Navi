import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { Row } from '../common/Row';

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
    path: '/SupportSearch',
  },
  {
    title: '個人データの共有・受け取り',
    description:
      '支援金の検索や新生児に、他の方（同世帯）の個人データを一時的に共有・受け取ることができます。',
    path: '/DataTop',
  },
];

export const TopPage: FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title="My支援金ナビ">
      <Stack spacing={2}>
        {cardItem.map((item) => {
          return (
            <Card
              key={item.title}
              variant="outlined"
              style={cardStyle}
              onClick={() => navigate(item.path)}
            >
              <Row>
                <Box sx={{ bgcolor: 'primary.main', width: '25px' }} />
                <CardContent>
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.description}</Typography>
                </CardContent>
              </Row>
            </Card>
          );
        })}
      </Stack>
    </MainLayout>
  );
};
