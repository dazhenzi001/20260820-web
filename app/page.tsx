"use client";

import { FormEvent, useState } from "react";

const heroModes = [
  {
    label: "EMBER",
    image: "/products/hero-duo.png",
    alt: "Two compact Toneform audio players in ember and graphite finishes",
    className: "mode-ember",
  },
  {
    label: "BONE",
    image: "/products/white-cassette.png",
    alt: "White Toneform cassette player with transparent mechanism",
    className: "mode-bone",
  },
  {
    label: "VOID",
    image: "/products/dark-cassette.png",
    alt: "Dark blue Toneform cassette player with orange controls",
    className: "mode-void",
  },
];

const products = [
  {
    code: "TF–01",
    name: "ARCHIVE PLAYER",
    note: "Magnetic playback / precision dial",
    image: "/products/white-cassette.png",
    tone: "light",
  },
  {
    code: "TF–02",
    name: "FIELD RADIO",
    note: "Wide-band reception / portable power",
    image: "/products/field-radio.png",
    tone: "field",
  },
  {
    code: "TF–03",
    name: "NIGHT DECK",
    note: "Low-light controls / anodized shell",
    image: "/products/dark-cassette.png",
    tone: "dark",
  },
  {
    code: "TF–04",
    name: "SIGNAL ONE",
    note: "Direct tuning / mono acoustic chamber",
    image: "/products/white-radio.png",
    tone: "light",
  },
];

