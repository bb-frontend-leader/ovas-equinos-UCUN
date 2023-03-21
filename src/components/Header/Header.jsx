import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Button } from "UI-Components-books";

import css from "./Header.module.css";

const Header = () => {
  const [active, setActive] = useState(false);

  const onOpenMenu = () => setActive(!active);

  return (
    <header className={css["c-header"]}>
      <NavLink
        to="unit/1/page/1"
        className={`${css["c-header__icon"]} animate__animated animate__bounce animate__delay-1s`}
      >
        <img
          src="assets/images/icon-home.png"
          alt="Herradura con una figura en forma de casa"
        />
      </NavLink>

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
              <NavLink to="/">Introducción</NavLink>
            </li>

            <li>
              <NavLink to="/">Resultado esperado</NavLink>
            </li>

            <li>
              <NavLink to="/">Contenido</NavLink>
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
                  <NavLink to="/">Actividades de aprendizaje</NavLink>
                </li>

                <li>
                  <NavLink to="/">Como se evaluará este curso</NavLink>
                </li>

                <li>
                  <NavLink to="/">Ref. bibliográfica</NavLink>
                </li>

                <li>
                  <NavLink to="/">Créditos</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <NavLink
        to="unit/1/page/2"
        className={`${css["c-header__icon"]} animate__animated animate__bounce animate__delay-1s`}
      >
        <img
          src="assets/images/icon-horse.png"
          alt="Herradura con una figura de un caballo"
        />
      </NavLink>
    </header>
  );
};

export { Header };
