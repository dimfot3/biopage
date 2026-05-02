import React, { useState } from 'react';
import { athleticProfile, progressionData } from './data/athletic'; 
import { athletic_profile } from './data/profile'; 
import { SocialIcon } from './Icons';


const ProfileSection = ({ athletic_profile }) => {
  const imgSrc = `${import.meta.env.BASE_URL}${athletic_profile.avatar}`;
  return (
    <section className="card profile hud-profile-card">
      <img className="avatar hud-avatar" src={imgSrc} alt={athletic_profile.name} />
      
      <div className="bio">
        <h1 className="glitch-text">{athletic_profile.name}</h1>
        
        <div className="title" style={{ opacity: 0.7 }}>
          {athletic_profile.title} · {athletic_profile.location}
        </div>
        
        <ul className="pills">
          <li className="pill" style={{ borderColor: '#FC4C02', background: 'transparent' }}>
            <a href={athletic_profile.socials[0].url} target="_blank" rel="noreferrer" 
              style={{ color: '#FC4C02', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
              <SocialIcon type="strava" /> STRAVA
            </a>
          </li>
          <li className="pill" style={{ borderColor: '#34D399', background: 'transparent' }}>
            <a href={athletic_profile.socials[1].url} target="_blank" rel="noreferrer" 
              style={{ color: '#34D399', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
              <SocialIcon type="itra" /> ITRA
            </a>
          </li>
        </ul>

        <p className="about hud-about">{athletic_profile.about}</p>
      </div>
    </section>
  );
};


const ProgressionAnalytics = ({ isSpeedMode, annualVolume, progressionData, getH }) => {
  if (!isSpeedMode) return null;

  return (
    <section className="card section volume-module">
      <div className="module-label" style={{ marginBottom: '20px' }}>
        TOTAL TRAIN VOLUME // 2022-2025
      </div>
      
      <div className="volume-stats-grid">
        <div className="big-stat">
          <span className="stat-label">Total_KM_2025</span>
          <span className="stat-value">{annualVolume.distance}</span>
        </div>
        <div className="big-stat">
          <span className="stat-label">Total_Elev_Gain_2025</span>
          <span className="stat-value">{annualVolume.elevation}M</span>
        </div>
      </div>

      <div className="progression-container">
        <div className="chart-box">
          <div className="module-label-sub">Total Distance (KM)</div>
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
          <div className="module-label-sub">Elevation Gain (M)</div>
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
  );
};

const PersonalBests = ({ records, isSpeedMode }) => (
  <>
    <div className="module-label" style={{marginTop: '10px'}}>PERSONAL_BEST_ARCHIVE</div>
    <section className="records-grid">
      {records.map((r) => (
        <div key={r.distance} className="card record-card">
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
  </>
);

const MissionLog = ({ raceHistory, displayedRaces, isExpanded, setIsExpanded }) => (
  <section className="card section history-module">
    <div className="section-head">
      <div className="module-label" style={{ marginBottom: 0 }}>MISSION_LOG // RACE_HISTORY</div>
      <button className="expand-btn" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand_All'}
      </button>
    </div>
    
    <div className="log-table-wrapper">
      <table className="log-table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>EVENT</th>
            <th className="km-cell">KM</th>
            <th className="alt-cell">D+</th>
            <th style={{ textAlign: 'right' }}>RESULT</th>
          </tr>
        </thead>
        <tbody>
          {displayedRaces.map((race, i) => (
            <tr key={i} className="log-row">
              <td className="dim date-cell">{race.date}</td>
              <td className="highlight name-cell">{race.name}</td>
              <td className="km-cell">{race.dist}</td>
              <td className="dim alt-cell">{race.alt}</td>
              <td className="neon result-cell">{race.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default function AthleticPage({ isSpeedMode }) {
  const { records, annualVolume, raceHistory } = athleticProfile;
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedRaces = isExpanded ? raceHistory : raceHistory.slice(0, 5);

  // Scaling logic: Anchored to bottom, height extends UPWARD
  const getH = (val, max) => `${Math.max((val / max) * 100, 8)}%`;

  return (
    <div className={`hud-container ${isSpeedMode ? 'bio-speed-mode' : ''}`}>
      <div className="grid-overlay"></div>

      <main className="hud-content">
        <ProfileSection athletic_profile={athletic_profile} />

        <ProgressionAnalytics isSpeedMode={isSpeedMode} annualVolume={annualVolume} progressionData={progressionData} getH={getH} />

        <PersonalBests records={records} isSpeedMode={isSpeedMode} />

        <MissionLog
          raceHistory={raceHistory}
          displayedRaces={displayedRaces}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </main>
    </div>
  );
}