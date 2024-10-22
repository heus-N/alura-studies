import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { ITask } from "../../types/tasks";
import {v4 as uuidv4} from 'uuid'


interface Props{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Formulario({ setTasks } : Props){
  const [tarefa, setTarefa] = useState("")
  const [tempo, setTempo] = useState("00:00")

  function addTask(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setTasks(prevTasks => 
      [
        ...prevTasks,
      {
        tarefa,
        tempo,
        id: uuidv4(),
        selecionado: false, 
        completado: false
      }])
    setTarefa("")
    setTempo("00:00")
  }

  return(
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Tarefa</label>
        <input 
          type="text" 
          name="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa( e.target.value )}
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input 
          type="time" 
          step="1"
          name="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Adicionar
      </Button>
    </form>
  )
}

export default Formulario