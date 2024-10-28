import React, { useState } from 'react';
import Formulario from '../Form';
import List from '../List';
import style from './App.module.scss'
import Timer from '../Timer';
import { ITask } from '../../types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()
  const [start, setStart] = useState<boolean>(false)
  
  function isSelected(selectedTask: ITask){
    setSelected(selectedTask)
    setTasks(prevTask => prevTask.map(task => ({
      ...task,
      selecionado: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask(){
    if(selected){
      setSelected(undefined);
      setTasks(prevTask => prevTask.map(task => {
        if(task.id === selected.id){
          return{
            ...task,
            selecionado: false,
            completado: true
          }
        }
        return task
      }))
      setStart(false)
    }
  }

  console.log(start)

  return (
    <div className={style.AppStyle}>
      <Formulario setTasks={setTasks} />
      <List tasks={tasks} isSelected={isSelected} start={start}/>
      <Timer selected={selected} finishTask={finishTask} setStart={setStart}/>
    </div>
  );
}

export default App;
