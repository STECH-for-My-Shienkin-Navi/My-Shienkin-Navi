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
    <Button
      size="medium"
      variant={selectVariant()}
      disabled={isDisabled}
      fullWidth
      sx={{ p: 2, borderRadius: 2 }}
      onClick={onClick}
    >
      <Typography variant="body1" sx={{ textDecoration: isText ? 'underline' : '' }}>
        {children}
      </Typography>
    </Button>
  );
};
