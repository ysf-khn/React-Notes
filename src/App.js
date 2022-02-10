import { useEffect, useState } from "react";
import NewNote from "./components/NewNote/NewNote";
import Notes from "./components/Notes/Notes";
import Header from "./components/UI/Header";
import useHttp from "./hooks/use-http";

function App() {
  const [notes, setNotes] = useState([]);

  const { isLoading, error, sendRequest: fetchNotes } = useHttp();

  useEffect(() => {
    const transformNotes = (notesObj) => {
      const loadedNotes = [];

      for (const noteKey in notesObj) {
        loadedNotes.push({
          id: noteKey,
          title: notesObj[noteKey].title,
          body: notesObj[noteKey].body,
        });
      }
      setNotes(loadedNotes);
    };

    fetchNotes(
      {
        url: "https://react-http-b1160-default-rtdb.firebaseio.com/notes.json",
      },
      transformNotes
    );
  }, [fetchNotes]);

  const noteAddHandler = (note) => {
    setNotes((prevNotes) => prevNotes.concat(note));
  };

  return (
    <div className="App">
      <Header />
      <NewNote onAddNote={noteAddHandler} />
      <Notes items={notes} onFetch={fetchNotes} />
    </div>
  );
}

export default App;
