import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;

flex-direction: row;
align-content: center;
align-items: center;
justify-content: flex-end;
width: 100%;
justify-content: space-between;
padding: 1rem;
background-color: var(--color-1);
  button {
    width: 36%;
    padding: 2%;
    background-color: var(--color-2);
    color: var (--color-white);
    border-radius: 6px;
    font-weight: 600;
    color: var(--color-white);
    height: 30%;
    margin-left: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttons{
    width: 50%;
    height: 40%;
    display: flex;
    color: var(--color-4);
    margin-right: 10px;
  }
`;


