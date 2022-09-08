import React, { ButtonHTMLAttributes, ReactElement } from 'react'

import { Icon } from 'components/Icon/Icon'

import style from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  selected: boolean
}

export const Button = ({ title, iconName, selected, ...rest }: ButtonProps): ReactElement => {
  return (
    <button type="button" {...(selected && { className: style.selected })} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  )
}
