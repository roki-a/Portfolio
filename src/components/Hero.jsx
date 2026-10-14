import { GITHUB } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="patch-wrap pop" style={{ '--i': 0 }}>
        <svg className="star" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <path
            d="M200 14 L248 140 L388 148 L280 232 L318 372 L200 296 L84 376 L122 236 L10 150 L150 140 Z"
            stroke="#F0C030"
            strokeWidth="9"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity=".9"
          />
        </svg>
        <figure className="polaroid" style={{ margin: 0 }}>
          <span className="pin" aria-hidden="true"></span>
          <img className="photo" src="assets/me.jpg" alt="Photo of Shane Mendoza" />
          <figcaption>Hi there!</figcaption>
        </figure>
      </div>

      <div>
        <h1 id="hero-title">
          <span className="hi pop" style={{ '--i': 1 }}>Hi, I'm</span>
          <span className="nm first pop" style={{ '--i': 2 }}>Shane</span>
          <span className="nm last pop" style={{ '--i': 3 }}>Mendoza</span>
        </h1>
        <p className="lede pop" style={{ '--i': 4 }}>
          I'm a <b>Computer Science student</b> at Holy Angel University. I build things across{' '}
          <b>AI/ML, data analytics and UI/UX design</b>, from a rice leaf disease classifier to Figma
          prototypes for a community service app. I'm looking for an internship where I can learn from
          real work and ship with a team.
        </p>
        <div className="cta pop" style={{ '--i': 5 }}>
          <a className="btn" href="#projects">See my projects</a>
          <a className="btn alt" href={GITHUB} target="_blank" rel="noopener noreferrer">Open my GitHub</a>
        </div>
      </div>
    </section>
  )
}
