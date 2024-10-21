import React, { useState } from "react";
import style from './List.module.scss'


function List() {
  const tasks = [
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'Javascript',
      tempo: '01:00:00'
    },
    {
      tarefa: 'Typescript',
      tempo: '03:00:00'
    }
  ]

  return(
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks?.map((task, index) => (
          <li key={index} className={style.item}>
            <h3>
              {task.tarefa}
            </h3>
            <span>
              {task.tempo}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List