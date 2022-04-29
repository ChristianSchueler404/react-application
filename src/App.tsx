import React, {useEffect, useState} from 'react';
import './App.css';
import './components/userList';
import List from './components/userList'

function App() {
  return (
    <div className="App">
        <div className='App-header'>
          <h1>Users</h1>
          {React.createElement(List)}
        </div>
        
    </div>
    
  );
}

export default App;
