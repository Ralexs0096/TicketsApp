import { Box, CardContent } from '@mui/material';
import Card from '@mui/material/Card';

interface CardWrapperProps {
  children: JSX.Element | JSX.Element[];
  variant?: 'outlined' | 'elevation';
  isCenter?: boolean;
  heightCardContainer?: string | number;
  heightCard?: string | number;
  widthCard?: string | number;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  variant = 'outlined',
  isCenter,
  heightCardContainer = '98vh',
  heightCard,
  widthCard
}) => {
  return (
    <Box
      sx={{
        ...(isCenter && {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }),
        height: heightCardContainer
      }}
    >
      <Card
        variant={variant}
        sx={{
          width: widthCard,
          height: heightCard
        }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

export default CardWrapper;
