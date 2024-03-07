import {useState} from 'react';

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState( initialName)
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditing() {
        setIsEditing(editing => !editing);
    }

    function handleChange(eventInput) {
        setPlayerName(eventInput.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;   
       // btnCaption = 'Save';
    }

    return (
        <li>
          <span className="player">
            {editablePlayerName}
            <span className="player-symbol"> {symbol} </span>
          </span>
          <button onClick={handleEditing}> {isEditing ? 'Save' : 'Edit'} </button>
        </li>
    );
}