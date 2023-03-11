import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button{
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-4);
    padding: 0.5rem 0;
    color: var(--color-black);
    background-color: var(--color-3);
    border-radius: var(--radius-2);
  }

  button:hover{
    background-color: var(--color-5);
  }
`