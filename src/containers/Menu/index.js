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
    const targetHash = "#contact";
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash; // Assure un changement direct vers le bon hash
    } else {
      // Si on est déjà sur le hash "contact", forcer le scroll en modifiant légèrement le hash
      window.location.hash = "";
      setTimeout(() => {
        window.location.hash = targetHash;
      }, 100); // Un délai un peu plus long pour forcer le navigateur à prendre en compte le changement
    }
  }}
>
  Contact
</Button>

  </nav>
);

export default Menu;
