import { Stack } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  spacing?: number;
};

export const Col: FC<Props> = ({ children, spacing }) => {
  return <Stack spacing={spacing}>{children}</Stack>;
};
