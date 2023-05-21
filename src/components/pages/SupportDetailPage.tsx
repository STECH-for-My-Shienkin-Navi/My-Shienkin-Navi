import { FC } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { MainLayout } from '../layout/MainLayout';
import supportImg from '../../assets/supportImg.png';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../common/CommonButton';
import { infoList } from '../../data/infoList';

export const SupportDetailPage: FC = () => {
  const navigator = useNavigate();
  const navList = [
    {
      labele: 'この支援金を申請する',
      path: null,
      isPrimary: true,
    },
    {
      labele: '支援金の選択肢に戻る',
      path: '/SupportList',
      isSecondary: true,
    },
  ]
  const OKChip = () => {
    return (
      <Chip
        label="OK"
        sx={{
          color: 'white',
          bgcolor: '#71D960',
          borderRadius: '20px',
          height: '22px',
          width: '90px',
        }}
      />
    );
  };
  const NGChip = () => {
    return (
      <Chip
        label="NG"
        sx={{
          color: 'white',
          bgcolor: '#FF4D4D',
          borderRadius: '20px',
          height: '22px',
          width: '90px',
        }}
      />
    );
  };
  return (
    <MainLayout title="支援金の詳細">
      <Box>
        <Box sx={{ textAlign: 'center' }}>
          <img src={supportImg} loading="lazy" style={{ width: 250 }} alt="家族のイラスト" />
        </Box>
        <Box sx={{ mx: 2, mt: 2 }}>
          <Col spacing={2}>
            {infoList.map((item) => {
              return (
                <Box>
                  <Typography variant="h5">{item.title}</Typography>
                  {item.contents.map((content, index) => {
                    return (
                      <Box>
                        {item.isURL ? (
                          <Typography sx={{ pl: 2 }}><a href="https://www.〇〇.com">{content}</a></Typography>
                        ) : (
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>
                            <Typography sx={{ pl: 2 }}>{content}</Typography>
                            {item.status && (item.status[index] ? <OKChip /> : <NGChip />)}
                          </Box>
                        )}
                      </Box>
                    )
                  })}
                </Box>
              )
            })}
          </Col>
        </Box>
        <Box sx={{ mx: 2, mt: 8 }}>
          <Col spacing={2}>
            {navList.map((item) => {
              return (
                <CommonButton
                  key={item.labele}
                  isPrimary={item.isPrimary}
                  isSecondary={item.isSecondary}
                  onClick={() => {
                    item.path && navigator(item.path);;
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
