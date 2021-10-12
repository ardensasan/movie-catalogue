import { Provider } from "react-redux";
import reducer from "./state/reducers";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./state/sagas/home";
import { Path } from "./common/enums/path";
const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path={[Path.Home, Path.Root]} component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
