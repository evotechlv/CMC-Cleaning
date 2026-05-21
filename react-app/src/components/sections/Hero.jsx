import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/uploads/office-cleaning-disinfecting.jpg"
        >
          <source src="/uploads/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.mark}>
          C<em>&amp;</em>M <em>Clean</em>
        </h1>
        <div className={styles.tagline}>Where care meets craft.</div>
      </div>
      <div className={styles.scroll}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
