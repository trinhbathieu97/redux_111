import React,{useState} from 'react';
import { connect } from 'react-redux';

import { compelet } from './strore/action/action';

const Todolist = ({todos,compelet}) => {
    
    
  return( 

  <div className='todo-list'>
      <ul>
          {todos.map(todo => <li key={todo.id}
          className={todo.completed ? "completed" : ""}
          >{todo.title}
            <input type="checkbox" onChange={()=>compelet(todo.id)}/>
          </li>)}
          
      </ul>
    </div>

  )
};

const mocState = state =>({
    todos: state.mytodo.todo
})


export default connect(mocState,{compelet}) (Todolist)
