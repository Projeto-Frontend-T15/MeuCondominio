import styled from "styled-components"

export const MainStyled = styled.main`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 10px;

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      gap: 10px;
    }

    @media (min-width: 769px) {
      flex-direction: row;
  }
`

export const HeaderStyledPageAdmin = styled.header`
  width: 100%;
  height: 80px ;
  background-color: var(--color-1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-4);
    color: var(--color-black);
  }

  button{
    background-color: var(--color-2) ;
    width: 100px;
    height: 40px;
    border-radius: 8px;
    color: var(--color-white);
    font-weight: var(--font-weight-5);
    
  }
  

  @media (min-width: 769px) {
    padding: 43px 100px;
    flex-direction: row;
    justify-content: space-between;
  }

`