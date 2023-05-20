import { FC } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { CommonButton } from '../components/common/CommonButton';
import { Box, Stack, Typography } from '@mui/material';
import { CommonCard } from '../components/common/CommonCard';
import { Row } from '../components/common/Row';
import { Col } from '../components/common/Col';

export const Dev: FC = () => {
  const handle = () => {
    console.log('clicked');
  };

  const cardHandle = (index: number) => {
    console.log(index);
  };

  return (
    <MainLayout title="コンポーネント">
      <Stack spacing={3}>
        <Box>
          <Typography sx={{ textAlign: 'center' }}>ボタン</Typography>
          <Box sx={{ p: 3, border: 'solid 0.5px', borderRadius: '10px' }}>
            <Col spacing={2}>
              <CommonButton onClick={handle}>Primary</CommonButton>
              <CommonButton isSecondary onClick={handle}>
                Secondary
              </CommonButton>
              <CommonButton isText onClick={handle}>
                Text
              </CommonButton>
              <CommonButton isDisabled onClick={handle}>
                Disabled
              </CommonButton>
            </Col>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ textAlign: 'center' }}>カード</Typography>
          <CommonCard title="CardTitle" onClick={cardHandle} index={1}>
            CardBodyText
          </CommonCard>
        </Box>
        <Box>
          <Typography sx={{ textAlign: 'center' }}>Row</Typography>
          <Box sx={{ p: 3, border: 'solid 0.5px', borderRadius: '10px' }}>
            <Row spacing={2}>
              {[...Array(3)].map((_, i) => {
                const key = Math.random();
                return (
                  <Box key={key} sx={{ bgcolor: 'primary.main', color: 'white' }}>
                    Row{i + 1}
                  </Box>
                );
              })}
            </Row>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ textAlign: 'center' }}>Col</Typography>
          <Box sx={{ p: 3, border: 'solid 0.5px', borderRadius: '10px' }}>
            <Col spacing={2}>
              {[...Array(3)].map((_, i) => {
                const key = Math.random();
                return (
                  <Box key={key} sx={{ bgcolor: 'primary.main', color: 'white' }}>
                    Col{i + 1}
                  </Box>
                );
              })}
            </Col>
          </Box>
        </Box>
      </Stack>
    </MainLayout>
  );
};
