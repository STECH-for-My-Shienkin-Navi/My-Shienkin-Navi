import { Button, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isText?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
};

export const CommonButton: FC<Props> = ({
  children,
  isPrimary,
  isSecondary,
  isText,
  isDisabled,
  onClick,
}) => {
  const selectVariant = () => {
    if (isPrimary) return 'contained';
    if (isSecondary) return 'outlined';
    if (isText) return 'text';
    return 'contained';
  };

  return (
    <Button size="large" variant={selectVariant()} disabled={isDisabled} onClick={onClick}>
      <Typography sx={{ textDecoration: isText ? 'underline' : '' }}>{children}</Typography>
    </Button>
  );
};
