import { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./NoteForm.module.css";

const NoteForm = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyInputHandler = (event) => {
    setBody(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (title.trim().length > 0 && body.trim().length > 0) {
      props.onEnterNote({ title, body });
    }
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={titleInputHandler}
        />
        <label>Body</label>
        <textarea
          name="blog-text"
          value={body}
          onChange={bodyInputHandler}
        ></textarea>
        <div className={classes.buttonDiv}>
          <button className={classes.addBtn}>Add Note</button>
          <button className={classes.cancelBtn} onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NoteForm;
