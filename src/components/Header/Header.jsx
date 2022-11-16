import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  const [active, setActive] = useState(false);

  const onOpenMenu = () => setActive(!active);

  return (
    <header className={css["c-header"]}>
      <button className={css["c-header__icon"]}>
        <img
          src="assets/images/icon-home.png"
          alt="Herradura con una figura en forma de casa"
        />
      </button>

      <div className={css["c-header__content"]}>
        <img
          className={css["c-header__logo"]}
          src="https://virtual.ucundinamarca.edu.co/red/baseUNAD/maquetaRED/assets/img_contenido/logo.png"
          alt=""
        />

        <nav className={css["c-nav"]}>
          <ul role="list" className={css["c-nav__list"]}>
            <li>
              <Link to="/">Introducción</Link>
            </li>

            <li>
              <Link to="/">Resultado esperado</Link>
            </li>

            <li>
              <Link to="/">Contenido</Link>
            </li>

            <li>
              <button onClick={onOpenMenu} aria-expanded={active}>
                ...
              </button>
              <ul
                role="list"
                className={`${css["c-nav__submenu"]} ${
                  active && css["is-nav__submenu--active"]
                }`}
              >
                <li>
                  <Link to="/">Actividades de aprendizaje</Link>
                </li>

                <li>
                  <Link to="/">Como se evaluará este curso</Link>
                </li>

                <li>
                  <Link to="/">Ref. bibliográfica</Link>
                </li>

                <li>
                  <Link to="/">Créditos</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <button className={css["c-header__icon"]}>
        <img
          src="assets/images/icon-horse.png"
          alt="Herradura con una figura de un caballo"
        />
      </button>
    </header>
  );
};

export { Header };
