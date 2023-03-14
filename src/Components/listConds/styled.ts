import styled from "styled-components";

export const StyledForm = styled.div`
  margin: 1rem;
  border: none;
  border-radius: 6px;
  width: 50%;
  select{
    width: 200px;
    margin-left: 3%;
    border-radius: 6px;
    border: 1px solid var(--color-6);
    padding: .5rem;
  }
  option{
    border: none;
  }
  button{
    padding: 1rem;
    width: auto;
    font-weight: var(--font-weight-5);
    background-color: var(--color-5);
  }
  
`;
