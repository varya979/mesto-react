import React from "react";
import profileEditBtnImg from "../images/profile__button-edit.svg";
import profileAddBtnImg from "../images/profile__button-add.svg";

export default function Main({}) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            className="profile__avatar-edit-button"
            type="button"
          ></button>
          <img className="profile__avatar" alt="Аватар пользователя" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив-Кусто</h1>
          <button className="profile__button-edit opacity" type="button">
            <img
              className="profile__button-edit-image"
              src={profileEditBtnImg}
              alt="Рисунок карандаша"
            />
          </button>
          <p className="profile__subtitle">Исследователь</p>
        </div>
        <button className="profile__button-add opacity" type="button">
          <img
            className="profile__button-add-image"
            src={profileAddBtnImg}
            alt="Знак плюс"
          />
        </button>
      </section>

      <ul className="elements"></ul>
    </main>
  );
}
