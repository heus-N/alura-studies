import style from './List.module.scss'
import Item from "./Item";
import { ITask } from '../../types/tasks';

interface Props {
  tasks: ITask[],
  isSelected: (selectedTask: ITask) => void
}

function List({tasks, isSelected}: Props) {

  return(
    <aside className={style.listaTarefas}>
      <h2 > Estudos do dia </h2>
      <ul>
        {tasks?.map((task) => (
          <Item 
            isSelected={isSelected}
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List