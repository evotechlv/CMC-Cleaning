import styles from './PoemText.module.css'

/** The serif-italic editorial text block used across the poetic sections. */
export default function PoemText({ as: Tag = 'p', className = '', children }) {
  return (
    <Tag className={`${styles.poemText}${className ? ' ' + className : ''}`}>
      {children}
    </Tag>
  )
}
