import { ResistorColor, Visibilty } from '../../types/ResistorColor'
import Toggle from '../UI/Toggle/Toggle'
import classes from './ColorSelector.module.css'

interface ColorSelectorProps {
  resistorColors: ResistorColor[]
  colorChange: (c: string) => void
}
const ColorSelector = ({ resistorColors, colorChange }: ColorSelectorProps) => {
  return (
    <div className={classes.colorSelector}>
      {resistorColors.map(
        (stripe, i) =>
          stripe.visible === Visibilty.visible && (
            <Toggle
              options={stripe.options}
              toggleName={`stripe${i}`}
              defaultValue={i + stripe.color}
              valueChange={colorChange}
              vertical
              key={`stripe${i}`}
            />
          )
      )}
    </div>
  )
}

export default ColorSelector
