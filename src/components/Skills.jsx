import { skillGroups } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h">
      <h2 className="badge b-gold" id="skills-h">Skills</h2>
      {skillGroups.map((g) => (
        <div className="skillgroup" key={g.title}>
          <h3>{g.title}</h3>
          <ul className={`tapes ${g.cls}`}>
            {g.items.map((s) => <li key={s}><span>{s}</span></li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}
