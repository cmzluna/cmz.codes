import { useToggleLightMode } from "styles/ThemeProvider";
import { ButtonContainer } from "./styles";

interface ButtonProps extends React.DOMAttributes<HTMLDivElement> {
  secondary?: boolean;
  color?: string;
  background?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const { isLightMode } = useToggleLightMode();

  return (
    <ButtonContainer isLightMode={isLightMode} {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
