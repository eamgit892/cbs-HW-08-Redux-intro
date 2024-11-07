import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getNotes, addNote } from "./counterSlice";
import './Notes.css'

export  function Notes() {

    const notes = useSelector(getNotes)
    const dispatch = useDispatch() 

    const [note, setNote] = useState('')

    return (
        <div>
            <input type="text" value={note}
                onChange={(e) => setNote(e.target.value)}
            /><br /><br />

            <button 
                    aria-label="Add note"
                    onClick={() => dispatch(addNote(note))}> Add note
            </button>
            <hr />
            <h4>Current array content: </h4>
            <ul>    
                {notes.map( (n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
                    

        </div>
    )
}