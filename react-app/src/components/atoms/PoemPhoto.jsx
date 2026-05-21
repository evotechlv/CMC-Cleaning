import styles from './PoemPhoto.module.css'

/**
 * Container for one of the editorial-style photos in the "poem" sections.
 * Applies the hover zoom and accepts an extra className so the parent grid
 * can position it (e.g., styles.p1, styles.p2).
 */
export default function PoemPhoto({ src, alt, className = '' }) {
  return (
    <div className={`${styles.poemPhoto}${className ? ' ' + className : ''}`}>
      <img src={src} alt={alt} />
    </div>
  )
}
