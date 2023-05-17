import { Stack } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  spacing?: number;
};

export const Row: FC<Props> = ({ children, spacing }) => {
  return (
    <Stack direction="row" spacing={spacing}>
      {children}
    </Stack>
  );
};
