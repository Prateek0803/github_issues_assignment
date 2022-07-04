import React            from 'react';
import { Route,Routes } from 'react-router-dom';
import Home             from './Components/Home';
import LoginForm        from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'           element = { <Home />} />
        <Route path='/login'      element = {<LoginForm />} />
        <Route path='/register'   element = { <RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
