import React from "react";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="cards__item">
      <img
        onClick={handleClick}
        className="cards__image"
        src={props.card.link}
        alt={props.card.name}
      />
      <button className="cards__button-delete opacity" type="button" />
      <div className="cards__info">
        <p className="cards__title">{props.card.name}</p>
        <div className="cards__likes-container">
          <button className="cards__button-like opacity" type="button" />
          {props.card.likes.length > 0 && (
            <p className="cards__count-likes">{props.card.likes.length}</p>
          )}
        </div>
      </div>
    </li>
  );
}
