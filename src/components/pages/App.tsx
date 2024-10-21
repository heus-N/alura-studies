import React, { useState } from 'react';
import Formulario from '../Form';
import List from '../List';
import style from './App.module.scss'
import Timer from '../Timer';
import { ITask } from '../../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
