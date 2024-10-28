import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss'
import {timeForSeconds} from '../../common/utils/time'
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";

interface Props{
  selected: ITask | undefined,
  finishTask: () => void
  setStart: (value: boolean) => void
}

export default function Timer({selected, finishTask, setStart}: Props){
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.tempo){
      setTime(timeForSeconds(selected.tempo))
    }
  }, [selected])

  function countdown(counter: number = 0){
    if(selected){
      setStart(true)
    }
    setTimeout(() => {
      if(counter > 0){
        setTime(counter - 1)
        return countdown(counter - 1)
      }
      finishTask();
    }, 1000)
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o Cronômetro
      </p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)}>
        Começar
      </Button>
    </div>
  )
}