import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import {
  Checkbox,
  Stack,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
} from '@mui/material';
import { Box } from '@mui/system';
import { Col } from '../common/Col';
import { CommonButton } from '../common/CommonButton';

const data = [
  {
    label: '選択肢1',
    isCheck: false,
  },
  {
    label: '選択肢2',
    isCheck: false,
  },
  {
    label: '選択肢3',
    isCheck: false,
  },
  {
    label: '選択肢4',
    isCheck: false,
  },
];

export const DataSharePage: FC = () => {
  const navigate = useNavigate();

  const [CheckList, setCheckList] = useState(data);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const checkHandle = (index: number) => {
    const setItem = CheckList.map((prevItem, activeIndex) => {
      return {
        label: prevItem.label,
        isCheck: index === activeIndex ? !prevItem.isCheck : prevItem.isCheck,
      };
    });
    setCheckList([...setItem]);
  };

  return (
    <MainLayout title="共有データの選択">
      {/*共有確認モーダル*/}
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>共有データ確認</DialogTitle>
        <DialogContent>
          <DialogContentText>以下のデータを共有します。よろしいですか？</DialogContentText>
          <DialogContentText>
            <ul>
              <li>データ名: XXXX</li>
            </ul>
          </DialogContentText>
          <DialogActions>
            <CommonButton
              isDisabled={false}
              onClick={() => {
                handleClose();
                // ToDo: 遷移実装
                // navigate('/DataShareComplete');
              }}
            >
              はい
            </CommonButton>
            <CommonButton isSecondary onClick={handleClose}>
              いいえ
            </CommonButton>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        他の人へ共有したいデータの種類を選択してください。{' '}
      </Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        共有リンク <span style={{ color: '#FF0000' }}>必須</span>
      </Typography>
      <Stack>
        {CheckList.map((item, index) => {
          return (
            <Box key={item.label}>
              <Checkbox
                checked={item.isCheck}
                onChange={() => {
                  checkHandle(index);
                }}
              />
              {item.label}
            </Box>
          );
        })}
      </Stack>
      <Box sx={{ marginTop: '30px', mx: 2, mt: 2 }}>
        <Col spacing={2}>
          <CommonButton onClick={() => setDialogOpen(true)}>次へ</CommonButton>
          <CommonButton isSecondary onClick={() => navigate('/DataTop')}>
            戻る
          </CommonButton>
        </Col>
      </Box>
    </MainLayout>
  );
};
