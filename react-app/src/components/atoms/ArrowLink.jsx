import styles from './ArrowLink.module.css'

/**
 * Underlined "→" CTA used in several places (areas, final CTA, contact).
 * The "tone" prop swaps colors for light vs. dark backgrounds.
 *
 * Props:
 *   href: link target
 *   tone: 'ink' (default) | 'light' (for the dark Areas section)
 *   external: opens in a new tab
 *   icon: custom node placed before the label (e.g., WhatsApp svg)
 */
export default function ArrowLink({
  href,
  tone = 'ink',
  external = false,
  icon,
  className = '',
  children,
}) {
  const cls = `${styles.link} ${styles[tone] || ''}${className ? ' ' + className : ''}`
  const extraProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a href={href} className={cls} {...extraProps}>
      {icon}
      {children}
      <span aria-hidden="true">→</span>
    </a>
  )
}
