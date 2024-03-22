import { ToggleOption } from '../../../types/ToggleOption'
import classes from './ToggleOptionInput.module.css'

interface ToggleInputProps {
  option: ToggleOption
  toggleName: string
  defaultChecked?: boolean
}

const ToggleOptionInput = ({ option, toggleName, defaultChecked }: ToggleInputProps) => {
  return (
    <div className={classes.toggle__option}>
      <input
        className={classes.toggle__input}
        type="radio"
        value={option.value}
        id={option.value}
        name={toggleName}
        defaultChecked={defaultChecked}
      ></input>
      <label className={classes.toggle__label} key={option.value + '_label'} htmlFor={option.value}>
        {typeof option.title === 'string' ? option.title : option.title()}
      </label>
    </div>
  )
}

export default ToggleOptionInput
