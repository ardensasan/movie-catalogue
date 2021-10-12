import { Provider } from 'react-redux';
import reducer from './state/reducers'
import {createStore,applyMiddleware} from 'redux'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import createSagaMiddleware from '@redux-saga/core';
import { watchSetPopularMovieListSaga } from './state/sagas/home';
const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer,applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(watchSetPopularMovieListSaga)
  return (
    <Provider store = {store}>
    <div className="App">
      <BrowserRouter>
      <Route path="/" component={Home}/>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
