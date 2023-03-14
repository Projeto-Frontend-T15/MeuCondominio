import imgTrustee from "../../assets/sindico.svg"
import { DivStyled, SectionStyled } from "./style";

export function Trustee() {
  return (
    <SectionStyled>
      <h2>Síndico</h2>
      <DivStyled>
        <img src={imgTrustee} alt="síndico" />
        <div>
          <h3>Nome do Síndico</h3>
          <a href="">WhatsApp</a>
        </div>
      </DivStyled>
    </SectionStyled>
  );
}
