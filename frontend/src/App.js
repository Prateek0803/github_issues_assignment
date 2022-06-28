import React      from 'react';
import Issues_Nav from './Components/Issues_Nav';
import ListCards  from './Components/List_Cards/ListCards';
import Navbar     from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Issues_Nav />
      <ListCards />
    </div>
  );
}

export default App;
