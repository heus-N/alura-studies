import React, { useState } from 'react';
import Formulario from '../Form';
import List from '../List';
import style from './App.module.scss'
import Timer from '../Timer';
import { ITask } from '../../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()
  
  function isSelected(selectedTask: ITask){
    setSelected(selectedTask)
    setTasks(prevTask => prevTask.map(task => ({
      ...task,
      selecionado: task.id === selectedTask.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTasks={setTasks} />
      <List tasks={tasks} isSelected={isSelected}/>
      <Timer selected={selected} />
    </div>
  );
}

export default App;
