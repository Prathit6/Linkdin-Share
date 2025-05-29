import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostForm from './components/PostForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>LinkedIn Posting App</h1>
        <Switch>
          <Route path="/" exact component={PostForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;