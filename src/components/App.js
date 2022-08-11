// Файл App.js — корневой компонент приложения.
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Fieldset from "./Fieldset";
import ImagePopup from "./ImagePopup";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
        />
        <Fieldset
          id="profile-description"
          name="description"
          placeholderText="О себе"
          typeValue="text"
          minLengthValue="2"
          maxLengthValue="200"
        />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        />
        <Fieldset
          id="card-description"
          name="link"
          placeholderText="Ссылка на картинку"
          typeValue="url"
        />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
        />
      </PopupWithForm>

      <PopupWithForm
        name="confirm-delete"
        title="Вы уверены?"
        formClassName="popup__form popup__form_confirm"
        submitButtonTitle="Да"
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}
