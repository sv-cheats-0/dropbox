import React from 'react'
import s from './index.module.scss'
import Navigation from './Navigation'
import MemoryUsed from './MemoryUsed'

const Sidebar: React.FC = () => {
  return (
    <aside className={s.sidebar}>
      <div className={s.logoWrap}>
        <a className={s.logo} href='/'>
          <img className={s.logoImg} src='https://via.placeholder.com/150' alt='logo' />
        </a>
      </div>
      <Navigation />
      <MemoryUsed />
      <button type='button' className={s.upgradeButton}>
        Upgrade account
      </button>
    </aside>
  )
}

export default Sidebar
