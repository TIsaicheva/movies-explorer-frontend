import React from "react";
import Form from "../Form/Form";
import Control from "../Control/Control";
import Input from "../Input/Input";
import FormError from "../FormError/FormError";
import { useFormValidation } from "../../hooks/useFormValidation";
import "./Register.css";

function Register({ onRegister, error }) {
  const {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
  } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.email, values.pass, values.name);
  }

  // React.useEffect(() => {
  //   resetForm();
  // }, [resetForm]);

  return (
    <section className="register">
      <Form
        error={error}
        errorModifier="register_error"
        onSubmit={handleSubmit}
        isValid={isValid}
        children={
          <>
            <Input
              labelName="Имя"
              labelFor="name"
              labelModifier=""
              id="name"
              name="name"
              placeholder="Имя"
              type="text"
              minLength="2"
              maxLength="30"
              inputModifier="register_input"
              value={values.name || ""}
              onChange={handleChange}
              required
            />
            <FormError errMessage={errors.name} errField={errors.name} errModifier="form_error" />
            <Input
              labelName="E-mail"
              labelFor="email"
              labelModifier=""
              id="email"
              name="email"
              placeholder="E-mail"
              type="email"
              minLength=""
              maxLength=""
              inputModifier="register_input"
              value={values.email || ""}
              onChange={handleChange}
              required
            />
            <FormError errMessage={errors.email} errField={errors.email} errModifier="form_error" />
            <Input
              labelName="Пароль"
              labelFor="pass"
              labelModifier=""
              id="pass"
              name="pass"
              placeholder="Пароль"
              type="password"
              minLength="8"
              maxLength="30"
              inputModifier=""
              value={values.pass || ""}
              onChange={handleChange}
              required
            />
            <FormError errMessage={errors.pass} errField={errors.pass} errModifier="form_error" />
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
