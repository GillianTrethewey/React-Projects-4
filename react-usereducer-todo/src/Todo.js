import React from 'react';
import { ACTIONS } from './App.js';

export default function Todo({ todo, dispatch}) {
  return (
    <div>
        <span style={{ color: todo.complete ? 'tomato' : '#000' }}>
            {todo.name}
        </span>
        <input  type="checkbox" onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})} />
                
<button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})}>Delete</button>
    </div>
  )
}
