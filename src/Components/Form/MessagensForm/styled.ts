import styled from "styled-components";

export const StyledFormeMessages = styled.div`
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
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    padding: 10px 10px;

    border-radius: 8px;

    max-width: 440px;
    width: 80vw;
    gap: 10px;
    height: 350px;

    
    height: 400px;
    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      h2{
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-2);
      }
      button{
        background-color: white;
        font-weight: var(--font-weight-5);
        font-size: var(--font-size-2);
      }
    }

    form {
   
      display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
      input {
        width: 70vw;
        max-width: 400px;
        height: 40px;
        border: 1px solid;

        padding: 10px;
        text-align: start;
        border: none;
        background-color: var(--color-7);

        color: var(--color-8);
        font-weight: var(--font-weight-5);
        border-radius: 10px;
      }
      input:nth-child(2n) {
       
        width: 70vw;
        max-width: 400px;
        height: 200px;
        border-radius: 10px;
      }
      input:focus {
        outline: none;
      }
      button {
        background-color: var(--color-5);
        width: 150px;
        height: 40px;
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
