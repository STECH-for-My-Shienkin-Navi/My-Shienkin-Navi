import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from '../loading';
import axios from 'axios';


export const MynaReceivePage4: FC = () => {
  const navigator = useNavigate();

  const navList = [
    {
      label: '共有リンク作成',
      isPrimary: true,
      location: "/DataSharing"
    },
  ];

  const listData = [
    {
        infoname: "所得・個人住民税情報",
        largeCategory: "自己情報取得API",
        category: "税・所得, 税・所得・口座情報"
    },
    {
        infoname: "国民年金・被用者年金の給付・保険料徴収の情報",
        largeCategory: "自己情報取得API",
        category: "年金, 年金関係"
    },
    {
        infoname: "銀行名、支店名、口座番号、および口座名義カナなどの公金受取口座の情報",
        largeCategory: "自己情報取得API",
        category: "公金受け取り口座, 税・所得・口座情報"
    },
    {
        infoname: "住民票関係情報",
        largeCategory: "自己情報取得API",
        category: "世帯情報, 戸籍・世帯情報"
    },
    {
        infoname: "特定健診情報",
        largeCategory: "医療保険情報取得API",
        category: "健診情報・基本項目, 健診情報・質問票（特定健診）, 特定健診・質問票（後期高齢者健診）, 特定健診情報, 資格情報"
    },
  ]

  const sampleData = {
    data: {
      aaaa: "aaaaaa",
      bbbb: 10000,
    }
  }

  const [isLoading, setIsLoading] = useState(false); // ロード中かどうかの状態

  return (
    <>
      {isLoading && <Loading />}
      <MainLayout title="データ取得結果">
        <Box>
          <Typography>
            選択された以下の情報を取得しました。
          </Typography>
          <Box sx={{ textAlign: 'center', marginTop: "30px" }}>
              <TableContainer>
                  <Table aria-label="simple table" sx={{ maxWidth: "400px" }}>
                      <TableHead>
                          <TableRow>
                              <TableCell align='left'>情報名</TableCell>
                              <TableCell align="right">大カテゴリ</TableCell>
                              <TableCell align="right">カテゴリ</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {listData.map((data) => {
                              return (
                                  <TableRow
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      key={data.infoname}>
                                      <TableCell align="left" sx={{minWidth: "150px"}}>{data.infoname}</TableCell>
                                      <TableCell align="right">{data.largeCategory}</TableCell>
                                      <TableCell align="right">{data.category}</TableCell>
                                  </TableRow>
                              )
                          })}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Box>
          <Box sx={{ mx: 2, mt: 30 }}>
            <Col spacing={2}>
              <CommonButton
                key={navList[0].label}
                isPrimary={navList[0].isPrimary}
                onClick={ async () => { // 共有リンク作成が押されたときの処理
                  setIsLoading(true);
                  var reqURL = 'http://127.0.0.1:5001/my-shienkin-navi-67cc2/us-central1/data';

                  // axiosで共有データをアップロード
                  const requestResult = await axios.post(reqURL, sampleData);
                  setIsLoading(false);

                  const shareLink = 'http://127.0.0.1:5001/my-shienkin-navi-67cc2/us-central1/data?shareCode=' + requestResult.data['shareCode'];
                  console.log(shareLink);

                  navigator(navList[0].location);
                }}
              >
                {navList[0].label}
              </CommonButton>
            </Col>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};
