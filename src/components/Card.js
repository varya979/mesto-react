import React from "react";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <img
        onClick={handleClick}
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
      />
      <button className="element__button-delete opacity" type="button"></button>
      <div className="element__info">
        <p className="element__title">{props.card.name}</p>
        <div className="element__likes-container">
          <button
            className="element__button-like opacity"
            type="button"
          ></button>
          {props.card.likes.length > 0 && (
            <p className="element__count-likes">{props.card.likes.length}</p>
          )}
        </div>
      </div>
    </li>
  );
}
