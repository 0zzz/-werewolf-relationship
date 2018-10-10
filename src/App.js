import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import BasicLayout from './routes/BasicLayout';
import createStore from './store/createStore';
import { history } from './utils/history';
import './App.scss';

const store = createStore();

const BasicRouter = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={BasicLayout} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default BasicRouter;
