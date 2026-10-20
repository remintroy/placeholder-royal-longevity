import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="/" aria-label="Royal Longevity home">
          <img className="brand-icon" src="/icon-gold.png" alt="" width="56" height="56" />
          <img className="brand-wordmark" src="/text-english-white.svg" alt="Royal Longevity" width="260" height="18" />
        </a>
        <span className="header-note">A LIFE WELL LIVED.</span>
      </header>

      <main>
        <div className="orbital-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="orbit orbit-three" /><div className="orb" />
        </div>
        <section className="hero" aria-labelledby="headline">
          <div className="status"><span /> SOMETHING EXTRAORDINARY IS TAKING SHAPE</div>
          <h1 id="headline">More life.<br /><em>More possibility.</em></h1>
          <p className="intro">A new chapter in living well.<br />Thoughtfully crafted. Worth the wait.</p>
          <div className="coming-soon"><span className="line" /><h2>Coming soon</h2><span className="line" /></div>
          <p className="invitation">We look forward to welcoming you.</p>
        </section>
        <div className="bottom-mark" aria-hidden="true"><span /><img src="/icon-gold.png" alt="" width="32" height="32" /><span /></div>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Royal Longevity</span>
        <span className="footer-motto">THE ART OF LIVING WELL</span>
        <span>All rights reserved.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
