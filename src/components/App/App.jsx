import React from 'react';
import axios from 'axios';
import './App.css';
import feelings from '..Feelings/Feelings';
import comments from '..Comments/Comments';
import support from '..Support/Support';
import understand from '..Understand/Understand';
import { Router } from 'express';

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
        <Route exact path="/understanding" component={Understand} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/done" component={SubmittedConfirmation} />
      </Router>
      </main>
    </div>
  );
}

export default App;
