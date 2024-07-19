import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/MainPage.css';

function MainPage() {
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveNote = () => {
    console.log('Note saved:', note);
    navigate('/login');
  };

  return (
    <div className="main-container">
      <h1>Notes</h1>
      <textarea
        className="note-textarea"
        value={note}
        onChange={handleNoteChange}
        placeholder="Write your note here..."
      />
      <button className="save-button" onClick={handleSaveNote}>
        Save Note
      </button>
    </div>
  );
}

export default MainPage;