import logo from './logo.svg';
import './App.css';
import { Heading, Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUpPage';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<PrivateRoute><Home/></PrivateRoute>}/>
        <Route path='/login'  element={<LoginPage/>}/>
        <Route path='/signup'  element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
