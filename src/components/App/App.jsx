import React from 'react';
import axios from 'axios';
import './App.css';
import feeling from '../feeling/feeling';
import comment from '../comment/comment';
import support from '../support/support';
import understand from '../understand/understand';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/feeling" component={Feelings} />
        <Route exact path="/understand" component={Understand} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/comment" component={Comments} />
      </Router>
      </main>
    </div>
  );
}

export default App;
