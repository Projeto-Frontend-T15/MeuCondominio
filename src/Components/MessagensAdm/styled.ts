import styled from "styled-components";

export const StyledDivMessagens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 10px;
  h3 {
    font-weight: 800;
    font-size: var(--font-size-4);
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;
  padding: 10px 10px;
`;
