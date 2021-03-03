import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Control from "../Control/Control";
import "./Login.css";

function Login() {
  return (
    <section className="login">
      <Form
        children={
          <>
            <Input
              labelName="E-mail"
              labelFor="email"
              labelModifier=""
              id="email"
              placeholder="E-mail"
              type="email"
              minLength=""
              maxLength=""
              inputModifier="login_input"
            />
            <Input
              labelName="Пароль"
              labelFor="pass"
              labelModifier=""
              id="pass"
              placeholder="Пароль"
              type="password"
              minLength="8"
              maxLength="30"
              inputModifier=""
            />
          </>
        }
        formClassModifier=""
        textBtn="Войти"
        btnClass="login__form-btn"
        btnType="submit"
      />
      <Control
        text="Ещё не зарегистрированы?"
        textLink="Регистрация"
        link="/signup"
        linkClass=""
        controlClassModifier="login_control"
      />
    </section>
  );
}

export default Login;
