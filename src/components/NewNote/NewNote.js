import { useState } from "react";
import NoteForm from "./NoteForm";

const NewNote = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const clickHandler = () => {
    setFormIsVisible(true);
  };

  const enterNoteHandler = () => {
    setFormIsVisible(false);
  };

  return (
    <section>
      {formIsVisible ? (
        <NoteForm onEnterNote={enterNoteHandler} />
      ) : (
        <button className="btn" onClick={clickHandler}>
          + Add New Note
        </button>
      )}
    </section>
  );
};

export default NewNote;
