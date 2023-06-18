import { Button } from '@mui/material';

interface ButtonComponentProps {
  text: string;
  onClickFn: () => void;
  heightButton?: number;
  widthButton?: number;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  heightButton = 140,
  widthButton = 140,
  onClickFn
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onClickFn}
      sx={{
        height: heightButton,
        width: widthButton,
        ml: 2,
        mt: 2
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
