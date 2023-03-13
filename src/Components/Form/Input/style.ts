import styled from "styled-components";

export const FieldsetStyled = styled.fieldset`
  input{
    font-size: var(--font-size-1);
    width: 100%;
    padding: 10px 5px;
    border-radius: var(--radius-2);
  }

  input::placeholder{
    font-size: var(--font-size-1);
  }
`