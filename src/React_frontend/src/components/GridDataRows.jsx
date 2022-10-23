import React, { useEffect, useState } from "react";
import Note from "./Note";
import DeleteIcon from "@material-ui/icons/Delete";
import { React_backend } from "../../../declarations/React_backend";




function GridDataRows(props) {

  const [notes, setNotes] = useState([]);
  
  fetchData();

  async function fetchData() {
    const notesArray = await React_backend.readNotes();
    setNotes(notesArray);
  }  
  

  console.log(notes);

  // {notesArray.map((noteItem, index) => {
  // })}

    {notes.map((noteItem, index) => {
      return (
        <tr>
          <td>{noteItem.readingLevel}</td>
          <td>{noteItem.entryNotes}</td>
        </tr>
      );
    })}


    // {notesArray.map((noteItem, index) => {
    //   return (
    //     <tr>
    //       <td>{noteItem.note}</td>
    //       <td>{noteItem.note}</td>
    //     </tr>
    //   );
    // })}
}

export default GridDataRows;
