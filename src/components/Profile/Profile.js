import React from "react";
import Form from "../Form/Form";
import Control from "../Control/Control";
import Input from "../Input/Input";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title profile__title-main">Привет, Татьяна!</h2>
        <Form
          children={
            <>
              <div className="profile__field profile__field-name">
                <Input
                  labelName="Имя"
                  labelFor="name"
                  labelModifier="profile__title profile__title-label"
                  id="name"
                  placeholder="Имя"
                  type="text"
                  minLength="2"
                  maxLength="30"
                  inputModifier="profile_input"
                />
              </div>
              <div className="profile__field profile__field-email">
                <Input
                  labelName="E-mail"
                  labelFor="email"
                  labelModifier="profile__title profile__title-label"
                  id="email"
                  placeholder="E-mail"
                  type="email"
                  minLength=""
                  maxLength=""
                  inputModifier="profile_input"
                />
              </div>
            </>
          }
          formClassModifier=""
          textBtn="Редактировать"
          btnClass="profile_form-btn"
          btnType="submit"
        />
        <Control       
          text=""
          textClassModifier="profile__text"
          textLink="Выйти из аккаунта"
          link="/movies"       
          linkClass="profile__link"
          controlClassModifier="profile_control"
        />
      </div>
    </section>
  );
}

export default Profile;
