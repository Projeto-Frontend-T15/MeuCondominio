import styled from "styled-components";

export const FielsetStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;

    gap: 10px;
    select{
        width: 80vw;
        height: 40px;
        border: 2px solid var(--color-7);
        font-weight: var(--font-weight-5);

        option{
            border: 2px solid var(--color-7);
            font-weight: var(--font-weight-5);
        }
    }
    select:focus{
        outline: none;
    }

  
    button{
    background-color: var(--color-5);
    width: 150px;
    height: 40px;
    border-radius: 8px;

    font-weight: var(--font-weight-5);
  }
  button:hover{
    background-color: white;
    color: var(--color-5);
    border: 1px solid var(--color-5);
  }
  @media(min-width: 769px){
      
  }

`