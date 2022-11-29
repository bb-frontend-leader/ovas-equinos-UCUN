import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "UI-Components-books";

import css from "./Header.module.css";

const Header = () => {
  const [active, setActive] = useState(false);

  const onOpenMenu = () => setActive(!active);

  return (
    <header className={css["c-header"]}>
      <Link
        to="unit/1/page/1"
        className={`${css["c-header__icon"]} animate__animated animate__bounce animate__delay-1s`}
      >
        <img
          src="assets/images/icon-home.png"
          alt="Herradura con una figura en forma de casa"
        />
      </Link>

      <div className={css["c-header__content"]}>
        <img
          className={`${css["c-header__logo"]} animate__animated animate__backInDown`}
          src="https://virtual.ucundinamarca.edu.co/red/baseUNAD/maquetaRED/assets/img_contenido/logo.png"
          alt=""
        />

        <nav
          className={`${css["c-nav"]} animate__animated animate__backInDown`}
        >
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
              <Button
                addClass={css["c-header__btn"]}
                onClick={onOpenMenu}
                aria-expanded={active}
                hasAriaLabel
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="44" width="30">
                  <path d="M24 40q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7T24 40Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7T24 8q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Z" />
                </svg>
              </Button>
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

      <Link
        to="unit/1/page/2"
        className={`${css["c-header__icon"]} animate__animated animate__bounce animate__delay-1s`}
      >
        <img
          src="assets/images/icon-horse.png"
          alt="Herradura con una figura de un caballo"
        />
      </Link>
    </header>
  );
};

export { Header };
