import { ComponentProps } from 'react'

import { sprinkles, Sprinkles } from '../../styles/sprinkles.css'

export type BoxProps = {
  fontSize?: Sprinkles['fontSize']

  color?: Sprinkles['color']

  children: React.ReactNode
} & ComponentProps<'div'>

export const Box = (props: BoxProps) => {
  const { fontSize = 'xl', color = 'red-500', children, ...rest } = props

  return (
    <div
      className={sprinkles({
        fontSize: fontSize,
        color: color,
      })}
      {...rest}
    >
      {children}
    </div>
  )
}
