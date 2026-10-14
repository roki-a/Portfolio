import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/content.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const btnRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        btnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav${open ? ' open' : ''}`}>
      <div className="wrap">
        <a className="mark" href="#top" aria-label="Shane Mendoza, back to top">SM</a>
        <button
          ref={btnRef}
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav aria-label="Sections">
          <ul id="menu">
            {navLinks.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
