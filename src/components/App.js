import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import Home from './page/Home';
import About from './page/About';
import Demo from './page/Demo';
import Thanks from './page/Thanks';
import Wrapper from './common/Wrapper';

function App() {
  return (
    <div className="app">
      <Header/>
      <Wrapper>
        <Switch>
          <Route exact path="/" default component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/thanks" component={Thanks} />
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;
