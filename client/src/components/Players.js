import React from 'react';

import {useDarkMode} from '../hooks/useDarkMode';

export default props => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return(
        <header className="App-header">
          <span>Dark Mode</span>
          <input type='checkbox' onClick={toggleDarkMode}/>
          <h1>Women's World Cup Players</h1>
          {
            props.players.map(player => <p key={player.name}>{player.name} - {player.country} - Search Rank: {player.searches}</p>)
          }
        </header>
    )
}