import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography } from '@mui/material';
import { CommonCard } from '../common/CommonCard';
import { Col } from '../common/Col';
import { CommonButton } from '../common/CommonButton';
import { temporaryMoneyList } from '../../data/temporaryMoneyList';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { SupportDataListState } from '../../data/SupportDataList';
import { SelectSupportIdState } from '../../hooks/SelectSupportIdState';

export const SupportSearchPage: FC = () => {
  const navigator = useNavigate();
  const [SupportDataList, setSupportDataList] = useRecoilState(SupportDataListState);
  const [selectItemId, setSupportItemId] = useRecoilState(SelectSupportIdState);

  return (
    <MainLayout title="支援金検索">
      <Box>
        <Box>
          <Typography>あなたの情報から奨学金・支援金を検索します。</Typography>
        </Box>
        <Box sx={{ mx: 2, mt: 2 }}>
          <Typography variant="h5">おすすめ</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: '“flex-start”',
              justifyContent: 'flex-start',
              gap: '10px',
              overflowX: 'scroll',
              width: '320px',
              padding: '10px',
            }}
          >
            {SupportDataList.slice(0,5).map((item) => {
              return (
                <Box key={item.id} sx={{ maxWidth: '200px', minWidth: '200px' }}>
                  <CommonCard onClick={() => {
                    setSupportItemId(item.id-1);
                    navigator('/SupportDetail');
                  }} title={item.name}>
                    <Box sx={{ height: '100px' }}>
                      <Typography sx={{ lineBreak: 'loose', whiteSpace: 'normal' }}>
                        {item.content}
                      </Typography>
                    </Box>
                  </CommonCard>
                </Box>
              );
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
                );
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
