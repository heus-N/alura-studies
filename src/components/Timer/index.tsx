import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss'
import {timeForSeconds} from '../../common/utils/time'
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";

interface Props{
  selected: ITask | undefined
}

export default function Timer({selected}: Props){
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.tempo){
      setTime(timeForSeconds(selected.tempo))
    }
  }, [selected])
  
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o Cronômetro
      </p>
      Tempo: {time}
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>
        Começar
      </Button>
    </div>
  )
}