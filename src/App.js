import logo from './logo.svg';
import './styles.css';
import {useEffect, useState} from 'react'
import Sidebar from './Sidebar.js';
import Note from './Note.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedId, setSelectedId] = useState(null); // note.id

  
  return (
    <div className="notes-app">
      <div className="topbar">Notes App</div>
      <div className="sidebar-and-note-wrapper">
        <Sidebar 
          notes={notes} 
          selectedId={selectedId} 
          setSelectedId={(id)=> setSelectedId(id)}
          setNotes={(notes) => setNotes(notes)}
        />
        <Note 
          notes={notes} 
          selectedId={selectedId} 
          setSelectedId={(id)=> setSelectedId(id)}
          setNotes={(notes) => setNotes(notes)}
        />
      </div>
    </div>
  );
}

export default App;
