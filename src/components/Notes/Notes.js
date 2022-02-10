import NoteItem from "./NoteItem";

import classes from "./Notes.module.css";

const Notes = (props) => {
  let notesList = <h2>No notes found. Start adding some...</h2>;

  if (props.items.length > 0) {
    notesList = (
      <ul className={classes.list}>
        {props.items.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            body={note.body}
            id={note.id}
          ></NoteItem>
        ))}
      </ul>
    );
  }

  let content = notesList;

  return (
    <section>
      <h2 className={classes.all}>All Notes-</h2>
      <div>{content}</div>
    </section>
  );
};

export default Notes;
