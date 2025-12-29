// src/BioPage.jsx (The new, clean version)

import React, { useRef } from 'react';
import { NEWS } from './data/news';
import { PROJECTS } from './data/projects';
import { profile } from './data/profile';


function SocialIcon({ type, size = 16 }) {
  if (type === "github") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="white" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 
          0-.19-.01-.82-.01-1.49-2 .37-2.69-.49-2.86-.94-.09-.23-.48-.94-.82-1.13
          -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 
          2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
          0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 
          2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 
          2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 
          1.9.08 2.1.51.56.82 1.27.82 2.15 
          0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
          1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 
          0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 34 34" aria-hidden="true">
        <rect width="34" height="34" fill="#0A66C2" rx="4" />
        <path fill="#fff" d="M10.07 13.5H6.84v13.58h3.23V13.5zm.27-4.19c0-.94-.72-1.7-1.88-1.7h-.02c-1.13 0-1.86.76-1.86 1.7 0 .94.73 1.7 1.87 1.7 1.14 0 1.87-.76 1.87-1.7zM27.16 19.3c0-3.26-1.74-4.77-4.07-4.77-1.88 0-2.72 1.04-3.19 1.77v-1.52h-3.23c.04 1.01 0 13.3 0 13.3h3.23v-7.43c0-.4.03-.8.15-1.08.33-.8 1.08-1.63 2.34-1.63 1.65 0 2.31 1.23 2.31 3.03v7.11h3.23v-8.78z"/>
      </svg>
    );
  }
  if (type === "cv") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M6 2a2 2 0 0 0-2 2v16c0 1.103.897 2 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5z"/>
      </svg>
    );
  }
  return null;
}

// Accepts the isSpeedMode prop from the parent App component
export default function BioPage({ isSpeedMode }) {
  const newsTrackRef = useRef(null);
  const projectsTrackRef = useRef(null);

  const scrollProjects = (direction) => {
    const track = projectsTrackRef.current;
    if (!track) return;
    // Note: If you use speed mode to hide elements, the scroll width might change.
    const card = track.querySelector('.project-card'); 
    if (!card) return;
    const width = card.getBoundingClientRect().width + 16; // card width + gap
    track.scrollBy({ left: direction * width, behavior: 'smooth' });
  };

  const scrollNews = (direction) => {
    const track = newsTrackRef.current;
    if (!track) return;
    const card = track.querySelector('.news-card');
    if (!card) return;
    const width = card.getBoundingClientRect().width + 16;
    track.scrollBy({ left: direction * width, behavior: 'smooth' });
  };

  // Removed: darkMode state and useEffect hook

  const imgSrc = `${import.meta.env.BASE_URL}${profile.avatar}`;

  return (
    <>
      {/* The theme toggle button is REMOVED from here */}
      
      {/* Apply a class to the container when speed mode is active */}
      <div className={`container ${isSpeedMode ? 'bio-speed-mode' : ''}`}>
        <main className="content">
          
          {/* Optional: Add a visual indicator for speed mode */}
          {isSpeedMode && (
              <div className="speed-mode-indicator" style={{textAlign: 'center', padding: '10px', background: 'var(--accent-color)', color: 'white'}}>
                  ⚡ Bio Page in Speed Mode ⚡
              </div>
          )}

          {/* Top: Photo (left) + Bio (right) */}
          <section className="card profile">
            <img className="avatar" src={imgSrc} alt="Your portrait" />

            <div className="bio">
              <h1>{profile.name}</h1>

              <div className="title">
                {profile.title} <br /> {profile.role} · {profile.location}
              </div>

              <ul className="pills">
                {/* Email pill */}
                <li className="pill">
                  <a
                    className="profile__pill-link"
                    data-variant="email"
                    href={`mailto:${profile.email}`}
                  >
                    📧 {profile.email}
                  </a>
                </li>

                {/* Social pills */}
                {profile.socials.map((s) => (
                  <li className="pill" key={s.type}>
                    <a
                      className="profile__pill-link"
                      data-variant="social"
                      data-network={s.type}   // e.g., github/linkedin/cv
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon type={s.type} />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="about">{profile.about}</p>
            </div>
          </section>

          {/* Below: News - Hides the entire section in Speed Mode */}
          {!isSpeedMode && (
            <section className="card section news-wrap" aria-label="Milestones">
              <div className="section-head">
                <h3>Milestones</h3>
                <div className="news-controls">
                  <button className="icon-btn" onClick={() => scrollNews(-1)}>◀</button>
                  <button className="icon-btn" onClick={() => scrollNews(1)}>▶</button>
                </div>
              </div>

              <div className="news-track" ref={newsTrackRef}>
                {NEWS.map((item) => {
                  const start = new Date(item.startDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
                  const end = item.endDate
                    ? new Date(item.endDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
                    : 'Present';

                  return (
                    <article key={item.id} className="card news-card">
                      <img src={item.image} alt={item.title} />
                      <div className="news-body">
                        <h4>{item.title}</h4>
                        <small className="news-date">
                          {start} – {end}
                        </small>
                        <p>{item.desc}</p>
                        {item.url && (
                          <a
                            className="pill"
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read more →
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* Projects */}
          <section className="card section" aria-label="Projects">
            <div className="section-head">
              <h3>Projects</h3>
              <div className="news-controls">
                <button className="icon-btn" onClick={() => scrollProjects(-1)}>◀</button>
                <button className="icon-btn" onClick={() => scrollProjects(1)}>▶</button>
              </div>
            </div>

            <div className="projects-track" ref={projectsTrackRef}>
              {PROJECTS.map((p) => {
                const start = new Date(p.startDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
                const end = p.endDate
                  ? new Date(p.endDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
                  : 'Present';

                // In speed mode, hide descriptions and tech stacks
                const showDetails = !isSpeedMode; 

                return (
                  <article key={p.id} className="card project-card">
                    <img className="project-img" src={p.image} alt={p.title} />
                    <div className="project-body">
                      <h4>{p.title}</h4>
                      
                      {showDetails && <p>{p.desc}</p>}

                      {/* Optional tags */}
                      {p.tags?.length > 0 && showDetails && (
                        <ul className="chips">
                          {p.tags.map((t) => <li key={t} className="chip">{t}</li>)}
                        </ul>
                      )}

                      {/* Optional tech stack */}
                      {p.tech?.length > 0 && showDetails && (
                        <div className="tech-line">
                          {p.tech.join(' · ')}
                        </div>
                      )}

                      {/* Optional links (always show links) */}
                      <div className="project-links">
                        {p.demo && (
                          <a className="pill" href={p.demo} target="_blank" rel="noopener noreferrer">
                            Demo →
                          </a>
                        )}
                        {p.github && (
                          <a className="pill" href={p.github} target="_blank" rel="noopener noreferrer">
                            Code →
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}