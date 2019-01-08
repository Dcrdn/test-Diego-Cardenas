import React, { Component } from 'react';
import Inbox from './components/inbox/Inbox';
import ViewMail from './components/viewMail/ViewMail';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Inbox />
        <ViewMail />
      </div>
    );
  }
}

export default App;
