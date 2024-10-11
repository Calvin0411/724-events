/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services">Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>
    <Button
  title="contact"
  onClick={() => {
    window.location.hash = ""; // Réinitialise le hash temporairement
    setTimeout(() => {
      window.location.hash = "#contact"; // Revient au hash #contact
    }, 1); // Petite pause pour que le navigateur prenne en compte le changement
  }}
>
  Contact
</Button>
  </nav>
);

export default Menu;
