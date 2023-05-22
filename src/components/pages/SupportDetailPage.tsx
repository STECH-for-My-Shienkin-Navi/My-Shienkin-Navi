import { FC } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { MainLayout } from '../layout/MainLayout';
import supportImg from '../../assets/supportImg.png';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../common/CommonButton';
import { infoList } from '../../data/infoList';


const OKChip = () => {
  return (
    <Chip
      label="OK"
      sx={{
        color: 'white',
        bgcolor: '#71D960',
        height: '22px',
      }}
      style={{ maxWidth: '90px', minWidth: '90px' }}
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
        height: '22px',
      }}
      style={{ maxWidth: '90px', minWidth: '90px' }}
    />
  );
};

export const SupportDetailPage: FC = () => {
  const navigator = useNavigate();
  const navList = [
    {
      label: 'この支援金を申請する',
      path: null,
      isPrimary: true,
    },
    {
      label: '支援金の選択肢に戻る',
      path: '/SupportList',
      isSecondary: true,
    },
  ]  
  return (
    <MainLayout title="支援金の詳細">
      <Box>
        <Box sx={{ textAlign: 'center' }}>
          <img src={supportImg} loading="lazy" style={{ width: 250 }} alt="支援のイラスト" />
        </Box>
        <Box sx={{ mx: 2, mt: 2 }}>
          <Col spacing={2}>
            {infoList.map((item) => {
              return (
                <Box key={item.title}>
                  <Typography variant="h5">{item.title}</Typography>
                  {item.contents.map((content, index) => {
                    return (
                      <Box key={content}>
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
            {navList.map((item, index) => {
              return (
                <CommonButton
                  key={item.label}
                  isPrimary={item.isPrimary}
                  isSecondary={item.isSecondary}
                  onClick={() => {
                    item.path && navigator(item.path)
                  }}
                  isDisabled={index === 0 ? !infoList.map(item => item.status?.every(status => status === true)).every(statusList => statusList === true || statusList === undefined) : false}
                >
                  {item.label}
                </CommonButton>
              );
            })}
          </Col>
        </Box>
      </Box>
    </MainLayout>
  );
};
