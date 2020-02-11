import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Redirect} from "react-router-dom";
import Header from './components/Header';
import Moviecard from './components/Moviecard';
import store from './components/store';
import SingleMovie from './components/SingleMovie';

function App() {
  const CardWithPoster = () => {
    return <Moviecard poster />
  }
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route path="/Movietable" component={Moviecard} />            
          <Route path="/Moviecard" component={CardWithPoster} />
          <Route path="/SingleMovie/:id" component={SingleMovie} />                                     
        </div>
        <Redirect from="/" to="Movietable" />
      </Router>
    </Provider>  
  );
}

export default App;
 