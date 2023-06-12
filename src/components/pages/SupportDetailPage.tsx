import { FC } from 'react';
import { Box, Chip, Grid, Typography } from '@mui/material';
import { MainLayout } from '../layout/MainLayout';
import supportImg from '../../assets/supportImg.png';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../common/CommonButton';
import { useRecoilValue } from 'recoil';
import { SupportDataListState } from '../../data/SupportDataList';
import { SupportDataType } from '../../types/SupportDataType';
import { SelectSupportIdState } from '../../hooks/SelectSupportIdState';

const dispItem = [
  {
    title: '支援金名',
    key: 'name',
  },
  {
    title: '募集団体',
    key: 'organization',
  },
  {
    title: '支援内容',
    key: 'content',
  },
  {
    title: '募集背景',
    key: 'background',
  },
];

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
  const supportDataList = useRecoilValue(SupportDataListState);
  const selectItemId = useRecoilValue(SelectSupportIdState);
  const dispContent = supportDataList[selectItemId];

  return (
    <MainLayout title="支援金の詳細">
      <Box>
        <Box sx={{ textAlign: 'center' }}>
          <img src={supportImg} loading="lazy" style={{ width: 250 }} alt="支援のイラスト" />
        </Box>
        <Box sx={{ mx: 2, mt: 2 }}>
          <Col spacing={2}>
            {dispItem.map((item) => {
              const key = item.key as keyof SupportDataType;
              return (
                <Box key={item.title}>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ pl: 2, mt: 1 }}>{dispContent[key]}</Typography>
                </Box>
              );
            })}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h5">支援金情報URL</Typography>
              <Typography sx={{ pl: 2, mt: 1 }}>
                <a href={dispContent.url}>{dispContent.url}</a>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5">募集条件 適合チェック</Typography>
              <Box sx={{ pl: 2, mt: 1 }}>
                <Col spacing={0.5}>
                  {supportDataList[selectItemId].conditions.map((condition, index) => {
                    return (
                      <Grid container key={condition}>
                        <Grid item xs={6}>
                          <Typography>{condition}</Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="center">
                          {/* {supportDataList[selectItemId].status[index] ? <OKChip /> : <NGChip />} */}
                          {index !== 1 ? <OKChip /> : <NGChip />}
                        </Grid>
                      </Grid>
                    );
                  })}
                </Col>
              </Box>
            </Box>
          </Col>
        </Box>
        <Box sx={{ mx: 2, mt: 8 }}>
          <Col spacing={2}>
            <CommonButton isPrimary isDisabled onClick={() => {}}>
              この奨学金を申請する
            </CommonButton>
            <CommonButton isSecondary onClick={() => navigator('/SupportList')}>
              支援金の選択肢に戻る
            </CommonButton>
            {/* {navList.map((item, index) => {
              return (
                <CommonButton
                  key={item.label}
                  isPrimary={item.isPrimary}
                  isSecondary={item.isSecondary}
                  onClick={() => {
                    item.path && navigator(item.path);
                  }}
                  isDisabled={true}
                  // isDisabled={
                  //   index === 0
                  //     ? !infoList
                  //         .map((item) => item.status?.every((status) => status === true))
                  //         .every((statusList) => statusList === true || statusList === undefined)
                  //     : false
                  // }
                >
                  {item.label}
                </CommonButton>
              );
            })} */}
          </Col>
        </Box>
      </Box>
    </MainLayout>
  );
};
