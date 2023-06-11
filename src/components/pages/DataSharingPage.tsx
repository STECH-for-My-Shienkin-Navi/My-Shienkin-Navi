import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography, TextField, Snackbar } from '@mui/material';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';


type Props = {
  url: string;
};

export const DataSharingPage: FC<Props> = ({url}) => {
  const navigate = useNavigate();

  const navList = [
    {
      label: 'リンクをコピー',
      isPrimary: true,
    },
    {
      label: '最初の画面へ戻る',
      isSecondary: true,
    },
  ];

  const [copyStatus, setCopyStatus] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopyStatus('リンクがコピーされました。');
        setSnackbarOpen(true);
        setTimeout(() => {
          setCopyStatus('');
          setSnackbarOpen(false);
        }, 2000); // Clear the copy status after 2 seconds
      })
      .catch((error) => {
        setCopyStatus('Failed to copy to clipboard');
        console.error('Failed to copy to clipboard:', error);
        setSnackbarOpen(true);
        setTimeout(() => {
          setCopyStatus('');
          setSnackbarOpen(false);
        }, 2000); // Clear the copy status after 2 seconds
      });
  };


  return (
    <MainLayout title="共有リンク">
      <Box sx={{ width: '100%' }}>
        <Typography align="left">下記のリンクからデータを共有できます。</Typography>
        <Box sx={{ mx: 2, mt: 10 }}>
          <Col spacing={2}>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              共有リンク
            </Typography>
            <Box sx={{ minWidth: 100, maxWidth: 400 }}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={url}
              />
            </Box>
            <Box>
              <CommonButton
                key={navList[0].label}
                isPrimary={navList[0].isPrimary}
                isSecondary={navList[0].isSecondary}
                onClick={copyToClipboard}
              >
                {navList[0].label}
              </CommonButton>
            </Box>
            <CommonButton
              key={navList[1].label}
              isPrimary={navList[1].isPrimary}
              isSecondary={navList[1].isSecondary}
              onClick={() => navigate('/DataTop')}
            >
              {navList[1].label}
            </CommonButton>
          </Col>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message={copyStatus}
      />
    </MainLayout>
  );
};
