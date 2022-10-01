//import logo from './logo.svg';
import React from 'react';
import './App.css';
import TableauEmbed from './components/TableauEmbed'

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App({signOut, user}){
  return (
    <div className="App">
      
      <h1>Workout Data</h1>
      <TableauEmbed />
      <button onClick={signOut}> Sign Out </button>
    </div>
  );
}

//export default App;
export default withAuthenticator(App);
//<AmplifySignOut />