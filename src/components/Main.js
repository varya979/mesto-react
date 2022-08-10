import React from "react";
import profileEditButton from "../images/profile__button-edit.svg";
import profileAddButton from "../images/profile__button-add.svg";

export default function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-edit-button"
            type="button"
          ></button>
          <img className="profile__avatar" alt="Аватар пользователя" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title"></h1>
          <button
            onClick={props.onEditProfile}
            className="profile__button-edit opacity"
            type="button"
          >
            <img
              className="profile__button-edit-image"
              src={profileEditButton}
              alt="Рисунок карандаша"
            />
          </button>
          <p className="profile__subtitle"></p>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__button-add opacity"
          type="button"
        >
          <img
            className="profile__button-add-image"
            src={profileAddButton}
            alt="Знак плюс"
          />
        </button>
      </section>

      <ul className="elements"></ul>
    </main>
  );
}
