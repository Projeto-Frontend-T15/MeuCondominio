import { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { RegisterMessages } from "../Components/Form/MessagensForm";
import Header from "../Components/Header/header";
import HeaderPageAdm from "../Components/Header/MenuPagAdmin";
import { ListConds } from "../Components/listConds";
import { ReadMessagens } from "../Components/MessagensAdm";

import { ModalComents } from "../Components/ModalComents";
import { HomeContext } from "../Contexts/homeContext";
import { ResidentContext } from "../Contexts/residentContext";
import { HeaderStyled } from "./PageLogin/styled";

const HomeAdm = () => {
    const {messages} = useContext(ResidentContext)
    const {modal, readAllMenssagens, idCond} = useContext(HomeContext)
    
    useEffect(() => {
        readAllMenssagens(idCond)
    },[idCond])
    return(
        <>
        <HeaderStyled>
            <h2>Meu Condomínio</h2>
            <button>Sair</button>
        </HeaderStyled>
        <RegisterMessages />
        <ListConds /> 
         {
            messages ? (
                <ReadMessagens />
            ):(
                <p>Ainda não existe recados</p>
            )
        }
        {
            modal && (
               <ModalComents />
            )
        }

    </>
    )
};

export default HomeAdm;