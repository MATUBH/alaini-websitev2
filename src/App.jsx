import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#F9F4EF', color: '#0D1C2E' }}>
      <header style={{ padding: '20px', backgroundColor: '#6A1B9A', color: 'white', textAlign: 'center' }}>
        <h1>alainI – Al Ain Intelligence</h1>
        <p>Media Monitoring & Analytics for the UAE</p>
      </header>

      <section id="about" style={{ padding: '60px 20px' }}>
        <h2>About Us</h2>
        <p>We are a UAE-based media intelligence agency using AI and human insight to monitor, analyze, and report on public sentiment, media narratives, and digital trends.</p>
      </section>

      <section id="services" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
        <h2>Services</h2>
        <ul>
          <li>Real-Time Media Monitoring</li>
          <li>Sentiment & Narrative Analysis</li>
          <li>Influencer Tracking & Crisis Alerts</li>
          <li>Multilingual Dashboards & Reports</li>
        </ul>
      </section>

      <section id="dashboard" style={{ padding: '60px 20px' }}>
        <h2>Analytics Dashboard</h2>
        <p>[Interactive media insights dashboard coming soon]</p>
      </section>

      <section id="contact" style={{ padding: '60px 20px', backgroundColor: '#f2e8ff' }}>
        <h2>Contact Us</h2>
        <p>Email: hello@alaini.ae</p>
        <p>Location: Al Ain, United Arab Emirates</p>
      </section>

      <footer style={{ padding: '20px', backgroundColor: '#0D1C2E', color: 'white', textAlign: 'center' }}>
        <p>© 2025 alainI – All rights reserved</p>
      </footer>
    </div>
  );
}
