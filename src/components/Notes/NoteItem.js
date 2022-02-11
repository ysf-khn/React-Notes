import useHttp from "../../hooks/use-http";
import classes from "./NoteItem.module.css";

const NoteItem = (props) => {
  const { isLoading, error, sendRequest: deleteNote } = useHttp();

  const transformNotes = () => {};

  const deleteHandler = (noteId) => {
    console.log(noteId);
    deleteNote(
      {
        url:
          "https://react-http-b1160-default-rtdb.firebaseio.com/notes/" +
          noteId,
        method: "DELETE",
      },
      transformNotes
    );
  };

  return (
    <div className={classes.note}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
      <div className={classes.buttons}>
        <button className={classes.edit}>Edit</button>
        <button
          className={classes.del}
          id={props.id}
          onClick={() => deleteHandler(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
