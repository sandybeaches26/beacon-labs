'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';

export default function PitchDeck() {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current && !revealRef.current) {
      revealRef.current = new Reveal(deckRef.current, {
        hash: true,
        transition: 'fade',
        transitionSpeed: 'fast',
        controls: true,
        progress: true,
        center: true,
        width: 1920,
        height: 1080,
      });
      revealRef.current.initialize();
    }

    return () => {
      if (revealRef.current) {
        revealRef.current.destroy();
        revealRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg: #ffffff;
          --text: #000000;
          --text-secondary: #525252;
          --text-tertiary: #a3a3a3;
          --accent: #f2cb4a;
          --border: #e5e5e5;
        }

        .reveal {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg);
        }

        .reveal .slides {
          text-align: left;
        }

        .reveal .slides section {
          padding: 60px 80px;
        }

        .reveal h1 {
          font-size: 4.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text);
          line-height: 1.1;
        }

        .reveal h2 {
          font-size: 3.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text);
          line-height: 1.2;
          margin-bottom: 2rem;
        }

        .reveal h3 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
        }

        .reveal p {
          font-size: 1.5rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .reveal .subtitle {
          font-size: 1.75rem;
          color: var(--text-secondary);
          font-weight: 400;
          margin-top: 1.5rem;
        }

        .reveal .big-number {
          font-size: 5rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1;
        }

        .reveal .stat-label {
          font-size: 1rem;
          color: var(--text-tertiary);
          margin-top: 0.5rem;
        }

        .reveal ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .reveal li {
          font-size: 1.5rem;
          color: var(--text-secondary);
          padding: 1rem 0;
          padding-left: 2rem;
          position: relative;
          border-bottom: 1px solid var(--border);
        }

        .reveal li:last-child {
          border-bottom: none;
        }

        .reveal li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 1.5rem;
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
        }

        .reveal .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .reveal .grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 3rem;
        }

        .reveal .card {
          background: #fafafa;
          border-radius: 12px;
          padding: 2.5rem;
          border: 1px solid var(--border);
        }

        .reveal .highlight {
          color: var(--text);
          font-weight: 600;
        }

        .reveal .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text);
        }

        .reveal .center-slide {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .reveal .flow-step {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin: 1.5rem 0;
        }

        .reveal .flow-number {
          width: 40px;
          height: 40px;
          background: var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
          color: var(--text);
        }

        .reveal .flow-text {
          font-size: 1.35rem;
          color: var(--text-secondary);
          padding-top: 0.4rem;
        }

        .reveal .comparison-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 2rem;
        }

        .reveal .comparison-table th,
        .reveal .comparison-table td {
          padding: 1rem 1.5rem;
          text-align: left;
          border-bottom: 1px solid var(--border);
        }

        .reveal .comparison-table th {
          color: var(--text-tertiary);
          font-weight: 500;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .reveal .comparison-table td {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .reveal .comparison-table .check {
          color: #16a34a;
          font-weight: 600;
        }

        .reveal .comparison-table .x {
          color: var(--text-tertiary);
        }

        .reveal .comparison-table tr:last-child td {
          font-weight: 600;
          color: var(--text);
        }

        .reveal .stat-row {
          display: flex;
          gap: 4rem;
          margin-top: 3rem;
        }

        .reveal .stat-item {
          flex: 1;
        }

        .reveal .divider {
          width: 60px;
          height: 4px;
          background: var(--accent);
          margin: 2rem 0;
        }
      `}</style>

      <div className="reveal" ref={deckRef}>
        <div className="slides">

          {/* Slide 1: Title */}
          <section>
            <div className="center-slide">
              <p className="logo">BEACON</p>
              <h1 style={{ marginTop: '2rem', maxWidth: '900px' }}>The Physical Intelligence Platform</h1>
              <p className="subtitle">Real-time customer feedback at point of experience</p>
            </div>
          </section>

          {/* Slide 2: Problem */}
          <section>
            <h3>Problem</h3>
            <h2>Businesses are blind to what<br />customers actually think</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div>
                <ul>
                  <li><strong>Surveys fail</strong> — 5-15% response rates, only extremes respond</li>
                  <li><strong>Reviews are biased</strong> — 20-30% fake, self-selected, easily gamed</li>
                  <li><strong>Mystery shopping doesn&apos;t scale</strong> — $50-200 per visit</li>
                  <li><strong>Feedback arrives too late</strong> — days or weeks after the experience</li>
                </ul>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <p className="big-number">73%</p>
                <p className="stat-label">of customers leave without<br />telling you why</p>
              </div>
            </div>
          </section>

          {/* Slide 3: Solution */}
          <section>
            <h3>Solution</h3>
            <h2>Video feedback at point of sale</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div>
                <div className="flow-step">
                  <div className="flow-number">1</div>
                  <div className="flow-text">Customer scans QR at checkout</div>
                </div>
                <div className="flow-step">
                  <div className="flow-number">2</div>
                  <div className="flow-text">Records 30-60 second video feedback</div>
                </div>
                <div className="flow-step">
                  <div className="flow-number">3</div>
                  <div className="flow-text">AI transcribes and enriches with demographics</div>
                </div>
                <div className="flow-step">
                  <div className="flow-number">4</div>
                  <div className="flow-text">Business receives actionable insights in real-time</div>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '1rem', color: '#a3a3a3', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Why video?</p>
                <ul>
                  <li>Captures emotion, tone, and context</li>
                  <li>Harder to fake than text reviews</li>
                  <li>More authentic than checkbox surveys</li>
                  <li>Reveals the &quot;why&quot; behind the rating</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Slide 4: Why Now */}
          <section>
            <h3>Why Now</h3>
            <h2>Two converging trends</h2>
            <div className="grid-2" style={{ marginTop: '4rem' }}>
              <div className="card">
                <p className="big-number" style={{ fontSize: '3rem' }}>AI</p>
                <div className="divider"></div>
                <p>Video transcription and sentiment analysis is now instant and cheap</p>
              </div>
              <div className="card">
                <p className="big-number" style={{ fontSize: '3rem' }}>Trust</p>
                <div className="divider"></div>
                <p>Fake reviews are eroding trust — FTC now fining $51K per violation</p>
              </div>
            </div>
          </section>

          {/* Slide 5: Market */}
          <section>
            <h3>Market</h3>
            <h2>A massive, fragmented opportunity</h2>
            <div className="stat-row">
              <div className="stat-item">
                <p className="big-number">$20B+</p>
                <p className="stat-label">Customer experience &<br />reputation software</p>
              </div>
              <div className="stat-item">
                <p className="big-number">$2B</p>
                <p className="stat-label">Mystery shopping<br />(ripe for disruption)</p>
              </div>
              <div className="stat-item">
                <p className="big-number">$1.4B</p>
                <p className="stat-label">Yelp revenue alone<br />(review monetization)</p>
              </div>
            </div>
            <p style={{ marginTop: '4rem' }}>
              Initial focus: <span className="highlight">Gyms, restaurants, retail</span> — high churn, high feedback value
            </p>
          </section>

          {/* Slide 6: Competition */}
          <section>
            <h3>Landscape</h3>
            <h2>Beacon sits at the intersection</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Real-time</th>
                  <th>Video</th>
                  <th>Point of Sale</th>
                  <th>Consumer Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Yelp / Google</td>
                  <td className="x">—</td>
                  <td className="x">—</td>
                  <td className="x">—</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td>Medallia / Qualtrics</td>
                  <td className="x">—</td>
                  <td className="x">—</td>
                  <td className="x">—</td>
                  <td className="x">—</td>
                </tr>
                <tr>
                  <td>Listen Labs</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="x">—</td>
                  <td className="x">—</td>
                </tr>
                <tr>
                  <td>Tattle</td>
                  <td className="check">✓</td>
                  <td className="x">—</td>
                  <td className="check">✓</td>
                  <td className="x">—</td>
                </tr>
                <tr>
                  <td>Beacon</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Slide 7: Product */}
          <section>
            <h3>Product</h3>
            <h2>From feedback to insight in minutes</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div>
                <p style={{ fontSize: '1rem', color: '#a3a3a3', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>For Businesses</p>
                <ul>
                  <li>Real-time dashboard of customer sentiment</li>
                  <li>AI-generated insight reports</li>
                  <li>Location and shift-level breakdowns</li>
                  <li>Alerts for emerging issues</li>
                </ul>
              </div>
              <div>
                <p style={{ fontSize: '1rem', color: '#a3a3a3', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>For Customers</p>
                <ul>
                  <li>30-second video feedback</li>
                  <li>Dynamic AI follow-up questions</li>
                  <li>Rewards for participation</li>
                  <li>See their impact on improvements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Slide 8: Business Model */}
          <section>
            <h3>Business Model</h3>
            <h2>SaaS + data flywheel</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div className="card">
                <p style={{ fontSize: '1rem', color: '#a3a3a3', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phase 1</p>
                <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#000', marginBottom: '1rem' }}>SaaS</p>
                <p>Per-location subscription for feedback collection and insights</p>
                <p style={{ marginTop: '1.5rem', fontWeight: '600', color: '#000' }}>$200-500/location/month</p>
              </div>
              <div className="card">
                <p style={{ fontSize: '1rem', color: '#a3a3a3', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phase 2</p>
                <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#000', marginBottom: '1rem' }}>Data</p>
                <p>Aggregated sentiment indices, benchmarking, consumer platform</p>
                <p style={{ marginTop: '1.5rem', fontWeight: '600', color: '#000' }}>Data licensing + marketplace</p>
              </div>
            </div>
            <p style={{ marginTop: '3rem' }}>
              Every customer interaction builds our data moat — the more locations, the more valuable the network.
            </p>
          </section>

          {/* Slide 9: Vision */}
          <section>
            <h3>Vision</h3>
            <h2>The new standard for physical<br />business intelligence</h2>
            <div style={{ marginTop: '3rem' }}>
              <div className="flow-step">
                <div className="flow-number">→</div>
                <div className="flow-text"><strong>Tight feedback loops:</strong> Create unbiased, real-time feedback loops for businesses</div>
              </div>
              <div className="flow-step">
                <div className="flow-number">→</div>
                <div className="flow-text"><strong>Disrupt reviews:</strong> Replace biased Yelp ratings with verified, video-based trust scores</div>
              </div>
              <div className="flow-step">
                <div className="flow-number">→</div>
                <div className="flow-text"><strong>Sentiment indices:</strong> Real-time consumer confidence for retail, hospitality, fitness</div>
              </div>
            </div>
          </section>

          {/* Slide 10: Ask */}
          <section>
            <div className="center-slide">
              <h3>The Ask</h3>
              <h2>Raising seed to prove the model</h2>
              <div className="stat-row" style={{ marginTop: '4rem', justifyContent: 'center', gap: '6rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <p className="big-number" style={{ fontSize: '4rem' }}>$2M</p>
                  <p className="stat-label">Seed round</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p className="big-number" style={{ fontSize: '4rem' }}>50</p>
                  <p className="stat-label">Pilot locations</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p className="big-number" style={{ fontSize: '4rem' }}>18mo</p>
                  <p className="stat-label">To Series A</p>
                </div>
              </div>
              <p style={{ marginTop: '4rem' }}>
                Use of funds: Product (40%) · GTM (35%) · Operations (25%)
              </p>
            </div>
          </section>

          {/* Slide 11: Close */}
          <section>
            <div className="center-slide">
              <p className="logo">BEACON</p>
              <h2 style={{ marginTop: '2rem' }}>The next generation sentiment layer.</h2>
              <p style={{ marginTop: '3rem', color: '#a3a3a3' }}>
                contact@beaconlabs.ai
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
