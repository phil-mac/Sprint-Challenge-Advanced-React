import React, {useEffect, useState} from 'react';

import {useDarkMode} from '../hooks/useDarkMode';
import {useTightMode} from '../hooks/useTightMode';

export default props => {  
    const [toggleDarkMode] = useDarkMode(false);
    const [toggleTightMode] = useTightMode(false);

    return(
        <header className="App-header">
          <span style={{marginTop: '10px'}}>Dark Mode</span>
          <br/>
          <input type='checkbox' onClick={toggleDarkMode} data-testid='darkModeButton'/>
          <br/>
          <span>Tighten</span>
          <br/>
          <input type='checkbox' onClick={toggleTightMode} data-testid='tightModeButton'/>
          <h1 data-testid='title'>Women's World Cup Players</h1>
          {
            props.players.map(player => <p key={player.name} data-testid='player'>{player.name} - {player.country} - Search Rank: {player.searches}</p>)
          }
        </header>
    )
}