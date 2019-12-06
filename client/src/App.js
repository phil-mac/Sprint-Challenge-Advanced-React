import React from 'react';

import Players from './components/Players';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(data => {
        this.setState({
          players: data
        })
      })

  }

  render(){
    return (
      <div className="App">
        <Players players={this.state.players} />
      </div>
    );
  }
  
}

export default App;
