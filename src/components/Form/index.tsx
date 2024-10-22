import React from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { ITask } from "../../types/tasks";
import {v4 as uuidv4} from 'uuid'

class Formulario extends React.Component<{setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}>{
  state = {
    tarefa: '',
    tempo: '00:00'
  }

  addTask(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    this.props.setTasks(prevTasks => [...prevTasks, 
      {...this.state, 
        id: uuidv4(),
        selecionado: false, 
        completado: false
      }])
    this.setState({
      tarefa: '',
      tempo: '00:00'
    })
  }

  render(){
    return(
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Tarefa</label>
          <input 
            type="text" 
            name="tarefa"
            value={this.state.tarefa}
            onChange={(e) => {this.setState({...this.state, tarefa: e.target.value})}}
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
            value={this.state.tempo}
            onChange={(e) => {this.setState({...this.state, tempo: e.target.value})}}
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
}

export default Formulario