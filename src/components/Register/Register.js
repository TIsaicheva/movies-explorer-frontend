import React from "react";
import Form from "../Form/Form";
import Control from "../Control/Control";
import Input from "../Input/Input";
import "./Register.css";

function Register() {
  return (
    <section className="register">
      <Form
        children={
          <>
            <Input
              labelName="Имя"
              labelFor="name"
              labelModifier=""
              id="name"
              placeholder="Имя"
              type="text"
              minLength="2"
              maxLength="30"
              inputModifier="register_input"
            />
            <Input
              labelName="E-mail"
              labelFor="email"
              labelModifier=""
              id="email"
              placeholder="E-mail"
              type="email"
              minLength=""
              maxLength=""
              inputModifier="register_input"
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
        textBtn="Зарегистрироваться"
        btnClass="register_form-btn"
        btnType="submit"
      />
      <Control      
        text="Уже зарегистрированы?"
        textLink="Войти"
        link="/signin"     
        linkClass=""
        controlClassModifier="register_control"
      />
    </section>
  );
}

export default Register;
