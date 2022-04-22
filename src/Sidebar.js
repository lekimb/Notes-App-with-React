import {IoClose} from 'react-icons/io5'

export default function Sidebar({notes, selectedId, setNotes, setSelectedId}) {
    function addNewNote() {
        const newNote = {
            id: Math.floor(Math.random() * 100000),
            title: "",
            body: "",
            date: new Date()
        }
        setNotes(current => [newNote, ...current]);
        setSelectedId(newNote.id);
    }    

    function deleteNote(id) {
        setNotes(currentNotes => {
            let newNotes = currentNotes.filter(note => {
                return note.id !== id;
            })
            // Cambia la nota seleccionada
            if (newNotes.length > 0) {
                setSelectedId(newNotes[0].id);
            } else {
                setSelectedId(null);
            }
            return newNotes;
        })
    }


    return (
    <div className="sidebar">
        <button className="new-note" onClick={addNewNote}>Add new note</button>
        <div className="notes-list">
            {notes.map(note => {
                return (
                <div 
                    key={note.id} 
                    className={`little-note ${selectedId === note.id ? 'little-note--selected' : ''}`} 
                    onClick={() => setSelectedId(note.id)}>
                        <div className="little-note__header">
                            <div className="little-note__title">{note.title === "" ? "Nueva nota" : note.title}</div>
                            <div className="little-note__delete" onClick={() => deleteNote(note.id)}><IoClose/></div>
                        </div>
                        <div className="little-note__body">{note.body}</div>
                        <div className="little-note__date">{note.date.toLocaleString()}</div>
                        
                </div>
                )
            })}

            {/*<div class="little-note">
                <div class="little-note__title">Title</div>
                <div class="little-note__body">This should be the body of the note</div>
                <div class="little-note__date">12/4/2022</div>
                <div class="little-note__delete"></div>
            </div>
            <div class="little-note little-note--selected">
                <div class="little-note__title">Another title</div>
                <div class="little-note__body">Second note here</div>
                <div class="little-note__date">13/4/2022</div>
                <div class="little-note__delete"></div>
            </div>*/}
        </div>
    </div>
    );
}