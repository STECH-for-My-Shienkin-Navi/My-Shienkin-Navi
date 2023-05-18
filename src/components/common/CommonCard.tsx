import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
  index?: number;
  onClick?: (index: number) => void;
};

export const CommonCard: FC<Props> = ({ children, title, index, onClick }) => {
  const handleClick = () => {
    if (onClick && index) {
      onClick(index);
    }
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick} disabled={onClick ? false : true}>
        <CardContent>
          <Box>
            <Typography variant="h6">{title}</Typography>
            {children}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
