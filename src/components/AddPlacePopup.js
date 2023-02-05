import React from "react";
import PopupWithForm from "./PopupWithForm";
import Fieldset from "./Fieldset";

export default function AddPlacePopup(props) {
  const inputNameRef = React.useRef();
  const inputLinkRef = React.useRef();

  React.useEffect(() => {
    inputNameRef.current.value = "";
    inputLinkRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: inputNameRef.current.value,
      link: inputLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        inputRef={inputNameRef}
      />
      <Fieldset
        id="card-description"
        name="link"
        placeholderText="Ссылка на картинку"
        typeValue="url"
        inputRef={inputLinkRef}
      />
    </PopupWithForm>
  );
}
