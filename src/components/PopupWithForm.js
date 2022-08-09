import React, { Children } from "react";
import popupButtonClose from "../images/popup__button-close.svg";

export default function PopupWithForm({ name, title }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__container">
        <button className="popup__button-close opacity" type="button">
          <img
            className="popup__button-close-image"
            src={popupButtonClose}
            alt="рисунок кнопки закрытия окна"
          />
        </button>
        <form
          className="popup__form"
          name={name}
          action="#"
          method="post"
          noValidate
        >
          <h3 className="popup__title">{title}</h3>
          {/* {children} */}
          <button className="popup__button-save" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
