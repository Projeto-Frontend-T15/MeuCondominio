import styled from "styled-components";

export const LiStyled = styled.li`
  background-color: var(--color-4);
  border-radius: var(--radius-2);
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-3);
    color: var(--black);
  }

  p{
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-2);
    color: var(--color-black);
  }

  div{
    button{
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-2);
    color: var(--color-black);
    background-color: var(--color-3);
    border-radius: var(--radius-2);
    padding: 0.313rem;
    margin-right: 10px;
  }

  button:hover{
    background-color: var(--color-5);
    color: var(--white);
  }
  }
`;
