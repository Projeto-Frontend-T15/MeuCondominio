import styled from "styled-components";

export const CondoStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  margin: 4%;
  .div_main{
    flex-direction: column;
    width: 100%;
  }
  button {
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: var(--color-3);
    border-radius: var(--radius-1);
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-3);
    color: var(--color-white);
    height: 18%;
    margin-left: 3%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    transition: transform 0.2s ease-in-out;
  }
  .btn_openModal {
 
    background-color: var(--color-8);
    border-radius: var(--radius-1);
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-3);
    color: var(--color-white);
    height: 30%;
    margin-left: 3%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    transition: transform 0.2s ease-in-out Os;
  }
  ul{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 90%;
    justify-content: flex-start;
    padding: 1rem;
    border: 1px solid var(--color-8);
    border-radius: 6px;
    background-color: var(--color-7);
    gap: 20px;
  }
  .container_header{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
`;
