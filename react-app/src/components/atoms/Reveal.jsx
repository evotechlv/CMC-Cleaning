/**
 * Reveal — wraps children in an element that fades up when scrolled into view.
 * Relies on the global `.sr` / `.sr.vis` styles + useReveal IntersectionObserver.
 *
 * Props:
 *   as: element tag (default 'div')
 *   delay: 1..6, maps to .d1..d6 class for staggered animations
 *   className: extra classes
 */
export default function Reveal({
  as: Tag = 'div',
  delay,
  className = '',
  children,
  ...rest
}) {
  const delayClass = delay ? ` d${delay}` : ''
  const classes = `sr${delayClass}${className ? ' ' + className : ''}`
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}
