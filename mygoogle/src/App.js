import logo from './logo.svg';
import './App.css';
import Signin from './components/signIn/signin';
import Signup from './components/signup/signup';
import Header from './components/header/header';
import Dashboard from './components/dashboard/dashboard';
import TakeNote1 from './components/takeNote1/takenote1';
import TakeNote2 from './components/takeNote2/takeNote2';
import TakeNote3 from './components/takeNote3/takeNote3';
import ColorPopper from './components/colorPopper/colorPopper';
import Router1 from './components/router/router1';
import { AppBar } from '@mui/material';
import Grid from '@mui/material';
import { Provider } from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <Header/> */}
      {/* <TakeNote1/> */}
      {/* <TakeNote2/> */}
      {/* <TakeNote3/> */}
      {/* <Dashboard/> */}
      {/* <ColorPopper/> */}
      
      <Provider store={store}>
      <Router1/>
      </Provider>
     
    </div>
  );
}

export default App;
