import React from 'react';
import {connect} from "react-redux"
const NavBar = ({todos}) => {
   
  return <div className='navbar'>
      <h1>React App</h1>
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Total :{todos.length}</li>
      </ul>
  </div>;
};

const layState = state =>({
  todos: state.mytodo.todo
})


export default connect(layState,{}) (NavBar);
