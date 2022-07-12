import './App.css';
import React from 'react'
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';

// Le nom 'count' (choix personel), sera la key qui ira dans le store
import count from './reducers/count.reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

// creatStore (old) :
const store = createStore(combineReducers({count}))
// pour créér le store = le magasin de données/states 
// le paramètre = le reducer

// configureStore (new) : 
// const reducer = combineReducers({count})
// const store = configureStore({reducer})

function App() {
  return (
    <div className="App">

    {/* Provide = 'fournir' le store */}
    {/* initialisation du store avec sa props : store */}
    <Provider store={store}>

      <h1>Simple Redux counter</h1>
      <CounterButton/>
      <CounterDisplay/>

    </Provider>
    </div>
  );
}

export default App;
