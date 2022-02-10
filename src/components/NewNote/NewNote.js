import { useState } from "react";
import useHttp from "../../hooks/use-http";
import NoteForm from "./NoteForm";
import classes from "./NewNote.module.css";

const NewNote = (props) => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const { isLoading, error, sendRequest: sendNoteRequest } = useHttp();

  const clickHandler = () => {
    setFormIsVisible(true);
  };

  const cancelHandler = () => {
    setFormIsVisible(false);
  };

  const createNote = ({ title, body }, noteData) => {
    const generatedId = noteData.name;
    const createdNote = { id: generatedId, title: title, body: body };

    props.onAddNote(createdNote);
  };

  const enterNoteHandler = async ({ title, body }) => {
    setFormIsVisible(false);

    sendNoteRequest(
      {
        url: "https://react-http-b1160-default-rtdb.firebaseio.com/notes.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { title: title, body: body },
      },
      createNote.bind(null, { title, body })
    );
  };

  return (
    <section>
      {formIsVisible ? (
        <NoteForm onEnterNote={enterNoteHandler} onCancel={cancelHandler} />
      ) : (
        <button className={classes.btn} onClick={clickHandler}>
          {!isLoading ? "+ Add New Note" : "Adding Note..."}
        </button>
      )}
    </section>
  );
};

export default NewNote;
