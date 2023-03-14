import homeImage from "../../assets/homeImage.svg"
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
  height: 100vh;
  margin-top: 126px;
  display: flex;
  justify-content: space-around;
  background-image:url(${homeImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  div{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;    

    h3{
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-4);
        color: var(--color-black);
        background-color: var(--color-3);
        border-radius: var(--radius-2);
        padding: 63px 40px;
        text-align: center;
    }

    @media (min-width: 769px) {
      width: 30%;    
    }
  }

  div:nth-child(1){
    margin-top: 77px;

  } 
  
  div:nth-child(2){
    margin-top: 225px;
  }

`