import styled from "styled-components";

export const StyledModalComments = styled.div`
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
    width: 400px;
    padding: 10px 10px;
    border-radius: 8px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding: 10px 10px;
      border-bottom: 1px solid var(--color-2);

      h2 {
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-2);
      }
      button {
        background-color: white;
        font-weight: var(--font-weight-5);
        font-size: var(--font-size-2);
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 10px;
      max-height: 200px;
      overflow: auto;

      li {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 10px 10px;
        gap: 20px;
        p{
            width: 40px;
            height: 40px;
            background-color: var(--color-1);
            font-weight: var(--font-weight-1);
          font-size: var(--font-size-1);
          text-align: center;
          padding: 10px;
          color: var(--color-white);
        }
        h1 {
          font-weight: var(--font-weight-1);
          font-size: var(--font-size-1);
        }
      }
    }
  }
`;
