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

position: fixed;
top: 0;
left: 0;

  h1 {
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-4);
    color: var(--color-black);
  }
  button {
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-3);
    padding: 0.625rem 1.25rem;
    color: var(--color-white);
    background-color: var(--color-2);
    border-radius: var(--radius-1);
    transition: transform 0.2s ease-in-out;
    @media (max-width: 769px) {
      padding: 0.625rem 1.25rem;
    }
  }
  button:hover {
    color: var(--white);
    transform: scale(1.1);
  }
  .buttons{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: var(--color-4);
    margin-right: 10px;
    @media (max-width: 769px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
  @media (max-width: 769px) {
    flex-direction: column;
    gap: 10px;
  }
`;

