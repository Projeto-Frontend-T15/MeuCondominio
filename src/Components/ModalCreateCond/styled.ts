import styled from "styled-components";
export const StyledModalCreateCond = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  dialog {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: white;

    width: 400px;
    height: 150px;
    padding: 10px 10px;

    border-radius: 8px;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-2);
      }
      button {
        background-color: white;
        font-weight: var(--font-weight-5);
        font-size: var(--font-size-2);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 10px 10px;
      gap: 10px;
      input {
        width: 300px;
        height: 30px;
        border: 1px solid;
        padding: 10px 10px;
      }
      input:focus {
        outline: none;
      }

      button {
        background-color: var(--color-5);
        width: 150px;
        height: 30px;
        border-radius: 8px;

        font-weight: var(--font-weight-5);
      }
      button:hover {
        background-color: white;
        color: var(--color-5);
        border: 1px solid var(--color-5);
      }
    }
  }
`;

