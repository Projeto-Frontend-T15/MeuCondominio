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
  h1 {
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-4);
    color: var(--color-black);
  }

  button {
    width: 36%;
    padding: 2%;
    background-color: var(--color-2);
    color: var(--color-white);
    border-radius: var(--radius-1);
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-3);
    color: var(--color-white);
    height: 30%;
    margin-left: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    width: 50%;
    height: 40%;
    display: flex;
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


