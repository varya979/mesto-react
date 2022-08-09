// Файл App.js — корневой компонент приложения.
import React from "react";
// import Card from "./Card";
// import ImagePopup from "./ImagePopup";
// import PopupWithForm from "./PopupWithForm";
// import Fieldset from "./Fieldset";

// import api from '../utils';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import popupCloseButton from "../images/popup__button-close.svg";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

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

      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button className="popup__button-close opacity" type="button">
            <img
              className="popup__button-close-image"
              src={popupCloseButton}
              alt="рисунок 'крестик' закрытия окна"
            />
          </button>
          <form
            className="popup__form"
            name="profile"
            action="#"
            method="post"
            noValidate
          >
            <h3 className="popup__title">Редактировать профиль</h3>
            <fieldset className="popup__field">
              <input
                id="profile-name"
                className="popup__input popup__input_type_name"
                type="text"
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                name="name"
                required
              />
              <span className="popup__input-error popup__input-error-profile-name"></span>
            </fieldset>
            <fieldset className="popup__field">
              <input
                id="profile-description"
                className="popup__input popup__input_type_description"
                type="text"
                minLength="2"
                maxLength="200"
                placeholder="О себе"
                name="about"
                required
              />
              <span className="popup__input-error popup__input-error-profile-description"></span>
            </fieldset>
            <button className="popup__button-save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_card">
        <div className="popup__container">
          <button className="popup__button-close opacity" type="button">
            <img
              className="popup__button-close-image"
              src={popupCloseButton}
              alt="рисунок 'крестик' закрытия окна"
            />
          </button>
          <form
            className="popup__form"
            name="card"
            action="#"
            method="post"
            noValidate
          >
            <h3 className="popup__title">Новое место</h3>
            <fieldset className="popup__field">
              <input
                id="card-name"
                className="popup__input popup__input_type_name"
                type="text"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                name="name"
                required
              />
              <span className="popup__input-error popup__input-error-card-name"></span>
            </fieldset>
            <fieldset className="popup__field">
              <input
                id="card-description"
                className="popup__input popup__input_type_description"
                type="url"
                placeholder="Ссылка на картинку"
                name="link"
                required
              />
              <span className="popup__input-error popup__input-error-card-description"></span>
            </fieldset>
            <button className="popup__button-save" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_picture">
        <div className="popup__picture-container">
          <button className="popup__button-close opacity" type="button">
            <img
              className="popup__button-close-image"
              src={popupCloseButton}
              alt="рисунок 'крестик' закрытия окна"
            />
          </button>
          <figure className="popup__figure">
            {/* <img className="popup__image" src="#" alt="#" /> */}
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup popup_type_confirm-delete">
        <div className="popup__container">
          <button className="popup__button-close opacity" type="submit">
            <img
              className="popup__button-close-image"
              src={popupCloseButton}
              alt="рисунок 'крестик' закрытия окна"
            />
          </button>
          <form className="popup__form popup__form_confirm" name="confirm">
            <h3 className="popup__title popup__title_confirm">Вы уверены?</h3>
            <button className="popup__button-save" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_update-avatar">
        <div className="popup__container">
          <button className="popup__button-close opacity" type="button">
            <img
              className="popup__button-close-image"
              src={popupCloseButton}
              alt="рисунок 'крестик' закрытия окна"
            />
          </button>
          <form
            className="popup__form popup__form_avatar"
            name="avatar"
            action="#"
            method="post"
            noValidate
          >
            <h3 className="popup__title">Обновить аватар</h3>
            <fieldset className="popup__field">
              <input
                id="avatar"
                className="popup__input"
                type="url"
                placeholder="Ссылка на картинку"
                name="avatar"
                required
              />
              <span className="popup__input-error popup__input-error-avatar"></span>
            </fieldset>
            <button className="popup__button-save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
