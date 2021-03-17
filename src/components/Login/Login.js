import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import FormError from "../FormError/FormError";
import Control from "../Control/Control";
import { useFormValidation } from "../../hooks/useFormValidation";
import Preloader from "../Preloader/Preloader";
import "./Login.css";

function Login({ onLogin, error, onLoad }) {
  const {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
  } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
    onLogin(values.email, values.pass);
  }

  return (
    <section className="login">
      <Form
        error={error}
        errorModifier=""
        onSubmit={handleSubmit}
        isValid={isValid}
        children={
          <>
            <Input
              labelName="E-mail"
              labelFor="email"
              labelModifier=""
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email || ""}
              placeholder="E-mail"
              type="email"
              minLength=""
              maxLength=""
              inputModifier="login_input"
            />
            <FormError errMessage={errors.email} errField={errors.email} errModifier="form_error" />
            <Input
              labelName="Пароль"
              labelFor="pass"
              labelModifier=""
              id="pass"
              name="pass"
              onChange={handleChange}
              value={values.pass || ""}
              placeholder="Пароль"
              type="password"
              minLength="8"
              maxLength="30"
              inputModifier=""
            />
            <FormError errMessage={errors.pass} errField={errors.pass} errModifier="form_error" />
          </>
        }
        formClassModifier=""
        textBtn="Войти"
        btnClass="login__form-btn"
        btnType="submit"
      />
      {onLoad && <Preloader/>}
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
