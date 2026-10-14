import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h">
      <h2 className="badge b-gold" id="exp-h">Leadership experience</h2>
      <div className="sticky">
        {experience.map((r) => (
          <div className="role" key={r.title}>
            <h3>{r.title}</h3>
            <span className="when">{r.when}</span>
            <p className="org">{r.org}</p>
            <p>{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
