import { Box, Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const MainLayout: FC<Props> = ({ title, children }) => {
  return (
    <Box sx={{ bgcolor: '#D9D9D9' }}>
      <Container maxWidth="sm" sx={{ p: 5, bgcolor: 'white' }}>
        <Typography variant="h4" sx={{ textAlign: 'left' }}>
          {title}
        </Typography>
        <Stack alignItems="center" sx={{ mt: 3 }}>
          {children}
        </Stack>
      </Container>
    </Box>
  );
};
