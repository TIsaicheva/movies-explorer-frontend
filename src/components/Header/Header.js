import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import MenuMobile from "../MenuMobile/MenuMobile";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header({ loggedIn }) {
  return (
    <Switch>
      <Route path="/" exact>
        <header className="header header_main">
          <div className="header__content">
            <Logo />
            {loggedIn ? (
              <Navigation
                children={
                  <>
                    <div className="menu__movies-link_container">
                      <NavLink
                        to="/movies"
                        className="menu__link menu__movie-link"
                      >
                        Фильмы
                      </NavLink>
                      <NavLink to="/saved-movies" className="menu__link">
                        Сохранённые фильмы
                      </NavLink>
                    </div>

                    <NavLink
                      to="/profile"
                      className="menu__link menu__account-link"
                    >
                      Аккаунт
                      <div className="menu__account-link_icon"></div>
                    </NavLink>
                  </>
                }
                menuModifier="header__menu_invisible"
              />
            ) : (
              <Navigation
                children={
                  <div className="menu__main-container">
                    <NavLink to="/signup" className="menu__link">
                      Регистрация
                    </NavLink>
                    <NavLink to="/signin" className="menu__link menu__link_btn">
                      Войти
                    </NavLink>
                  </div>
                }
                menuModifier="header_main-menu"
              />
            )}
          </div>
        </header>
      </Route>
      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header">
          <div className="header__content">
            <Logo />
            <Icon iconClass="header__menu-btn" />
            <MenuMobile isOpenedClass="menu-mobile_opened" />
            <Navigation
              children={
                <>
                  <div className="menu__movies-link_container">
                    <NavLink
                      to="/movies"
                      className="menu__link menu__movie-link"
                    >
                      Фильмы
                    </NavLink>
                    <NavLink to="/saved-movies" className="menu__link">
                      Сохранённые фильмы
                    </NavLink>
                  </div>

                  <NavLink
                    to="/profile"
                    className="menu__link menu__account-link"
                  >
                    Аккаунт
                    <div className="menu__account-link_icon"></div>
                  </NavLink>
                </>
              }
              menuModifier="header__menu_invisible"
            />
          </div>
        </header>
      </Route>
      <Route path="/signup">
        <header className="header header_auth-content">
          <div className="header__auth">
            <Logo />
            <h3 className="header__auth-title">Добро пожаловать!</h3>
          </div>
        </header>
      </Route>
      <Route path="/signin">
        <header className="header header_auth-content">
          <div className="header__auth">
            <Logo />
            <h3 className="header__auth-title">Рады видеть!</h3>
          </div>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;
