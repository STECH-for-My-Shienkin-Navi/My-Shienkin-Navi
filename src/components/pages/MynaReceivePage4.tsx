import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { CommonButton } from '../common/CommonButton';
import { Col } from '../common/Col';
import { useNavigate } from 'react-router-dom';


export const MynaReceivePage4: FC = () => {
  const navigator = useNavigate();

  const navList = [
    {
      label: '共有リンク作成',
      isPrimary: true,
      location: ""
    },
  ];

  const listData = [
    {
        infoname: "情報1",
        largeCategory: "大カテゴリ1大カテゴリ1大カテゴリ1",
        category: "カテゴリ1カテゴリ1カテゴリ1"
    },
    {
        infoname: "情報2",
        largeCategory: "大カテゴリ2",
        category: "カテゴリ2"
    },
    {
        infoname: "情報3",
        largeCategory: "大カテゴリ3",
        category: "カテゴリ3"
    }
  ]

  return (
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
            {listData.map((data, index) => {
                return (
                    <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
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
              onClick={() => {
                navigator(navList[0].location);
              }}
            >
              {navList[0].label}
            </CommonButton>
          </Col>
        </Box>
      </Box>
    </MainLayout>
  );
};
