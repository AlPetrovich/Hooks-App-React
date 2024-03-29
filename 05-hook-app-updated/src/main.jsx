import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { TodoApp } from './09-useReducer/TodoApp'
import { MainApp } from './10-useContext/MainApp'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './07-useCallback/CallbackHook'
// import { Padre } from './08-tarea-memo/Padre'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import './08-useReducer/intro-reducer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
