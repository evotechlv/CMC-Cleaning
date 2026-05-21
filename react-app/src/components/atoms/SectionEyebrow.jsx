import styles from './SectionEyebrow.module.css'

/** Small uppercase label that sits above section titles. */
export default function SectionEyebrow({ children, className = '' }) {
  return (
    <div className={`${styles.eyebrow}${className ? ' ' + className : ''}`}>
      {children}
    </div>
  )
}
