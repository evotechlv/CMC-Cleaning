import { useEffect } from 'react'
import styles from './MobileMenu.module.css'

export default function MobileMenu({ open, onClose, links }) {
  // Lock body scroll while the menu is open.
  useEffect(() => {
    if (open) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  return (
    <div className={`${styles.menu}${open ? ' ' + styles.open : ''}`}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close menu">
        ✕
      </button>
      {links.map((l) => (
        <a key={l.href} href={l.href} onClick={onClose}>
          {l.label}
        </a>
      ))}
      <a href="#contact" onClick={onClose}>
        Get a Quote
      </a>
    </div>
  )
}
