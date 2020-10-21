import React from 'react'
import cn from 'classnames'
import s from './index.module.scss'

interface IProps {
  active: boolean
  field: string
  label: string
  onClick: (field: string) => void
}

const SortOption: React.FC<IProps> = ({ active, field, label, onClick }) => {
  const handleClick = () => onClick(field)

  return (
    <button
      className={cn(s.sortOption, { [s.active]: active })}
      type='button'
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default SortOption
