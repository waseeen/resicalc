import classes from './Toggle.module.css'

import { ToggleOption } from '../../../types/ToggleOption'
import ToggleOptionInput from '../ToggleOptionInput/ToggleOptionInput'
import { Lang } from '../../../types/Lang'

interface ToggleProps {
  options: ToggleOption[]
  valueChange: (e: any) => void
  toggleName: string
  defaultValue: string
  vertical?: boolean
}

const Toggle = ({ options, valueChange, toggleName, defaultValue, vertical }: ToggleProps) => {
  return (
    <div
      onChange={(e) => {
        valueChange((e.target as HTMLInputElement).value as Lang)
      }}
      className={classes.toggle + (vertical ? ' ' + classes.toggle_vertical : '')}
    >
      {options.map((option) => {
        return (
          <ToggleOptionInput
            option={option}
            toggleName={toggleName}
            defaultChecked={option.value === defaultValue}
            key={option.value}
          />
        )
      })}
    </div>
  )
}

export default Toggle
