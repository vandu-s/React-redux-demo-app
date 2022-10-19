import logo from './logo.svg';
import './App.css';
import CakeContainer from './CakeContainer';
import IceCreamContainer from './IceCreamContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewCakeContainer from './NewCakeContainer';
import ItemContainer from './ItemContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
