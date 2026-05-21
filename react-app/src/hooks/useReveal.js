import { useEffect } from 'react'

/**
 * Observes any element with class "sr" and adds "vis" when it enters
 * the viewport. Mirrors the original IntersectionObserver behavior.
 * Re-runs on demand by changing `deps`.
 */
export default function useReveal(deps = []) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('vis')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.sr:not(.vis)').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
