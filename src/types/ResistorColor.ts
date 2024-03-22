import { Color } from './Color'
import { ToggleOption } from './ToggleOption'

export interface ResistorColor {
  color: Color
  visible: 'visible' | 'hidden'
  options: ToggleOption[]
}

export enum Visibilty {
  visible = 'visible',
  hidden = 'hidden'
}
