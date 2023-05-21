import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import {
  Stack,
  Typography,
  DialogContentText,
  DialogContent,
  Dialog,
  TextField,
  DialogActions,
  DialogTitle,
} from '@mui/material';
import { Box } from '@mui/system';
import { Col } from '../common/Col';
import { CommonButton } from '../common/CommonButton';
import { DataResultPage } from './DataResultPage';

interface ReceiveResultData {
  title: string;
  subText: string;
  isSuccess: boolean;
  location: string;
  isShare: number; //0:最初の画面へ戻る、1:支援金の検索へ進む
}

export const DataReceivePage: FC = () => {
  const navigate = useNavigate();

  const [textValue, setTextValue] = useState<string>('');
  const [textError, setTextError] = useState<boolean>(false);
  const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState<boolean>(true);

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const [resultPageIsShow, setResultPageIsShow] = useState<boolean>(false);
  const [resultData, setResultData] = useState<ReceiveResultData>({
    title: '',
    subText: '',
    isSuccess: false,
    location: '',
    isShare: 0,
  });

  const receiveData = () => {
    console.log('receiveDataメソッドがよばれました。');
    setResultData({
      title: '受け取り完了',
      subText: 'データの受け取りが完了しました。',
      isSuccess: true,
      location: '/SupportSearch',
      isShare: 1,
    });
    setResultPageIsShow(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handle = () => {
    console.log('clicked');
  };

  const textValidation = (text: string) => {
    if (text === '') {
      setTextError(true);
      setNextButtonIsDisabled(true);
    } else {
      setTextError(false);
      setNextButtonIsDisabled(false);
    }
  };

  if (resultPageIsShow) {
    return (
      <DataResultPage
        title={resultData.title}
        subText={resultData.subText}
        isSuccess={resultData.isSuccess}
        location={resultData.location}
        isShare={resultData.isShare}
      />
    );
  } else {
    return (
      <MainLayout title="共有データの受け取り">
        {/*受信確認モーダル*/}
        <Dialog open={dialogOpen} onClose={handleClose}>
          <DialogTitle>受け取りデータ確認</DialogTitle>
          <DialogContent>
            <DialogContentText>以下のデータを受け取ります。よろしいですか？</DialogContentText>
            <DialogContentText>
              <ul>
                <li>データ名: XXXX</li>
              </ul>
            </DialogContentText>
            <DialogActions>
              <CommonButton isDisabled={false} onClick={receiveData}>
                はい
              </CommonButton>
              <CommonButton isSecondary onClick={handleClose}>
                いいえ
              </CommonButton>
            </DialogActions>
          </DialogContent>
        </Dialog>

        <Box>
          <Typography variant="body1" style={{ marginBottom: '20px' }}>
            共有されたデータを受け取ります。
            <br />
            共有リンクを入力して「次へ」を押してください。
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              共有リンク <span style={{ color: '#FF0000' }}>必須</span>
            </Typography>
            <TextField
              fullWidth
              required
              error={textError}
              id="outlined-required"
              defaultValue={''}
              value={textValue}
              placeholder="入力してください"
              onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setTextValue(event.target.value);
                textValidation(event.target.value);
              }}
            />
            {textError ? <p style={{ color: '#FF0000' }}>共有リンクは必須入力です。</p> : <p> </p>}
            <CommonButton isText onClick={handle}>
              共有リンクの取得方法
            </CommonButton>
          </Stack>
          <Box sx={{ marginTop: '30px', mx: 2, mt: 2 }}>
            <Col spacing={2}>
              <CommonButton isDisabled={nextButtonIsDisabled} onClick={() => setDialogOpen(true)}>
                次へ
              </CommonButton>
              <CommonButton isSecondary onClick={() => navigate('/DataTop')}>
                戻る
              </CommonButton>
            </Col>
          </Box>
        </Box>
      </MainLayout>
    );
  }
};
