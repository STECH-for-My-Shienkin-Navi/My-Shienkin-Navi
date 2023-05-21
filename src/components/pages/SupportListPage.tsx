import { FC } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { CommonButton } from '../common/CommonButton';
import { CommonCard } from '../common/CommonCard';
import { useNavigate } from 'react-router-dom';
import { Stack, Typography, IconButton, } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastPageIcon from '@mui/icons-material/LastPage';

export const SupportListPage: FC = () => {
  const navigate = useNavigate();

  // デモの支援金一覧
  const navList = [
    {
      'title': '支援金名１',
      'description': '支援金１の説明支援金１の説明支援金１の説明支援金１の説明支援金１の説明支援金１の説明',
      'link': '/SupportDetail'
    },
    {
      'title': '支援金名２',
      'description': '支援金２の説明',
      'link': '/SupportDetail'
    },
    {
      'title': '支援金名３',
      'description': '支援金３の説明',
      'link': '/SupportDetail'
    },
    {
      'title': '支援金名４',
      'description': '支援金４の説明',
      'link': '/SupportDetail'
    },
  ]

  return (
    <MainLayout title="奨学金の一覧">
      <Stack sx={{width: '100%'}} spacing={3}>
        {navList.map((item) => {
          return (
            <CommonCard title={item.title} onClick={() => navigate(item.link)}>
              <Typography variant="body1" sx={{marginBottom: '20px'}}>{item.description}</Typography>
              <CommonButton 
                children="詳細確認・申請"
                onClick={() => {
                  console.log("aaa")
                  navigate('/SupportDetail')
                }}
              />
            </CommonCard>
          )
        })}

        <Stack direction="row" spacing={4} sx={{mx: 4}} alignItems="center" justifyContent="center">
          <IconButton sx={{border: "1px solid"}}><FirstPageIcon /></IconButton>
          <IconButton sx={{border: "1px solid"}}><NavigateBeforeIcon /></IconButton>
          <Typography variant='body2'>1 / 2</Typography>
          <IconButton sx={{border: "1px solid"}}><NavigateNextIcon /></IconButton>
          <IconButton sx={{border: "1px solid"}}><LastPageIcon /></IconButton>
        </Stack>

        <CommonButton 
          children="種類の選択へ戻る"
          onClick={() => {navigate('/SupportSearch')}}
          isSecondary
        />

      </Stack>


    </MainLayout>
  );
};