export default function Home() {
  const [heroMode, setHeroMode] = useState(0);
  const [joined, setJoined] = useState(false);

  function handleJoin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
  }

  const activeMode = heroModes[heroMode];

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Toneform home">
          TONEFORM<span>®</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#objects">Objects</a>
          <a href="#system">System</a>
          <a href="#journal">Journal</a>
        </nav>
        <a className="header-cta" href="#access">
          Early access <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section id="top" className={`hero ${activeMode.className}`}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Objects for listening</p>
          <h1>
            SOUND<br />
            <em>IN</em> HAND.
          </h1>
          <p className="hero-intro">
            Physical music objects for people who still believe listening
            should have weight, texture and a beginning.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#objects">
              Explore the series <span aria-hidden="true">↓</span>
            </a>
            <span className="edition">Archive Series / 01—09</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true" />
          <img key={activeMode.image} src={activeMode.image} alt={activeMode.alt} />
          <div className="visual-meta">
            <span>FORM / {activeMode.label}</span>
            <span>360° OBJECT STUDY</span>
          </div>
        </div>

        <div className="mode-switcher" aria-label="Change featured finish">
          <span>FINISH</span>
          <div role="group" aria-label="Finish options">
            {heroModes.map((mode, index) => (
              <button
                type="button"
                key={mode.label}
                className={heroMode === index ? "active" : ""}
                aria-pressed={heroMode === index}
                onClick={() => setHeroMode(index)}
              >
                <i aria-hidden="true" /> {mode.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="signal-strip" aria-label="Toneform product principles">
        <span>ANALOG SOUL</span><b>•</b><span>DIGITAL PRECISION</span><b>•</b>
        <span>TACTILE BY DESIGN</span><b>•</b><span>BUILT TO BE KEPT</span>
      </div>

      <section className="manifesto section-shell">
        <p className="section-index">[ 01 — INTENT ]</p>
        <div className="manifesto-copy">
          <p className="kicker">A small rebellion against invisible sound.</p>
          <h2>We put the ritual<br />back into listening.</h2>
          <div className="manifesto-body">
            <p>
              Streaming made everything available. It also made music disappear.
              Toneform brings it back into the room through controls you can feel,
              mechanisms you can see, and materials that age honestly.
            </p>
            <a href="#system">Our design system <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section id="objects" className="objects section-shell">
        <div className="section-heading">
          <p className="section-index">[ 02 — THE OBJECTS ]</p>
          <h2>Choose your<br />way back in.</h2>
          <p>Four instruments. One shared language of direct, deliberate control.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card ${product.tone}`} key={product.code}>
              <div className="card-topline">
                <span>{product.code}</span>
                <span>0{index + 1} / 04</span>
              </div>
              <img src={product.image} alt={`${product.name} product view`} />
              <div className="card-copy">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.note}</p>
                </div>
                <a href="#access" aria-label={`Register interest in ${product.name}`}>↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="system" className="system-section">
        <div className="system-visual">
          <img src="/products/black-player.png" alt="Black modular player shown from the rear" />
          <span className="callout callout-one"><i /> CNC ALUMINIUM</span>
          <span className="callout callout-two"><i /> SERVICEABLE CORE</span>
          <span className="callout callout-three"><i /> MAGNETIC I/O</span>
        </div>
        <div className="system-copy">
          <p className="section-index">[ 03 — THE SYSTEM ]</p>
          <h2>Nothing hidden.<br />Nothing wasted.</h2>
          <p>
            Every Toneform object is assembled around a serviceable core.
            Fasteners remain visible. Controls say what they do. Parts can be
            repaired, replaced and passed on.
          </p>
          <dl>
            <div><dt>01</dt><dd><strong>Machined shell</strong><span>Recycled 6061 aluminium</span></dd></div>
            <div><dt>02</dt><dd><strong>Physical memory</strong><span>Controls retain their last state</span></dd></div>
            <div><dt>03</dt><dd><strong>Open architecture</strong><span>Replaceable battery and I/O</span></dd></div>
          </dl>
        </div>
      </section>

      <section id="journal" className="details section-shell">
        <div className="section-heading compact">
          <p className="section-index">[ 04 — DETAILS ]</p>
          <h2>Designed from<br />the fingertip out.</h2>
        </div>
        <div className="detail-gallery">
          <figure className="detail-wide">
            <img src="/products/silver-deck.png" alt="Silver sound deck with yellow controls" />
            <figcaption><span>01</span> Tactile hierarchy</figcaption>
          </figure>
          <figure className="detail-tall">
            <img src="/products/display-player.png" alt="Handheld player with color display" />
            <figcaption><span>02</span> Information at a glance</figcaption>
          </figure>
          <figure className="detail-steel">
            <img src="/products/steel-player.png" alt="Front and back views of a steel music player" />
            <figcaption><span>03</span> Honest assembly</figcaption>
          </figure>
        </div>
      </section>

      <section className="quote-section">
        <p>“THE BEST INTERFACE<br />IS THE ONE YOUR HAND<br />REMEMBERS.”</p>
        <div>
          <span>TONEFORM DESIGN NOTE 004</span>
          <span>SHENZHEN / 2026</span>
        </div>
      </section>

      <section id="access" className="access-section">
        <div className="access-image">
          <img src="/products/hero-duo.png" alt="Toneform Archive players in two finishes" />
        </div>
        <div className="access-copy">
          <p className="section-index">[ FIRST PRODUCTION RUN ]</p>
          <h2>Hear what’s<br />coming.</h2>
          <p>
            Join the list for prototypes, field notes and priority access to
            Archive Series 01. No noise. Only signal.
          </p>
          {joined ? (
            <div className="success-message" role="status">
              <span aria-hidden="true">●</span> SIGNAL RECEIVED — WELCOME TO TONEFORM.
            </div>
          ) : (
            <form onSubmit={handleJoin}>
              <label htmlFor="email">Email address</label>
              <div>
                <input id="email" type="email" placeholder="you@example.com" required />
                <button type="submit">Join the list <span aria-hidden="true">→</span></button>
              </div>
              <small>By joining, you agree to receive occasional product updates.</small>
            </form>
          )}
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">TONEFORM<span>®</span></a>
        <div className="footer-links">
          <a href="#objects">Objects</a><a href="#system">System</a><a href="#journal">Journal</a>
        </div>
        <div className="footer-meta">
          <span>© 2026 TONEFORM INDUSTRIAL</span>
          <span>MADE FOR ATTENTIVE LISTENING</span>
        </div>
      </footer>
    </main>
  );
}
