import * as React from 'react';
import AddToDo from './AddToDo';
import ToDo from './ToDo';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <div><AddToDo/></div>
      <div><ToDo/></div>
      <div><Footer/></div>
    </div>
  );
};

export default App;