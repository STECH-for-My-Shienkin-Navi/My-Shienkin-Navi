import { ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { theme } from '../theme/theme';

type Props = {
  children: React.ReactNode;
};

export const AppProviders: FC<Props> = ({ children }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RecoilRoot>
  );
};
