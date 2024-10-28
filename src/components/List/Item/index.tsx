import { ITask } from '../../../types/tasks'
import style from './Item.module.scss'

interface Props extends ITask{
  isSelected: (selectedTask: ITask) => void,
  start: boolean
}

export default function Item({tarefa, tempo, selecionado, completado, id, isSelected, start}: Props){
  return(
    <li className={`${start === true ? style.itemStart : ''} ${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
      onClick={() => !completado && isSelected({
        tarefa,
        tempo,
        completado,
        selecionado,
        id
      })}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
      {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
    </li>
  )
}