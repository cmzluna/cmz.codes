import { ButtonContainer } from "./styles";

interface ButtonProps extends React.DOMAttributes<HTMLDivElement> {
  secondary?: boolean;
  color?: string;
  background?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default Button;
