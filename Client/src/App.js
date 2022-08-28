import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const App = () => (
<div className="ui container">
  <Route path="/" exact component = {LoginPage}/>
  <Route path="/home" exact component= {HomePage} />
</div>
);

export default App;
