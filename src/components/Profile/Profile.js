import React from "react";
import Form from "../Form/Form";
import Control from "../Control/Control";
import Input from "../Input/Input";
import FormError from "../FormError/FormError";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import "./Profile.css";

function Profile({ onEdit, onClick, error }) {
  const {
    values,
    errors,
    handleChange,
    isValid,
    resetForm,
  } = useFormValidation();
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    onEdit(values.email, values.name);
  }

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }  
  }, [currentUser, resetForm]);

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title profile__title-main">{`Привет${currentUser ? `, ${currentUser.name}!` : " "}`}</h2>
        <Form
          onSubmit={handleSubmit}
          isValid={isValid}
          error={error}
          errorModifier="profile_error"
          children={
            <>
              <div className="profile__field profile__field-name">
                <Input
                  labelName="Имя"
                  labelFor="name"
                  labelModifier="profile__title profile__title-label"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name || ""}
                  placeholder="Имя"
                  type="text"
                  minLength="2"
                  maxLength="30"
                  inputModifier="profile_input"
                />
                <FormError errMessage={errors.name} errField={errors.name} errModifier="form_error" />      
              </div>
              <div className="profile__field profile__field-email">
                <Input
                  labelName="E-mail"
                  labelFor="email"
                  labelModifier="profile__title profile__title-label"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email || ""}
                  placeholder="E-mail"
                  type="email"
                  minLength=""
                  maxLength=""
                  inputModifier="profile_input"
                />
                <FormError errMessage={errors.email} errField={errors.email} errModifier="form_error" />      
              </div>
            </>
          }
          formClassModifier=""
          textBtn="Редактировать"
          btnClass="profile_form-btn"
          btnType="submit"
        />
        <Control
          onClick={onClick}
          text=""
          textClassModifier="profile__text"
          textLink="Выйти из аккаунта"
          linkClass="profile__link"
          controlClassModifier="profile_control"
        />
      </div>
    </section>
  );
}

export default Profile;
