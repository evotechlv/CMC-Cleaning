import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandRow}>
              <img src="/uploads/logo-1776886719067.png" alt="C&M" />
              <div className={styles.brandName}>
                C&amp;M <em>Clean</em> Service
              </div>
            </div>
            <p>Where care meets craft. Premium cleaning across Las Vegas and Nevada.</p>
          </div>

          <div className={styles.col}>
            <h4>Services</h4>
            <a href="#services">House Cleaning</a>
            <a href="#services">Commercial</a>
            <a href="#services">Deep Cleaning</a>
            <a href="#services">Move-In / Out</a>
            <a href="#services">Airbnb Turnover</a>
            <a href="#services">Post-Construction</a>
          </div>

          <div className={styles.col}>
            <h4>Company</h4>
            <a href="#process">Process</a>
            <a href="#areas">Service Areas</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.col}>
            <h4>Reach Us</h4>
            <a href="tel:+17027822493">(702) 782-2493</a>
            <a
              href="https://wa.me/17027822493"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <p>Mon – Sat · 7am – 5pm</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 C&amp;M Clean Service · All rights reserved</p>
          <div className={styles.links}>
            <a href="#hero">Back to Top</a>
            <a href="#contact">Get a Quote</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
