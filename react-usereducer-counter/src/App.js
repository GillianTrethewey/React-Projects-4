import React, { useReducer } from 'react';
import './App.css';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1}
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 } )

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  return (
    <div className="App">
        <button onClick={ decrement }>-</button>
        <span>{state.count}</span>
        <button onClick={ increment }>+</button>
    </div>
  )
  }

