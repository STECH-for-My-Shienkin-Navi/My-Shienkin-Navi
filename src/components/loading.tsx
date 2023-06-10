import React, { useState } from 'react';
import { DataReceivePage } from '../components/pages/DataReceivePage';
import { CircularProgress, Box } from '@mui/material';

export const Loading = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    position="absolute"
    top={0}
    left={0}
    width="100%"
    height="100%"
    bgcolor="rgba(0, 0, 0, 0.5)" // 背景を薄暗くするための色設定
    zIndex={9999}
  >
    <CircularProgress color="primary" size={80} />
  </Box>
);

export const SampleLoading = () => {
  const [isLoading, setIsLoading] = useState(true); // ロード中かどうかの状態

  return (
    <div>
      <DataReceivePage />
      {isLoading && <Loading />}
    </div>
  );
};
