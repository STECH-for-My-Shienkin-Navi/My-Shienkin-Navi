import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography } from '@mui/material';
import familyImg from '../../assets/familImg.png';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';

export const DataTopPage: FC = () => {
  const navigator = useNavigate();

  const navList = [
    {
      labele: 'データを共有する',
      path: '/SelectGettingData',
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
    <MainLayout title="データの共有・受取">
      <Box>
        <Typography>
          あなたの自己情報を、他の方（同世帯）と一時的に共有することができます。
          <br />
          また、他の方に共有されたデータを受け取ることができます。
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <img src={familyImg} loading="lazy" style={{ width: 250 }} alt="家族のイラスト" />
        </Box>
        <Box sx={{ mx: 2, mt: 2 }}>
          <Col spacing={2}>
            {navList.map((item) => {
              return (
                <CommonButton
                  key={item.labele}
                  isPrimary={item.isPrimary}
                  isSecondary={item.isSecondary}
                  isText={item.isText}
                  onClick={() => {
                    navigator(item.path);
                  }}
                >
                  {item.labele}
                </CommonButton>
              );
            })}
          </Col>
        </Box>
      </Box>
    </MainLayout>
  );
};
