// Helpers
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

// Year
$("#year").textContent = new Date().getFullYear();

// Typewriter effect
(function typewriter() {
  const el = $("#typewriter");
  const text = "Sankaran S — Data Scientist";
  let i = 0;
  function step() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) setTimeout(step, 40);
  }
  step();
})();

// Theme toggle (modified for light mode default)
(function () {
  const btn = $("#theme-toggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  
  // Default to light mode, only add dark if explicitly saved
  if (saved === "dark") {
    root.classList.add("dark");
    btn.textContent = "🌗";
  } else {
    btn.textContent = "🌞";
  }
  
  btn.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    btn.textContent = isDark ? "🌗" : "🌞";
  });
})();

// Mobile menu
(function () {
  const toggle = $("#menu-toggle");
  const mobile = $("#mobile-menu");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      mobile.innerHTML = `
        <div class="card">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      `;
      mobile.classList.toggle("open");
    });
  }
})();

// Render sections
(function renderAbout() {
  const aboutText = $("#about-text");
  if (aboutText && about && about.text) {
    aboutText.textContent = about.text;
  }
})();

(function renderSkills() {
  const grid = $("#skills-grid");
  if (grid && skills && Array.isArray(skills)) {
    skills.forEach((s) => {
      const card = document.createElement("div");
      card.className = "card reveal";
      card.innerHTML = `<h3>${s.category}</h3><p>${s.items.join(" · ")}</p>`;
      grid.appendChild(card);
    });
  }
})();

// Modified projects rendering with new button structure
(function renderProjects() {
  const grid = $("#projects-grid");
  if (grid && projects && Array.isArray(projects)) {
    projects.forEach((p) => {
      const card = document.createElement("div");
      card.className = "card reveal";
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div>${p.tags.map(t => `<span class="tag">${t}</span>`).join(" ")}</div>
        <div class="project-actions">
          ${p.repo ? `<button class="btn-project btn-view-project" onclick="window.open('${p.repo}', '_blank')">View Project</button>` : ""}
          ${p.demo ? `<button class="btn-project btn-live-demo" onclick="window.open('${p.demo}', '_blank')">Live Demo</button>` : ""}
        </div>
      `;
      grid.appendChild(card);
    });
  }
})();

// Modified experience rendering - single column with wider cards
(function renderExperience() {
  const grid = $("#experience-grid");
  if (grid && experience && Array.isArray(experience)) {
    experience.forEach((e) => {
      const card = document.createElement("div");
      card.className = "experience-card reveal";
      card.innerHTML = `
        <h3>${e.role} — ${e.company}</h3>
        <p class="muted">${e.duration}</p>
        <ul>${e.contributions.map(c => `<li>${c}</li>`).join("")}</ul>
      `;
      grid.appendChild(card);
    });
  }
})();

// Modified education rendering - single column like experience
(function renderEducation() {
  const grid = $("#education-grid");
  if (grid && education && Array.isArray(education)) {
    education.forEach((ed) => {
      if (ed.degree) { // Only render education degrees
        const card = document.createElement("div");
        card.className = "education-card reveal";
        card.innerHTML = `
          <h3>${ed.degree}</h3>
          <p class="muted">${ed.institution} ${ed.year}</p>
        `;
        grid.appendChild(card);
      }
    });
  }
})();

// New certification rendering - 2x2 grid like contact
(function renderCertifications() {
  const grid = $("#certification-grid");
  if (grid && education && Array.isArray(education)) {
    education.forEach((ed) => {
      if (ed.certification) { // Only render certifications
        const card = document.createElement("div");
        card.className = "certification-card reveal";
        card.innerHTML = `
          <h3>${ed.certification}</h3>
          <p class="muted">${ed.provider || ''} ${ed.year ? '— ' + ed.year : ''}</p>
          ${ed.description ? `<p style="font-size: 0.85rem; margin-top: 8px;">${ed.description}</p>` : ''}
          ${ed.certificateLink ? `<a href="${ed.certificateLink}" target="_blank" class="cert-link">View Certificate</a>` : ''}
        `;
        grid.appendChild(card);
      }
    });
  }
})();


// Modified contact rendering with centered headings and WhatsApp
(function renderContact() {
  const grid = $("#contact-grid");
  if (grid && contact && Array.isArray(contact)) {
    // Add contact-grid class for 2x2 layout
    grid.className = "contact-grid";
    
    contact.forEach((c) => {
      const card = document.createElement("div");
      card.className = "card contact-card reveal";
      card.innerHTML = `
        <h3>${c.type}</h3>
        <p><a href="${c.link}" target="_blank" style="color:var(--accent);font-weight:700">${c.value}</a></p>
      `;
      grid.appendChild(card);
    });
  }
})();

// Reveal animations - AFTER content is rendered
setTimeout(function() {
  const els = $$(".reveal");
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in-view");
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((e) => io.observe(e));
}, 100);

// Debug logs
console.log('DOM loaded');
console.log('Skills data:', typeof skills !== 'undefined' ? skills : 'undefined');
console.log('Projects data:', typeof projects !== 'undefined' ? projects : 'undefined');
console.log('Experience data:', typeof experience !== 'undefined' ? experience : 'undefined');

}); // End of DOMContentLoaded
