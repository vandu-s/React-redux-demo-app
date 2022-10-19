import logo from './logo.svg';
import './App.css';
import CakeContainer from './CakeContainer';
import IceCreamContainer from './IceCreamContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import NewCakeContainer from './NewCakeContainer';
import ItemContainer from './ItemContainer';
// import UserContainer from './UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        {/* <UserContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
