import React, { useState } from "react";
import style from './List.module.scss'
import Item from "./Item";

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
          <Item 
            key={index}
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List