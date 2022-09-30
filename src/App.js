//import logo from './logo.svg';
import React from 'react';
import './App.css';
import TableauEmbed from './components/TableauEmbed'

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      
      <h1>Workout Data</h1>
      <TableauEmbed />
      
    </div>
  );
}

//export default App;
export default withAuthenticator(App);
//<AmplifySignOut />