import { Box, Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const MainLayout: FC<Props> = ({ title, children }) => {
  return (
    <Box sx={{ bgcolor: '#F4F4F4' }}>
      <Container maxWidth="xs" sx={{ p: 5, bgcolor: 'white' }}>
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
