// Файл App.js — корневой компонент приложения.
import React from "react";
// import Card from "./Card";
// import ImagePopup from "./ImagePopup";

// import Fieldset from "./Fieldset";

// import api from '../utils';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Fieldset from "./Fieldset";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        formClassName="popup__form"
        submitButtonTitle="Сохранить"
      >
        <Fieldset
          id="profile-name"
          name="name"
          placeholderText="Имя"
          typeValue="text"
          minLengthValue="2"
          maxLengthValue="40"
        ></Fieldset>
        <Fieldset
          id="profile-description"
          name="description"
          placeholderText="О себе"
          typeValue="text"
          minLengthValue="2"
          maxLengthValue="200"
        ></Fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="card"
        title="Новое место"
        formClassName="popup__form"
        submitButtonTitle="Создать"
      >
        <Fieldset
          id="card-name"
          name="name"
          placeholderText="Название"
          typeValue="text"
          minLengthValue="2"
          maxLengthValue="30"
        ></Fieldset>
        <Fieldset
          id="card-description"
          name="link"
          placeholderText="Ссылка на картинку"
          typeValue="url"
        ></Fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        formClassName="popup__form popup__form_avatar"
        submitButtonTitle="Сохранить"
      >
        <Fieldset
          id="avatar"
          name="avatar"
          placeholderText="Ссылка на картинку"
          typeValue="url"
        ></Fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="confirm-delete"
        title="Вы уверены?"
        formClassName="popup__form popup__form_confirm"
        submitButtonTitle="Да"
      ></PopupWithForm>

      <template className="element-template">
        <li className="element">
          <img className="element__image" src="#" alt="#" />
          <button
            className="element__button-delete opacity"
            type="button"
          ></button>
          <div className="element__info">
            <p className="element__title"></p>
            <div className="element__likes-container">
              <button
                className="element__button-like opacity"
                type="button"
              ></button>
              <p className="element__count-likes"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}
