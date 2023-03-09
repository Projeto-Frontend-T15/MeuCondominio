import styled from "styled-components";

export const StyledHeader = styled.header`
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    button {
      background: transparent;
      color: ${({ theme }) => theme.colors.gray150};
      transition: 0.3s;

      :hover {
        color: ${({ theme }) => theme.colors.gray300};
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    .nav {
      flex-direction: column;
    }
  }
`;

import { Header } from "../headerPageUser/header";



