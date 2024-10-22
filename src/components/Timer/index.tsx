import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss'
import {timeForSeconds} from '../../common/utils/date'

export default function Timer(){
  console.log('conversão: ', timeForSeconds('01:01:01'))
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o Cronômetro
      </p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>
        Começar
      </Button>
    </div>
  )
}