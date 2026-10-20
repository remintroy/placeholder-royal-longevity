import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Crown({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="m12 21 11 10L32 13l9 18 11-10-6 24H18Z" />
      <path d="M20 52h24" />
      <circle cx="12" cy="18" r="2" /><circle cx="32" cy="10" r="2" /><circle cx="52" cy="18" r="2" />
    </svg>
  );
}

function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="/" aria-label="Royal Longevity home">
          <Crown className="brand-crown" />
          <span>ROYAL<span className="brand-second">LONGEVITY</span></span>
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
        <div className="bottom-mark" aria-hidden="true"><span /><Crown /><span /></div>
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
