import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography } from '@mui/material';
import { CommonCard } from '../common/CommonCard';
import { Col } from '../common/Col';
import { supportMoneyList } from '../../data/supportMoneyList';
import { CommonButton } from '../common/CommonButton';
import { temporaryMoneyList } from '../../data/temporaryMoneyList';
import { useNavigate } from 'react-router-dom';

export const SupportSearchPage: FC = () => {
  const navigator = useNavigate();
  return (
    <MainLayout title="支援金検索">
      <Box>
        <Box>
          <Typography>あなたの状況で申請ができる支援金を検索します。</Typography>
        </Box>
        <Box sx={{ mx: 2, mt: 2 }}>
          <Typography variant="h5">おすすめ</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "“flex-start”",
              justifyContent: "flex-start",
              gap: "10px",
              overflowX: "scroll",
              width: "300px",
              padding: "10px"
            }}
          >
            {supportMoneyList.map((item) => {
              return (
                <Box key={item.title} sx={{ maxWidth: "200px", minWidth: "200px" }}>
                  <CommonCard onClick={() => navigator(item.path)} title={item.title}><Typography sx={{ lineBreak: "loose", whiteSpace: "normal" }}>{item.contents}</Typography></CommonCard>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Box sx={{ mx: 2, mt: 2 }}>
          <Box>
            <Typography variant="h5">種類から探す</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Col spacing={2}>
              {temporaryMoneyList.map((item) => {
                return (
                  <CommonButton
                    key={item.title}
                    isPrimary={false}
                    isSecondary={true}
                    onClick={() => navigator(item.path)}
                  >
                    {item.title}
                  </CommonButton>
                )
              })}
            </Col>
          </Box>
        </Box>
        <Box sx={{ mt: 8, mb: 4 }}>
          <CommonButton
            isPrimary={false}
            isSecondary={false}
            isText={true}
            onClick={() => navigator('/')}
          >
            {'最初の画面に戻る'}
          </CommonButton>
        </Box>
      </Box>
    </MainLayout>
  );
};
