import React from "react";
import popupCloseButton from "../images/popup__button-close.svg";

export default function ImagePopup() {
  return (
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
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__figcaption"></figcaption>
        </figure>
      </div>
    </div>
  );
}
