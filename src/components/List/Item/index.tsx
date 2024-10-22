import { ITask } from '../../../types/tasks'
import style from '../List.module.scss'

export default function Item({tarefa, tempo, selecionado, completado, id}: ITask){
  return(
    <li className={style.item}>
      <h3>
        {tarefa}
      </h3>
      <span>
        {tempo}
      </span>
    </li>
  )
}