import { ReactNode } from 'react'
import classes from './Bottom.module.css'

const Bottom = ({ children }: { children?: ReactNode }) => {
  return <div className={classes.bottom}>{children}</div>
}

export default Bottom
