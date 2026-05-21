import { useState } from 'react'
import useNavScroll from '../../hooks/useNavScroll.js'
import MobileMenu from './MobileMenu.jsx'
import styles from './Nav.module.css'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#areas', label: 'Areas' },
  { href: '#reviews', label: 'Reviews' },
]

export default function Nav() {
  const solid = useNavScroll(80)
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={`${styles.nav}${solid ? ' ' + styles.solid : ''}`}>
        <a className={styles.logo} href="#">
          <img src="/uploads/logo-1776886719067.png" alt="C&M" />
          <div>
            <div className={styles.brand}>
              C&amp;M <em>Clean</em>
            </div>
            <div className={styles.brandSub}>Est. Las Vegas · NV</div>
          </div>
        </a>

        <div className={styles.links}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#contact" className={styles.cta}>
            Get a Quote <span>→</span>
          </a>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setOpen(true)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  )
}
