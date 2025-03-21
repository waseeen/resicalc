import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Toggle from './components/UI/Toggle/Toggle'
import { ToggleOption } from './types/ToggleOption'
import Bottom from './components/UI/Bottom/Bottom'
import Resistor from './components/Resistor/Resistor'
import { ResistorColor, Visibilty } from './types/ResistorColor'
import { Color } from './types/Color'
import { Lang } from './types/Lang'
import Calculator from './components/Calculator/Calculator'
import StripesSelector from './components/StripesSelector/StripesSelector'
import { StripesValues } from './types/StripesValues'
import ColorSelector from './components/ColorSelector/ColorSelector'
import { useColorOptions } from './hooks/useColorOptions'
import Wrapper from './components/UI/Wrapper/Wrapper'

function App() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState((localStorage.getItem('lang') as Lang) ?? Lang.ru)
  const [stripes, setStripes] = useState('6' as StripesValues)
  const defaultResistorLines: ResistorColor[] = [
    {
      color: Color.brown,
      visible: Visibilty.visible,
      options: useColorOptions('0', 'less')
    },
    {
      color: Color.black,
      visible: Visibilty.visible,
      options: useColorOptions('1', 'less')
    },
    {
      color: Color.orange,
      visible: Visibilty.visible,
      options: useColorOptions('2', 'less')
    },
    {
      color: Color.red,
      visible: Visibilty.visible,
      options: useColorOptions('3')
    },
    {
      color: Color.gold,
      visible: Visibilty.visible,
      options: useColorOptions('4')
    },
    {
      color: Color.brown,
      visible: Visibilty.visible,
      options: useColorOptions('5')
    }
  ]
  const [resistorLines, setResistorLines] = useState(defaultResistorLines)
  const switchLang = (l: Lang) => {
    setLang(l)
    localStorage.setItem('lang', l)
    i18n.changeLanguage(l)
  }

  const switchStripes = (s: StripesValues) => {
    setStripes(s)
    switch (s) {
      case '3':
        setResistorLines([
          resistorLines[0],
          resistorLines[1],
          { ...resistorLines[2], visible: Visibilty.hidden },
          resistorLines[3],
          { ...resistorLines[4], visible: Visibilty.hidden },
          { ...resistorLines[5], visible: Visibilty.hidden }
        ])
        break
      case '4':
        setResistorLines([
          resistorLines[0],
          resistorLines[1],
          { ...resistorLines[2], visible: Visibilty.hidden },
          resistorLines[3],
          { ...resistorLines[4], visible: Visibilty.hidden },
          { ...resistorLines[5], visible: Visibilty.visible }
        ])
        break
      case '5':
        setResistorLines([
          resistorLines[0],
          resistorLines[1],
          { ...resistorLines[2], visible: Visibilty.visible },
          resistorLines[3],
          { ...resistorLines[4], visible: Visibilty.hidden },
          { ...resistorLines[5], visible: Visibilty.visible }
        ])
        break
      case '6':
        setResistorLines([
          resistorLines[0],
          resistorLines[1],
          { ...resistorLines[2], visible: Visibilty.visible },
          resistorLines[3],
          { ...resistorLines[4], visible: Visibilty.visible },
          { ...resistorLines[5], visible: Visibilty.visible }
        ])
    }
  }
  const changeColor = (c: string) => {
    setResistorLines(replace(resistorLines, c))
  }
  const replace = (resistorLines: ResistorColor[], v: string): ResistorColor[] => {
    let list = [...resistorLines]
    list.splice(Number(v.slice(0, 1)), 1, {
      ...resistorLines[Number(v.slice(0, 1))],
      color: v.slice(1) as Color
    })
    return list
  }

  const langOptions: ToggleOption[] = [
    {
      value: Lang.ru,
      title: t('ru')
    },
    {
      value: Lang.en,
      title: t('en')
    }
  ]

  return (
    <Wrapper>
      <StripesSelector currentStripes={stripes} valueChange={switchStripes} />
      <Resistor resistorColors={resistorLines} />
      <ColorSelector resistorColors={resistorLines} colorChange={changeColor} />
      <Bottom>
        <Calculator lines={resistorLines} stripes={stripes} />
        <Toggle
          options={langOptions}
          valueChange={switchLang}
          toggleName="lang"
          defaultValue={lang}
        />
      </Bottom>
      <Bottom>
        <span>
          ©2024 <a href="https://github.com/waseeen">waseeen</a>
        </span>
      </Bottom>
    </Wrapper>
  )
}

export default App
