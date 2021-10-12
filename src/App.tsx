import { Provider } from 'react-redux';
import reducer from './state/reducers'
import {createStore} from 'redux'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
const App = () => {
  const store = createStore(reducer)
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
