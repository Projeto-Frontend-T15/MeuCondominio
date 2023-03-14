import styled from "styled-components";

export const StyledForm = styled.div`

  form {
    display: flex;
    flex-direction: row;
    gap: 10px;
    select {
      width: 190px;
      margin-left: 3%;
      border-radius: 6px;
      border: 1px solid var(--color-6);
      padding: 0.5rem;

    }
    option {
      border: none;
    }
    button {
      width: 100px;
      height: 40px;
      background-color: var(--color-5);
      border-radius: var(--radius-1);
      font-size: var(--font-size-2);
      font-weight: var(--font-weight-3);
      color: var(--color-white);
    }
  }
`;
