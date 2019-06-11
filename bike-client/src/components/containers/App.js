import React from 'react';
import Header from '../Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Mainpage from './Mainpage';
import StationPage from './StationPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path="/station-list" component={StationPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
