import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledButton } from "../style";
import { goToLogin, goToProfile, goTogHome } from "../Routes/coordination";

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledButton
        onClick={() => {
          goTogHome(navigate);
        }}
      >
        Ir para página inicial
      </StyledButton>

      <StyledButton
        onClick={() => {
          goToProfile(navigate);
        }}
      >
        Ir para página de perfil
      </StyledButton>
      <StyledButton
        onClick={() => {
          goToLogin(navigate);
        }}
      >
        Ir para página de Login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
