import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(ShoppingCartIcon)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
