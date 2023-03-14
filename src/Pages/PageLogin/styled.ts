import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: var(--color-1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 0;
  left: 0;

  h2 {
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-4);
    color: var(--color-black);
  }

  a {
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-4);
    padding: 0.625rem 1.25rem;
    color: var(--color-white);
    background-color: var(--color-2);
    border-radius: var(--radius-1);
    transition: transform 0.2s ease-in-out;
  }

  a:hover {
    color: var(--white);
    transform: scale(1.1);
  }

  @media (min-width: 769px) {
    padding: 43px 100px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MainStyled = styled.main`
  padding: 30px;
  margin-top: 200px;
  
  section {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: var(--color-4);
    border: 1px solid var(--color-2);
    padding: 20px;

    h2 {
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-5);
      color: var(--color-black);
      text-align: center;
    }

    @media (min-width: 769px) {
      width: 40%;
      height: 75% ;
      justify-content: center;
    }
  }

  @media (min-width: 769px) {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
`;
