import React, { useState } from 'react';
import { athleticProfile, progressionData } from './data/athletic'; 
import { athletic_profile } from './data/profile'; 

const StravaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066l-2.084 4.116zM10.267 7.845l-2.503 4.937h5.005l-2.502-4.937zM12.77 0l-5.15 10.172h3.066l2.084-4.116 2.089 4.116h3.065L12.77 0z"/></svg>
);

const ItraIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"/></svg>
);

export default function AthleticPage({ isSpeedMode }) {
  const { records, annualVolume, raceHistory } = athleticProfile;
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedRaces = isExpanded ? raceHistory : raceHistory.slice(0, 5);
  const imgSrc = `${import.meta.env.BASE_URL}${athletic_profile.avatar}`;

  // Scaling logic: Anchored to bottom, height extends UPWARD
  const getH = (val, max) => `${Math.max((val / max) * 100, 8)}%`;

  return (
    <div className={`hud-container ${isSpeedMode ? 'mode-minimal' : 'mode-full'}`}>
      <div className="grid-overlay"></div>

      <main className="hud-content">
        
        {/* --- 1. PROFILE SECTION --- */}
        <section className="hud-profile-card">
          <img className="hud-avatar" src={imgSrc} alt={athletic_profile.name} />
          <div className="bio">
            <h1 className="glitch-text">{athletic_profile.name}</h1>
            <div className="title" style={{opacity: 0.7}}>
              {athletic_profile.title} · {athletic_profile.location}
            </div>
            
            <ul className="pills">
              <li className="pill" style={{ borderColor: '#FC4C02' }}>
                <a href={athletic_profile.socials[0].url} target="_blank" rel="noreferrer" style={{ color: '#FC4C02', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                  <StravaIcon /> STRAVA
                </a>
              </li>
              <li className="pill" style={{ borderColor: '#34D399' }}>
                <a href={athletic_profile.socials[1].url} target="_blank" rel="noreferrer" style={{ color: '#34D399', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                  <ItraIcon /> ITRA
                </a>
              </li>
            </ul>

            <p className="hud-about">{athletic_profile.about}</p>
          </div>
        </section>

        {/* --- 2. PROGRESSION ANALYTICS --- */}
        <section className="volume-module">
          <div className="module-label">MISSION_CAPACITY_TRANSITION // 2022-2025</div>
          
          <div className="volume-stats">
            <div className="big-stat">
              <span className="unit">TOTAL_KM_2025</span>
              <span className="value">{annualVolume.distance}</span>
            </div>
            <div className="big-stat">
              <span className="unit">TOTAL_VERT_2025</span>
              <span className="value">{annualVolume.elevation}M</span>
            </div>
          </div>

          <div className="progression-container">
            <div className="chart-box">
              <div className="module-label" style={{fontSize: '9px'}}>DISTANCE_EVOLUTION (KM)</div>
              <div className="bars-wrapper">
                {progressionData.map(d => (
                  <div key={d.year} className="bar-column">
                    <div className="bar-fill" data-value={`${d.km}km`} 
                      style={{ height: getH(d.km, 2795), background: 'var(--pill-text)', opacity: d.year === '2025' ? 1 : 0.4 }} />
                    <span className="chart-year">{d.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="chart-box">
              <div className="module-label" style={{fontSize: '9px'}}>VERTICAL_EVOLUTION (M)</div>
              <div className="bars-wrapper">
                {progressionData.map(d => (
                  <div key={d.year} className="bar-column">
                    <div className="bar-fill" data-value={`${d.elevation}m`} 
                      style={{ height: getH(d.elevation, 30000), background: '#34D399', opacity: d.year === '2025' ? 1 : 0.4 }} />
                    <span className="chart-year">{d.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. PERSONAL BESTS --- */}
        <div className="module-label">PERSONAL_BEST_ARCHIVE</div>
        <section className="records-grid">
          {records.map((r) => (
            <div key={r.distance} className="record-card">
              <span className="record-dist">{r.distance}</span>
              <span className="record-time">{r.time}</span>
              {!isSpeedMode && (
                <div className="record-meta">
                  <span>PACE: {r.pace}</span>
                  <span>{r.date.split(' ')[0]}</span>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* --- 4. MISSION LOG --- */}
        <section className="history-module">
          <div className="section-head">
            <div className="module-label" style={{ marginBottom: 0 }}>MISSION_LOG // COMPLETED_RACES</div>
            <button className="expand-btn" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Collapse_History' : 'Expand_History'}
            </button>
          </div>
          <div className="log-table-wrapper">
            <table className="log-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>EVENT</th>
                  <th>DIST</th>
                  <th>VERT</th>
                  <th>RESULT</th>
                </tr>
              </thead>
              <tbody>
                {displayedRaces.map((race, i) => (
                  <tr key={i} className="log-row">
                    <td className="dim">{race.date}</td>
                    <td className="highlight">{race.name}</td>
                    <td>{race.dist}</td>
                    <td className="dim">{race.alt}</td>
                    <td className="neon">{race.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}