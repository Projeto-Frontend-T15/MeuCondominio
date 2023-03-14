import { StyledHeader } from "./style";

interface ButtonProps {
  label: string;
  onClick: () => void;
}



interface IHeader {
  buttons: ButtonProps[];
}


const Header: React.FC<IHeader> = ({ buttons }) => {

  return (
    <StyledHeader>
      <h1>Meu Condomínio</h1>
      <div className="buttons">

        {buttons.map((button) => (
          <button key={button.label} onClick={button.onClick}>
            {button.label}
          </button>
        ))}
      </div>
    </StyledHeader>
  );
};

export default Header;