import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import DataGrid from "./DataGrid";
import { React_backend } from "../../../declarations/React_backend";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      React_backend.createNote(newNote.readingLevel, newNote.entryNotes)
      return [newNote, ...prevNotes];
    });
  }

  useEffect(() => {
    console.log("useEffect is triggered")
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await React_backend.readNotes();
    setNotes(notesArray);
  }  

  function deleteNote(id) {
    React_backend.removeNote(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            readingLevel={noteItem.readingLevel}
            entryNotes={noteItem.entryNotes}
            onDelete={deleteNote}
          />
        );
      })} */}
      <DataGrid />
      <Footer />
    </div>



  );
}

export default App;
