import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography } from '@mui/material';
import checkImg from '../../assets/check.png';
import crossImg from '../../assets/cross.png';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  subText: string;
  isSuccess: boolean;
  location: string;
  isShare: number; //0:最初の画面へ戻る、1:支援金の検索へ進む
};

export const DataResultPage: FC<Props> = ({ title, subText, isSuccess, location, isShare }) => {
  const navigator = useNavigate();

  const navList = [
    {
      label: '最初の画面へ戻る',
      isSecondary: true,
    },
    {
      label: '支援金の検索へ進む',
      isPrimary: true,
    },
  ];

  return (
    <MainLayout title={title}>
      <Box sx={{ width: '100%' }}>
        <Typography align="left">{subText}</Typography>
        <Box sx={{ textAlign: 'center', mt: 15 }}>
          {isSuccess ? (
            <img
              src={checkImg}
              loading="lazy"
              style={{ width: 100 }}
              alt="チェックマークのイラスト"
            />
          ) : (
            <img src={crossImg} loading="lazy" style={{ width: 100 }} alt="バツマークのイラスト" />
          )}
        </Box>
        <Box sx={{ mx: 2, mt: 30 }}>
          <Col spacing={2}>
            <CommonButton
              key={navList[isShare].label}
              isPrimary={navList[isShare].isPrimary}
              isSecondary={navList[isShare].isSecondary}
              onClick={() => {
                navigator(location);
              }}
            >
              {navList[isShare].label}
            </CommonButton>
          </Col>
        </Box>
      </Box>
    </MainLayout>
  );
};
