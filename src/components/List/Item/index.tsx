import { ITask } from '../../../types/tasks'
import style from './Item.module.scss'

interface Props extends ITask{
  isSelected: (selectedTask: ITask) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, isSelected}: Props){
  return(
    <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
      onClick={() => isSelected({
        tarefa,
        tempo,
        completado,
        selecionado,
        id
      })}>
      <h3>
        {tarefa}
      </h3>
      <span>
        {tempo}
      </span>
    </li>
  )
}