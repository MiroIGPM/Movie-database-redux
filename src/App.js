import React from 'react';
import './App.css';

//importing router 
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './components/Header';
import Movietable from './components/Moviestable';
import Moviecard from './components/Moviecard';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        
        <Route path="/Movietable" component={Movietable} />

        <Route path="/Moviecard" component={Moviecard} />  
        
        
          
      </div>
    </Router>
  );
}

export default App;
 