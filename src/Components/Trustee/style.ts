import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 80%;

  h2 {
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-4);
    color: var(--color-black);
    margin-bottom: 20px;
  }
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  div{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
