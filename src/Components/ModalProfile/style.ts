import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;    
`

export const ContainerModal = styled.div`
  width: 25%;
  background-color: var(--white);
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;

  div:nth-child(1) {
    width: 100%;
    padding: 0.625rem 1rem;
    border-radius: var(--radius-2) var(--radius-2) 0 0;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;

    h2{
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-4);
        color: var(--black);
    }
  }
  
  div:nth-child(2) {
    width: 100%;
    padding: 0.625rem 1rem;
    border-radius: var(--radius-2) var(--radius-2) 0 0;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 5px;

    h3, p{
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-3);
        color: var(--black);
    }

    span{
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-2);
        color: var(--black);
    }
  }
`;

export const ButtonClose = styled.button`
  font-size: var(--font-size-2);
  font-weight: var(--weight-2);
  color: var(--black);
  background-color: transparent;
`;