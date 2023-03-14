import styled from "styled-components";



export const StyledFormeMessages = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px;
  
  width: 90%;
  background-color: var(--color-6);
  border-radius: 10px;


  gap: 20px;

  input {
   
    height: 40px;
    border: 1px solid;
    width: 80vw;
    padding: 10px;
  
    border: none;
    background-color: var(--color-7);

    color: var(--color-8);
    font-weight: var(--font-weight-5);
    border-radius: 10px;
  }
  input:nth-child(2n){
    max-width: 80vw;
    height: 200px;
    border-radius: 10px;
  }
  input:focus{
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
    align-items: flex-start;
    width: 450px;
    height: 440px;
    justify-content: space-between;
    input{
        width: 420px;
        height: 60px;
    }
    input:nth-child(2n){
        width: 400px;
        height: 420px;
    }
  }
`;
