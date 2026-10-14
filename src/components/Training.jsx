import { certGroups, seminars } from '../data/content.js'

export default function Training() {
  return (
    <section id="training" aria-labelledby="train-h">
      <h2 className="badge b-navy" id="train-h">Certifications &amp; training</h2>
      <div className="hl">
        <div className="medal" aria-hidden="true">2nd</div>
        <p>
          <b>2nd place, Hackathon of the Base Build IRL Workshop 2026</b>
          Placed second in the hackathon portion of the workshop.
        </p>
      </div>
      <div className="certs">
        {certGroups.map((g) => (
          <div className="cert" key={g.title}>
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="sem">
        <h3>Seminars &amp; conferences</h3>
        <ul>
          {seminars.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </section>
  )
}
