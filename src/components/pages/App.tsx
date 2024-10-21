import React from 'react';
import Formulario from '../Form';
import List from '../List';
import style from './App.module.scss'
import Timer from '../Timer';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <List />
      <Timer />
    </div>
  );
}

export default App;
