import { Provider } from "react-redux";
import reducer from "./state/reducers";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Movie from "./Pages/Movie";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./state/sagas";
import { Path } from "./common/enums/path";
import Search from "./Pages/Search";
const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={`${Path.SearchByGenre}:genreID/page/:page`}
              component={Search}
            />
            <Route
              exact
              path={`${Path.SearchByLanguage}:language/page/:page`}
              component={Search}
            />
            <Route
              exact
              path={`${Path.SearchByQuery}:query/page/:page`}
              component={Search}
            />
            <Route exact path={`${Path.Movies}page/:page`} component={Movies} />
            <Route exact path={`${Path.Movie}:id`} component={Movie} />
            <Route path={[Path.Root,Path.Home]} component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
