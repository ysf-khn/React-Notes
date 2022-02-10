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
    console.log(title, body);
    props.onEnterNote();
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
        <button>Add Note</button>
      </form>
    </Card>
  );
};

export default NoteForm;
