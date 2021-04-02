import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
// import App from './App';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import './resources/global.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Switch>
        <Route path="/" component={SignInPage} exact />
        <Route path="/sign-up" component={SignUpPage} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
