import { ComponentProps } from 'react'

export type ButtonProps = {
  children: React.ReactNode
} & ComponentProps<'button'>

export const Button = (props: ButtonProps) => {
  const { type = 'button', children, ...rest } = props

  return (
    <button type={type} {...rest}>
      {children}
    </button>
  )
}
