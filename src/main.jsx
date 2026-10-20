import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="/" aria-label="Royal Longevity home">
          <img src="/text-english-white.svg" alt="Royal Longevity" width="260" height="18" />
        </a>
        <span className="edition">A NEW CHAPTER</span>
      </header>

      <main>
        <section className="intro" aria-labelledby="headline">
          <p className="eyebrow">ROYAL LONGEVITY · COMING SOON</p>
          <h1 id="headline">Good things<br />take time<span>.</span></h1>
          <div className="message">
            <span className="rule" aria-hidden="true" />
            <p>We’re taking a little time<br />to create something lasting.</p>
          </div>
        </section>
        <div className="emblem">
          <img src="/icon-gold.png" alt="" width="500" height="500" />
        </div>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Royal Longevity</span>
        <span className="footer-note">In good time.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
