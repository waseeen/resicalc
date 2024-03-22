import { useTranslation } from 'react-i18next'
import { Color, Indexes } from '../types/Color'
import { ToggleOption } from '../types/ToggleOption'

export const useColorOptions = (n: Indexes, v?: 'less'): ToggleOption[] => {
  const { t } = useTranslation()
  if (v === 'less')
    return [
      { title: () => t('black'), value: n + Color.black },
      { title: () => t('brown'), value: n + Color.brown },
      { title: () => t('red'), value: n + Color.red },
      { title: () => t('orange'), value: n + Color.orange },
      { title: () => t('yellow'), value: n + Color.yellow },
      { title: () => t('green'), value: n + Color.green },
      { title: () => t('blue'), value: n + Color.blue },
      { title: () => t('violet'), value: n + Color.violet },
      { title: () => t('grey'), value: n + Color.grey },
      { title: () => t('white'), value: n + Color.white }
    ]
  return [
    { title: () => t('black'), value: n + Color.black },
    { title: () => t('brown'), value: n + Color.brown },
    { title: () => t('red'), value: n + Color.red },
    { title: () => t('orange'), value: n + Color.orange },
    { title: () => t('yellow'), value: n + Color.yellow },
    { title: () => t('green'), value: n + Color.green },
    { title: () => t('blue'), value: n + Color.blue },
    { title: () => t('violet'), value: n + Color.violet },
    { title: () => t('grey'), value: n + Color.grey },
    { title: () => t('white'), value: n + Color.white },
    { title: () => t('gold'), value: n + Color.gold },
    { title: () => t('silver'), value: n + Color.silver }
  ]
}
