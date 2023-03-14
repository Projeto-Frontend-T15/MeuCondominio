import styled from "styled-components";

export const MessagesStyled = styled.section`
.menu--container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

}
.menu--container__messages{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.btn-createMess{

    width: 120px;
    height: 40px;

    background-color: var(--color-8);
    border-radius: var(--radius-1);
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-3);
    color: var(--color-white);


}
@media (min-width: 769px){
    .menu--container{
        flex-direction: row;
        justify-content: space-around;
        gap: 140px;
    }
}

`