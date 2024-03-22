import { useTranslation } from 'react-i18next'
import classes from './StripesSelector.module.css'
import Toggle from '../UI/Toggle/Toggle'
import { ToggleOption } from '../../types/ToggleOption'
import { StripesValues } from '../../types/StripesValues'

interface StripesSelectorProps {
  currentStripes: string
  valueChange: (e: StripesValues) => void
}

const StripesSelector = ({ currentStripes, valueChange }: StripesSelectorProps) => {
  const { t } = useTranslation()
  const options: ToggleOption[] = [
    {
      value: '3',
      title: '3 ' + t('stripes')
    },
    {
      value: '4',
      title: '4 ' + t('stripes')
    },
    {
      value: '5',
      title: '5 ' + t('stripes2')
    },
    {
      value: '6',
      title: '6 ' + t('stripes2')
    }
  ]
  return (
    <div className={classes.stripesSelector}>
      {t('selectStripes')}
      <Toggle
        options={options}
        toggleName="stripesSelector"
        defaultValue={currentStripes}
        valueChange={valueChange}
      />
    </div>
  )
}

export default StripesSelector
