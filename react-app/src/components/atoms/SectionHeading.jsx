import styles from './SectionHeading.module.css'

/**
 * Large serif section heading. Accepts a "tone" prop to pick a size preset.
 *   - "section" (default) — used by Services, Process, Reviews, Contact
 *   - "areas" — same scale but white text on dark
 *   - "big" — for the page-spanning statement
 *   - "final" — even bigger, for the closing CTA
 */
export default function SectionHeading({
  tone = 'section',
  as: Tag = 'h2',
  className = '',
  children,
}) {
  const cls = `${styles.heading} ${styles[tone] || ''}${className ? ' ' + className : ''}`
  return <Tag className={cls}>{children}</Tag>
}
