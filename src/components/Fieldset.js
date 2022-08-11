import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function Fieldset(props) {
  return (
    <fieldset className="popup__field">
      <input
        id={props.id}
        className={`popup__input popup__input_type_${props.name}`}
        name={props.name}
        placeholder={props.placeholderText}
        // value=""
        type={props.typeValue}
        minLength={props.minLengthValue}
        maxLength={props.maxLengthValue}
        required
      />
      <span className={`popup__input-error popup__input-error-${props.id}`} />
    </fieldset>
  );
}
