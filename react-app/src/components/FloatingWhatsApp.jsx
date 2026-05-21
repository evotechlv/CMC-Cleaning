import WhatsAppIcon from './atoms/WhatsAppIcon.jsx'
import styles from './FloatingWhatsApp.module.css'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/17027822493"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fwa}
      aria-label="WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  )
}
