import React from 'react'
import s from './index.module.scss'

interface IProps {
  children: React.ReactNode
}

const PageLayout: React.FC<IProps> = (props) => {
  const { children } = props

  return (
    <main className={s.contentWrap}>
      <header className={s.header}>
        <input className={s.searchInput} placeholder='Search...' />
        <div className={s.currentUser}>
          <span>Eddie Lobanovskiy</span>
        </div>
      </header>
      <div>{children}</div>
    </main>
  )
}

export default PageLayout
