import useHttp from "../../hooks/use-http";
import classes from "./NoteItem.module.css";

const NoteItem = (props) => {
  const { isLoading, error, sendRequest: deleteNote } = useHttp();

  const deleteHandler = (noteId) => {
    console.log(noteId);
  };

  return (
    <div className={classes.note}>
      <span
        className={classes.del}
        id={props.id}
        onClick={() => deleteHandler(props.id)}
      >
        ❌
      </span>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
};

export default NoteItem;
