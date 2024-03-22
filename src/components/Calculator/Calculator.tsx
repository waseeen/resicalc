import { useTranslation } from 'react-i18next'
import { ResistorColor } from '../../types/ResistorColor'
import classes from './Calculator.module.css'
import { format } from '../../utils/format'
import { Color } from '../../types/Color'
import { StripesValues } from '../../types/StripesValues'

interface CalculatorProps {
  lines: ResistorColor[]
  stripes: StripesValues
}

const Digit = {
  [Color.black]: 0, // black
  [Color.brown]: 1, // brown
  [Color.red]: 2, // red
  [Color.orange]: 3, // orange
  [Color.yellow]: 4, // yellow
  [Color.green]: 5, // green
  [Color.blue]: 6, // blue
  [Color.violet]: 7, // violet
  [Color.grey]: 8, // grey
  [Color.white]: 9, // white
  [Color.gold]: -1, // gold
  [Color.silver]: -2 // silver
}

const Tolerance = {
  [Color.black]: '', // black
  [Color.brown]: '+-1', // brown
  [Color.red]: '+-2', // red
  [Color.orange]: '+-3', // orange
  [Color.yellow]: '+-4', // yellow
  [Color.green]: '+-0.5', // green
  [Color.blue]: '+-0.25', // blue
  [Color.violet]: '+-0.1', // violet
  [Color.grey]: '+-0.5', // grey
  [Color.white]: '+-1', // white
  [Color.gold]: '+-5', // gold
  [Color.silver]: '+-10' // silver
}
const Temperature = {
  [Color.black]: '250', // black
  [Color.brown]: '100', // brown
  [Color.red]: '50', // red
  [Color.orange]: '15', // orange
  [Color.yellow]: '25', // yellow
  [Color.green]: '20', // green
  [Color.blue]: '10', // blue
  [Color.violet]: '5', // violet
  [Color.grey]: '1', // grey
  [Color.white]: '', // white
  [Color.gold]: '', // gold
  [Color.silver]: '' // silver
}

const Calculator = ({ lines, stripes }: CalculatorProps) => {
  const { t } = useTranslation()
  let value = 0
  let tolerance = ''
  let temp = ''
  if (stripes == '3') {
    value =
      (Digit[lines[0].color] * 10 + Digit[lines[1].color]) * Math.pow(10, Digit[lines[3].color])
  }
  if (stripes === '4') {
    value =
      (Digit[lines[0].color] * 10 + Digit[lines[1].color]) * Math.pow(10, Digit[lines[3].color])
    tolerance = Tolerance[lines[5].color]
  }
  if (stripes === '5') {
    value =
      (Digit[lines[0].color] * 100 + Digit[lines[1].color] * 10 + Digit[lines[2].color]) *
      Math.pow(10, Digit[lines[3].color])
    tolerance = Tolerance[lines[5].color]
  }
  if (stripes === '6') {
    value =
      (Digit[lines[0].color] * 100 + Digit[lines[1].color] * 10 + Digit[lines[2].color]) *
      Math.pow(10, Digit[lines[3].color])
    tolerance = Tolerance[lines[4].color]
    temp = Temperature[lines[5].color]
  }

  return (
    <div className={classes.calculator}>
      {' '}
      <span>
        {t('resistance')}: {format(value, 2)}Ω
      </span>
      {tolerance ? (
        <>
          <br />
          {`${t('tolerance')}: ${tolerance}%`}
        </>
      ) : (
        ''
      )}
      {temp ? (
        <>
          <br />
          {`${t('temp')}: ${temp}ppm/°C`}
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default Calculator
