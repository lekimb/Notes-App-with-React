export default function Note({notes, selectedId, setNotes, setSelectedId}) {
    function saveField(e) {
        const classname = e.target.className;
        let field = 'body';
        if (classname.substring(6) === 'title') {
            field = 'title';
        }
        setNotes(currentNotes => {
            let newNotes = currentNotes.map(note => {
                if (note.id === selectedId) {
                    note[`${field}`] = e.target.value;
                    note.date = new Date();
                }
                return note;
            })
            // Ordenar por fecha
            let sortedNotes = newNotes.sort((a, b) => b.date - a.date);
            return sortedNotes;
        })
    }

    function getSelectedNote() {
        let selectedNote = null;
        notes.forEach(note => {
            if (note.id === selectedId) {
                selectedNote = note;
            }
        });
        return selectedNote;
    }

    function handleBlur() {
        const selectedNote = getSelectedNote();
        if (!selectedNote.title && !selectedNote.body) {
            // Elimina la nota
            setNotes(currentNotes => {
                let newNotes = currentNotes.filter(note => {
                    return note.id !== selectedId;
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
    }

    return (
    <div className="note">
        <input 
            className="note__title" 
            type="text" 
            placeholder="Título" 
            value={selectedId ? getSelectedNote().title : ""}
            onChange={(e) => saveField(e)}
            onBlur={handleBlur}
        />
        <textarea 
            className="note__body" 
            placeholder="Nueva nota . . ."
            value={selectedId ? getSelectedNote().body : ""}
            onChange={(e) => saveField(e)}
            onBlur={handleBlur}>
        </textarea>
    </div>
    );
}