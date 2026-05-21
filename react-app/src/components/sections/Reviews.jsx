import Reveal from '../atoms/Reveal.jsx'
import SectionEyebrow from '../atoms/SectionEyebrow.jsx'
import SectionHeading from '../atoms/SectionHeading.jsx'
import ReviewCard from './ReviewCard.jsx'
import styles from './Reviews.module.css'

const reviews = [
  {
    text:
      "After our renovation I didn't think the place would ever look clean again. C&M came in and it looked absolutely brand new.",
    name: 'Maria G.',
    location: 'Henderson, NV',
    initial: 'M',
    avatarGradient: 'linear-gradient(135deg,#0a8a96,#076670)',
  },
  {
    text:
      'I use them for my Airbnb and every guest comments on how spotless it is. Turnaround is fast — always professional.',
    name: 'James R.',
    location: 'Las Vegas, NV',
    initial: 'J',
    avatarGradient: 'linear-gradient(135deg,#5a7a3f,#3d5a25)',
    delay: 2,
  },
  {
    text:
      'Move-out cleaning was perfect — got my full deposit back. They went above and beyond: oven, behind the fridge, everything.',
    name: 'Sarah T.',
    location: 'Summerlin, NV',
    initial: 'S',
    avatarGradient: 'linear-gradient(135deg,#a8865c,#7a5c3a)',
    delay: 4,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className={styles.head}>
        <Reveal>
          <SectionEyebrow>Testimonials</SectionEyebrow>
        </Reveal>
        <Reveal delay={1}>
          <SectionHeading>
            Loved across<br />
            the <em>valley.</em>
          </SectionHeading>
        </Reveal>
        <Reveal className={styles.stars} delay={2}>
          ★ ★ ★ ★ ★
        </Reveal>
        <Reveal className={styles.rating} delay={3}>
          <em>5.0</em> based on local reviews
        </Reveal>
      </div>

      <div className={styles.grid}>
        {reviews.map((r) => (
          <ReviewCard key={r.name} {...r} />
        ))}
      </div>
    </section>
  )
}
