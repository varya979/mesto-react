import React from "react";

export default function Card() {
  return (
    <template className="element-template">
      <li className="element">
        <img className="element__image" src="" alt="" />
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
  );
}
