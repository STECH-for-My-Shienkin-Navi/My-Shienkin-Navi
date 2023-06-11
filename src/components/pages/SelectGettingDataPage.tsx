import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { DataResultPage } from './DataResultPage';
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
import { useRecoilState } from 'recoil';
import { SelectGettingDataState, SelectGettingDataType } from '../../hooks/SelectGettingDataState';

interface ReceiveResultData {
  title: string;
  subText: string;
  isSuccess: boolean;
  location: string;
  isShare: number; //0:最初の画面へ戻る、1:支援金の検索へ進む
}

export const SelectGettingDataPage: FC = () => {
  const navigate = useNavigate();

  const [CheckList, setCheckList] = useRecoilState(SelectGettingDataState);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [checkBoxError, setCheckBoxError] = useState(false);
  const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState<boolean>(true);

  const [resultPageIsShow, setResultPageIsShow] = useState<boolean>(false);
  const [resultData, setResultData] = useState<ReceiveResultData>({
    title: '',
    subText: '',
    isSuccess: false,
    location: '',
    isShare: 0,
  });

  const handleSelectGetData = () => {
    navigate('/DataShareAgree');
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const checkHandle = (index: number) => {
    let checkedFlag = false;
    const setItem: SelectGettingDataType[] = CheckList.map((prevItem, activeIndex) => {
      if (index === activeIndex ? !prevItem.isCheck : prevItem.isCheck) checkedFlag = true;
      return {
        id: prevItem.id,
        label: prevItem.label,
        isCheck: index === activeIndex ? !prevItem.isCheck : prevItem.isCheck,
      };
    });
    setCheckList([...setItem]);
    setNextButtonIsDisabled(!checkedFlag);
    setCheckBoxError(!checkedFlag);
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
      <>
        <MainLayout title="共有データの選択">
          {/*共有確認モーダル*/}
          <Box>
            <Typography variant="body1" style={{ marginBottom: '20px' }}>
              他の人へ共有したいデータの種類を選択してください。{' '}
            </Typography>
            <Typography variant="body1" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
              共有リンク <span style={{ color: '#FF0000' }}>必須</span>
            </Typography>
            <Stack>
              {CheckList.map((item, index) => {
                return (
                  <Box key={item.label} display="flex" alignItems="center" marginBottom="10px">
                    <Checkbox
                      checked={item.isCheck}
                      onChange={() => {
                        checkHandle(index);
                      }}
                    />
                    <Typography style={{ alignSelf: 'center' }}>{item.label}</Typography>
                  </Box>
                );
              })}
            </Stack>
            <Typography variant="body1" sx={{ color: checkBoxError ? 'red' : 'white' }}>
              1つ以上選択する必要があります。
            </Typography>

            <Box sx={{ marginTop: '30px', mx: 2, mt: 2 }}>
              <Col spacing={2}>
                <CommonButton onClick={() => setDialogOpen(true)} isDisabled={nextButtonIsDisabled}>
                  次へ
                </CommonButton>
                <CommonButton isSecondary onClick={() => navigate('/DataTop')}>
                  戻る
                </CommonButton>
              </Col>
            </Box>
          </Box>
        </MainLayout>

        <Dialog open={dialogOpen} onClose={handleClose}>
          <DialogTitle>共有データ確認</DialogTitle>
          <DialogContent>
            <DialogContentText>以下のデータを共有します。よろしいですか？</DialogContentText>
            <DialogContentText>
              <ul>
                {CheckList.map((item, index) => {
                  if (item.isCheck) {
                    return <li>{item.label}</li>;
                  }
                })}
              </ul>
            </DialogContentText>
            <DialogActions>
              <CommonButton onClick={handleSelectGetData}>はい</CommonButton>
              <CommonButton isSecondary onClick={handleClose}>
                いいえ
              </CommonButton>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </>
    );
  }
};
