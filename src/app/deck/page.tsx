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
        :root {
          --r-background-color: #0a0a0a;
          --r-main-color: #fafafa;
          --r-heading-color: #fafafa;
          --r-link-color: #60a5fa;
          --accent: #3b82f6;
        }

        .reveal {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .reveal .slides {
          text-align: left;
        }

        .reveal h1 {
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .reveal h2 {
          font-size: 3rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
          color: var(--r-heading-color);
        }

        .reveal h3 {
          font-size: 1.75rem;
          font-weight: 500;
          color: #a1a1aa;
          margin-bottom: 1rem;
        }

        .reveal p {
          font-size: 1.5rem;
          line-height: 1.6;
          color: #d4d4d8;
        }

        .reveal .subtitle {
          font-size: 1.75rem;
          color: #a1a1aa;
          font-weight: 400;
        }

        .reveal .big-number {
          font-size: 6rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
        }

        .reveal .stat-label {
          font-size: 1.25rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .reveal ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .reveal li {
          font-size: 1.5rem;
          color: #d4d4d8;
          padding: 0.75rem 0;
          padding-left: 2rem;
          position: relative;
        }

        .reveal li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 1.25rem;
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
          background: #18181b;
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid #27272a;
        }

        .reveal .highlight {
          color: var(--accent);
        }

        .reveal .dim {
          color: #71717a;
        }

        .reveal .logo {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .reveal .center-slide {
          text-align: center;
        }

        .reveal .center-slide h2 {
          margin-bottom: 3rem;
        }

        .reveal .quote {
          font-size: 2rem;
          font-style: italic;
          color: #a1a1aa;
          border-left: 4px solid var(--accent);
          padding-left: 2rem;
          margin: 2rem 0;
        }

        .reveal .flow-step {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin: 1.5rem 0;
        }

        .reveal .flow-number {
          width: 48px;
          height: 48px;
          background: var(--accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .reveal .flow-text {
          font-size: 1.5rem;
          color: #d4d4d8;
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
          border-bottom: 1px solid #27272a;
        }

        .reveal .comparison-table th {
          color: #71717a;
          font-weight: 500;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .reveal .comparison-table td {
          font-size: 1.25rem;
          color: #d4d4d8;
        }

        .reveal .comparison-table .check {
          color: #22c55e;
        }

        .reveal .comparison-table .x {
          color: #ef4444;
        }
      `}</style>

      <div className="reveal" ref={deckRef}>
        <div className="slides">

          {/* Slide 1: Title */}
          <section data-background-color="#0a0a0a">
            <div className="center-slide">
              <p className="logo">BEACON</p>
              <h1 style={{ marginTop: '2rem' }}>The Physical Intelligence Platform</h1>
              <p className="subtitle">Real-time customer feedback at point of experience</p>
            </div>
          </section>

          {/* Slide 2: Problem */}
          <section data-background-color="#0a0a0a">
            <h3>THE PROBLEM</h3>
            <h2>Businesses are blind to what customers actually think</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div>
                <ul>
                  <li><strong>Surveys have 5-15% response rates</strong> — only extremes respond</li>
                  <li><strong>Online reviews are biased</strong> — 20-30% are fake, self-selected</li>
                  <li><strong>Mystery shopping is expensive</strong> — $50-200 per visit, not scalable</li>
                  <li><strong>Feedback comes too late</strong> — days or weeks after experience</li>
                </ul>
              </div>
              <div className="card">
                <p className="big-number">73%</p>
                <p className="stat-label">of customers leave without telling you why</p>
              </div>
            </div>
          </section>

          {/* Slide 3: Solution */}
          <section data-background-color="#0a0a0a">
            <h3>THE SOLUTION</h3>
            <h2>Video feedback at point of sale</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div>
                <div className="flow-step">
                  <div className="flow-number">1</div>
                  <div className="flow-text">Customer scans QR code at checkout</div>
                </div>
                <div className="flow-step">
                  <div className="flow-number">2</div>
                  <div className="flow-text">Records 30-60 second video feedback</div>
                </div>
                <div className="flow-step">
                  <div className="flow-number">3</div>
                  <div className="flow-text">AI transcribes, enriches with demographics</div>
                </div>
                <div className="flow-step">
                  <div className="flow-number">4</div>
                  <div className="flow-text">Business gets actionable insights in real-time</div>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '1.25rem', color: '#71717a', marginBottom: '1rem' }}>Why video?</p>
                <ul>
                  <li>Captures emotion, tone, and context</li>
                  <li>Harder to fake than text reviews</li>
                  <li>More authentic than checkbox surveys</li>
                  <li>The "why" behind the rating</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Slide 4: Why Now */}
          <section data-background-color="#0a0a0a">
            <h3>WHY NOW</h3>
            <h2>Three converging trends</h2>
            <div className="grid-3" style={{ marginTop: '3rem' }}>
              <div className="card">
                <p className="big-number" style={{ fontSize: '3rem' }}>AI</p>
                <p style={{ marginTop: '1rem' }}>Video transcription and sentiment analysis now instant and cheap</p>
              </div>
              <div className="card">
                <p className="big-number" style={{ fontSize: '3rem' }}>QR</p>
                <p style={{ marginTop: '1rem' }}>COVID normalized QR codes — 83% of consumers have scanned one</p>
              </div>
              <div className="card">
                <p className="big-number" style={{ fontSize: '3rem' }}>Trust</p>
                <p style={{ marginTop: '1rem' }}>Fake reviews eroding trust — FTC now fining $51K per fake review</p>
              </div>
            </div>
          </section>

          {/* Slide 5: Market */}
          <section data-background-color="#0a0a0a">
            <h3>MARKET SIZE</h3>
            <h2>A massive, fragmented opportunity</h2>
            <div className="grid-3" style={{ marginTop: '3rem' }}>
              <div>
                <p className="big-number">$20B+</p>
                <p className="stat-label">Customer experience & reputation software</p>
              </div>
              <div>
                <p className="big-number">$2B</p>
                <p className="stat-label">Mystery shopping (ripe for disruption)</p>
              </div>
              <div>
                <p className="big-number">$1.4B</p>
                <p className="stat-label">Yelp alone (review monetization)</p>
              </div>
            </div>
            <p style={{ marginTop: '3rem', color: '#71717a' }}>
              Initial focus: <span className="highlight">Gyms, restaurants, retail</span> — high churn, high feedback value
            </p>
          </section>

          {/* Slide 6: Competition */}
          <section data-background-color="#0a0a0a">
            <h3>LANDSCAPE</h3>
            <h2>We sit at the intersection</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Real-time</th>
                  <th>Video/Voice</th>
                  <th>Point of Sale</th>
                  <th>Consumer-facing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Yelp / Google</td>
                  <td className="x">✗</td>
                  <td className="x">✗</td>
                  <td className="x">✗</td>
                  <td className="check">✓</td>
                </tr>
                <tr>
                  <td>Medallia / Qualtrics</td>
                  <td className="x">✗</td>
                  <td className="x">✗</td>
                  <td className="x">✗</td>
                  <td className="x">✗</td>
                </tr>
                <tr>
                  <td>Listen Labs</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="x">✗</td>
                  <td className="x">✗</td>
                </tr>
                <tr>
                  <td>Tattle</td>
                  <td className="check">✓</td>
                  <td className="x">✗</td>
                  <td className="check">✓</td>
                  <td className="x">✗</td>
                </tr>
                <tr>
                  <td><strong className="highlight">Beacon</strong></td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Slide 7: Product */}
          <section data-background-color="#0a0a0a">
            <h3>PRODUCT</h3>
            <h2>From feedback to insight in minutes</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div>
                <p style={{ color: '#71717a', marginBottom: '1.5rem' }}>For Businesses</p>
                <ul>
                  <li>Real-time dashboard of customer sentiment</li>
                  <li>AI-generated insight reports</li>
                  <li>Location and shift-level breakdowns</li>
                  <li>Alerts for emerging issues</li>
                  <li>Competitive benchmarking</li>
                </ul>
              </div>
              <div>
                <p style={{ color: '#71717a', marginBottom: '1.5rem' }}>For Customers</p>
                <ul>
                  <li>30-second video feedback (incentivized)</li>
                  <li>Dynamic AI follow-up questions</li>
                  <li>Rewards for participation</li>
                  <li>See their impact on improvements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Slide 8: Business Model */}
          <section data-background-color="#0a0a0a">
            <h3>BUSINESS MODEL</h3>
            <h2>SaaS + Data flywheel</h2>
            <div className="grid-2" style={{ marginTop: '3rem' }}>
              <div className="card">
                <h3 style={{ color: '#fafafa' }}>Phase 1: SaaS</h3>
                <p>Per-location subscription for feedback collection and insights</p>
                <p style={{ marginTop: '1rem' }}><span className="highlight">$200-500/location/month</span></p>
              </div>
              <div className="card">
                <h3 style={{ color: '#fafafa' }}>Phase 2: Data</h3>
                <p>Aggregated sentiment indices, benchmarking, consumer platform</p>
                <p style={{ marginTop: '1rem' }}><span className="highlight">Data licensing + marketplace</span></p>
              </div>
            </div>
            <p style={{ marginTop: '3rem', color: '#a1a1aa' }}>
              Every customer interaction builds our data moat — the more locations, the more valuable the network.
            </p>
          </section>

          {/* Slide 9: Vision */}
          <section data-background-color="#0a0a0a">
            <h3>VISION</h3>
            <h2>The new standard for physical business intelligence</h2>
            <div style={{ marginTop: '3rem' }}>
              <div className="flow-step">
                <div className="flow-number">→</div>
                <div className="flow-text"><strong>Disrupt reviews:</strong> Replace biased Yelp ratings with verified, video-based trust scores</div>
              </div>
              <div className="flow-step">
                <div className="flow-number">→</div>
                <div className="flow-text"><strong>Sentiment indices:</strong> Real-time consumer confidence for retail, hospitality, fitness</div>
              </div>
              <div className="flow-step">
                <div className="flow-number">→</div>
                <div className="flow-text"><strong>Consumer platform:</strong> "Beacon Score" becomes the trusted signal for where to go</div>
              </div>
            </div>
            <p className="quote" style={{ marginTop: '3rem' }}>
              "We're building the truth layer for physical experiences."
            </p>
          </section>

          {/* Slide 10: Ask */}
          <section data-background-color="#0a0a0a">
            <div className="center-slide">
              <h3>THE ASK</h3>
              <h2>Raising seed to prove the model</h2>
              <div className="grid-3" style={{ marginTop: '4rem', textAlign: 'center' }}>
                <div>
                  <p className="big-number" style={{ fontSize: '4rem' }}>$2M</p>
                  <p className="stat-label">Seed round</p>
                </div>
                <div>
                  <p className="big-number" style={{ fontSize: '4rem' }}>50</p>
                  <p className="stat-label">Pilot locations</p>
                </div>
                <div>
                  <p className="big-number" style={{ fontSize: '4rem' }}>18mo</p>
                  <p className="stat-label">To Series A metrics</p>
                </div>
              </div>
              <p style={{ marginTop: '4rem', color: '#71717a' }}>
                Use of funds: Product (40%), GTM (35%), Operations (25%)
              </p>
            </div>
          </section>

          {/* Slide 11: Close */}
          <section data-background-color="#0a0a0a">
            <div className="center-slide">
              <p className="logo" style={{ fontSize: '3rem' }}>BEACON</p>
              <h2 style={{ marginTop: '2rem' }}>The truth about customer experience.</h2>
              <p style={{ marginTop: '3rem', color: '#71717a' }}>
                contact@beaconlabs.ai
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
