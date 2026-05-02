// src/BioPage.jsx (The new, clean version)

import React, { useRef } from 'react';
import { NEWS } from './data/news';
import { PROJECTS } from './data/projects';
import { profile } from './data/profile';
import { SocialIcon } from './Icons.jsx';

const formatDate = (dateStr) => 
  new Date(dateStr).toLocaleDateString(undefined, { month: 'short', year: 'numeric' });

const ProfileSection = ({ profile, imgSrc, SocialIcon }) => (
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
);

const MilestonesSection = ({ isSpeedMode, newsTrackRef, scrollTrack, NEWS, formatDate }) => {


  return (
    <section className="card section news-wrap" aria-label="Milestones">
      <div className="section-head">
        <h3>Milestones</h3>
        <div className="news-controls">
          <button className="icon-btn" onClick={() => scrollTrack(newsTrackRef, -1, '.news-card')}>◀</button>
          <button className="icon-btn" onClick={() => scrollTrack(newsTrackRef, 1, '.news-card')}>▶</button>
        </div>
      </div>

      <div className="news-track" ref={newsTrackRef}>
        {NEWS.map((item) => {
          const start = formatDate(item.startDate);
          const end = item.endDate ? formatDate(item.endDate) : 'Present';

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
  );
};

const ProjectsSection = ({ isSpeedMode, projectsTrackRef, scrollProjects, PROJECTS }) => (
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
);

// Accepts the isSpeedMode prop from the parent App component
export default function BioPage({ isSpeedMode }) {
  const newsTrackRef = useRef(null);
  const projectsTrackRef = useRef(null);

  const scrollTrack = (ref, direction, selector) => {
    const track = ref.current;
    if (!track) return;
    const card = track.querySelector(selector); 
    if (!card) return;
    const width = card.getBoundingClientRect().width + 16; // card width + gap
    track.scrollBy({ left: direction * width, behavior: 'smooth' });
  };

  const scrollProjects = (direction) => {
    scrollTrack(projectsTrackRef, direction, '.project-card');
  };

  const imgSrc = `${import.meta.env.BASE_URL}${profile.avatar}`;

  return (
    <>
      {/* The theme toggle button is REMOVED from here */}
      
      {/* Apply a class to the container when speed mode is active */}
      <div className={`container ${isSpeedMode ? 'bio-speed-mode' : ''}`}>
        <main className="content">
          
          {/* Top: Photo (left) + Bio (right) */}
          <ProfileSection profile={profile} imgSrc={imgSrc} SocialIcon={SocialIcon} />

          {/* Below: News - Hides the entire section in Speed Mode */}
          <MilestonesSection isSpeedMode={isSpeedMode} newsTrackRef={newsTrackRef} scrollTrack={scrollTrack} NEWS={NEWS} formatDate={formatDate} />

          {/* Projects */}
          <ProjectsSection isSpeedMode={isSpeedMode} projectsTrackRef={projectsTrackRef} scrollProjects={scrollProjects} PROJECTS={PROJECTS} />
        </main>
      </div>
    </>
  );
}