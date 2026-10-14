import { education } from '../data/content.js'

export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-h">
      <h2 className="badge b-red" id="edu-h">Education</h2>
      <div className="edu">
        {education.map((r) => (
          <div className="role" key={r.title}>
            <h3>{r.title}</h3>
            <span className="when">{r.when}</span>
            <p className="org">{r.org}</p>
            {r.body && <p>{r.body}</p>}
          </div>
        ))}
        <p className="award"><b>Award:</b> Consistent Honor Student, 2017 to 2023.</p>
      </div>
    </section>
  )
}
