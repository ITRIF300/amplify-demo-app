//import logo from './logo.svg';
import React from 'react';
import './App.css';
import TableauEmbed from './components/TableauEmbed'

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App({signOut, user}){
  return (
    <div className="App">
      

      <TableauEmbed />
      
    </div>
  );
}

//export default App;
export default withAuthenticator(App);
//<AmplifySignOut />

//<h1>Workout Data</h1>
//<button onClick={signOut}> Sign Out </button>