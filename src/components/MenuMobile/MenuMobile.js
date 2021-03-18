import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Icon from "../Icon/Icon";
import "./MenuMobile.css";

function MenuMobile({ isOpenedClass }) {
  return (  
    <Navigation
      children={
        <section className="menu-mobile__container">
          <Icon iconClass="menu-mobile_btn" />
         
              <div className="menu-mobile__links">
                <NavLink
                  to="/"
                  className="menu__link menu__link_mobile menu-mobile__link_main"
                >
                  Главная
                </NavLink>
                <NavLink
                  to="/movies"
                  className="menu__link menu__link_mobile menu-mobile__link_movies"
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved-movies"
                  className="menu__link menu__link_mobile"
                >
                  Сохранённые фильмы
                </NavLink>
              </div>

              <NavLink
                to="/profile"
                className="menu__link menu-mobile__account"
              >
                Аккаунт
                <div className="menu-mobile__account-icon"></div>
              </NavLink>
           
        </section>
      }
      menuModifier={isOpenedClass}
    />
  );
}

export default MenuMobile;
