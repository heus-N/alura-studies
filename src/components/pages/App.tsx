import React from 'react';
import Formulario from '../Form';
import List from '../List';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <List />
    </div>
  );
}

export default App;
