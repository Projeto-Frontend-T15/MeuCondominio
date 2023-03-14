import styled from "styled-components";

export const StyledLiMessages = styled.li`
  background-color: var(--color-4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  width: 90vw;

  h1 {
    font-weight: var(--font-weight-5);
    font-size: var(--font-size-3);
  }

  span {
    font-weight: var(--font-weight-5);
    font-size: var(--font-size-1);
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
    button {
      font-weight: var(--font-weight-1);
      font-size: var(--font-size-1);
      background-color: var(--color-5);
      width: 120px;
      height: 40px;
      border-radius: 8px;
    }
  }
  @media(min-width: 769px){
    width: 600px; 
  }
`;
