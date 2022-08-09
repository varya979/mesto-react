import React from "react";
import profileEditButton from "../images/profile__button-edit.svg";
import profileAddButton from "../images/profile__button-add.svg";

export default function Main() {
  function handleEditAvatarClick() {
    const avatarButton = document.querySelector(".profile__avatar-edit-button");

    avatarButton.addEventListener("click", () => {
      const avatarPopup = document.querySelector(".popup_type_update-avatar");
      avatarPopup.classList.add("popup_opened");
    });
  }

  function handleEditProfileClick() {
    const profilePopupEditButton = document.querySelector(
      ".profile__button-edit"
    );

    profilePopupEditButton.addEventListener("click", () => {
      const profilePopup = document.querySelector(".popup_type_profile");
      profilePopup.classList.add("popup_opened");
    });
  }

  function handleAddPlaceClick() {
    const profilePopupAddButton = document.querySelector(
      ".profile__button-add"
    );

    profilePopupAddButton.addEventListener("click", () => {
      const cardPopup = document.querySelector(".popup_type_card");
      cardPopup.classList.add("popup_opened");
    });
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            onClick={handleEditAvatarClick}
            className="profile__avatar-edit-button"
            type="button"
          ></button>
          <img className="profile__avatar" alt="Аватар пользователя" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title"></h1>
          <button
            onClick={handleEditProfileClick}
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
          onClick={handleAddPlaceClick}
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
