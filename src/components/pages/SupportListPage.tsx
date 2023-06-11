import { FC, useState, useEffect } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { CommonButton } from '../common/CommonButton';
import { CommonCard } from '../common/CommonCard';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography, IconButton } from '@mui/material';
import { supportMoneyList } from '../../data/supportMoneyList';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastPageIcon from '@mui/icons-material/LastPage';

export const SupportListPage: FC = () => {
  const navigate = useNavigate();
  const itemsPerPage = 4; // 1ページあたりのアイテム数
  const [currentPage, setCurrentPage] = useState(0); // 現在のページ数
  const [currentList, setCurrentList] = useState(supportMoneyList.slice(0, itemsPerPage)); // 現在表示するリスト

  useEffect(() => {
    // ページが変更された時に表示するリストを更新
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentList(supportMoneyList.slice(start, end));
  }, [currentPage]);

  const maxPage = Math.ceil(supportMoneyList.length / itemsPerPage) - 1; // 最大ページ数

  return (
    <MainLayout title="奨学金の一覧">
      <Stack sx={{ width: '100%' }} spacing={3}>
        {currentList.map((item, index) => {
          return (
            <CommonCard key={index} title={item.title} onClick={() => navigate(item.path)}>
              <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                {item.contents}
              </Typography>
              <CommonButton
                children="詳細確認・申請"
                onClick={() => {
                  console.log('aaa');
                  navigate('/SupportDetail');
                }}
              />
            </CommonCard>
          );
        })}

        <Stack
          direction="row"
          spacing={4}
          sx={{ mx: 4 }}
          alignItems="center"
          justifyContent="center"
        >
          <IconButton sx={{ border: '1px solid' }} onClick={() => setCurrentPage(0)}>
            <FirstPageIcon />
          </IconButton>
          <IconButton
            sx={{ border: '1px solid' }}
            onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <Typography variant="body2" noWrap style={{ marginLeft: '18px' }}>
            {currentPage + 1} / {maxPage + 1}
          </Typography>
          <IconButton
            sx={{ border: '1px solid' }}
            onClick={() => currentPage < maxPage && setCurrentPage(currentPage + 1)}
          >
            <NavigateNextIcon />
          </IconButton>
          <IconButton sx={{ border: '1px solid' }} onClick={() => setCurrentPage(maxPage)}>
            <LastPageIcon />
          </IconButton>
        </Stack>

        <CommonButton
          children="種類の選択へ戻る"
          onClick={() => {
            navigate('/SupportSearch');
          }}
          isSecondary
        />
      </Stack>
    </MainLayout>
  );
};
