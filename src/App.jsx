const projects = [
  {
    number: "01",
    slug: "brutal-rig",
    title: "Brutal Rig",
    type: "Full-stack product",
    summary:
      "A guided gear builder that helps metal musicians create a complete guitar or bass rig without hours of scattered research.",
    stack: ["React", "JavaScript", "Firebase", "Testing"],
    href: "https://brutal-rig.web.app",
    linkLabel: "Visit live site",
    visual: "rig",
  },
  {
    number: "02",
    slug: "band-practice",
    title: "Band Practice",
    type: "Full-stack web app",
    summary:
      "A shared planning app that makes scheduling practices, setting goals, and keeping musicians organized easier and more fun.",
    stack: ["React", "Vite", "Firebase Auth", "Firestore"],
    href: "https://band-practice-85891.web.app",
    linkLabel: "Visit live site",
    visual: "band",
  },
  {
    number: "03",
    slug: "bosco-blackjack",
    title: "Bosco Blackjack",
    type: "Client website",
    summary:
      "A professional booking website that replaced a random Facebook page and made it easier for customers to find and hire a blackjack dealer.",
    stack: ["React", "Firebase", "Responsive UI", "DNS"],
    href: "https://bosco-blackjack.web.app",
    linkLabel: "Visit live site",
    visual: "cards",
  },
];

const caseStudies = [
  {
    number: "01",
    slug: "brutal-rig",
    title: "Brutal Rig",
    label: "Recommendation engine",
    built:
      "A live, interactive builder that turns a musician's budget, instrument, and preferred heavy tone into a complete gear recommendation.",
    challenge:
      "Getting into metal guitar or bass can mean hours of product pages, forums, and YouTube videos. The experience needed to make that research approachable while keeping every recommendation inside the selected budget.",
    solution:
      "I organized the decision process into a clear guided flow, centralized state so every new build starts clean, and added automated checks for every supported budget tier to catch missing or over-budget results.",
    result: "A fun, practical way for heavy-music players to understand gear and build a rig with confidence.",
    href: "https://github.com/ChristianBarajas/brutal-rig",
    link: "Open repository",
  },
  {
    number: "02",
    slug: "band-practice",
    title: "Band Practice",
    label: "Scheduling product",
    built:
      "A shared band workspace where musicians set availability, compare schedules, create official practices, and stay focused on the group's goals.",
    challenge:
      "Planning through group messages was messy. Availability changed every week, partial time windows had to overlap, and everyone needed one clear place to see what the band was doing next.",
    solution:
      "I designed a friendly two-week calendar, separated authentication from band data in Firebase, organized availability by member and date, and added leader tools for turning an open schedule into a real practice.",
    result: "Practice planning and goal setting became easier, clearer, and more enjoyable for the whole band.",
    href: "https://github.com/ChristianBarajas/band-practice",
    link: "Open repository",
  },
  {
    number: "03",
    slug: "bosco-blackjack",
    title: "Bosco Blackjack",
    label: "Client delivery",
    built:
      "A responsive business website that gives a professional blackjack dealer one trustworthy place to explain the service and receive customer inquiries.",
    challenge:
      "My friend was booking customers through a personal Facebook account. It looked informal, buried important information, and made the business harder for new customers to trust and contact.",
    solution:
      "I created a polished mobile-friendly experience, organized the booking information, deployed it on Firebase, and connected his custom domain while keeping ownership of his domain account in his hands.",
    result: "A more professional online presence, an easier booking path, and more customers reaching the business.",
    href: "https://github.com/ChristianBarajas/bosco-blackjack-website",
    link: "Open repository",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2.8a9.4 9.4 0 0 0-3 18.3c.5.1.6-.2.6-.5v-1.8c-2.7.6-3.3-1.1-3.3-1.1-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.7 0-1 .4-1.9 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.6 1 1.5 1 2.5 0 3.6-2.3 4.5-4.5 4.7.4.3.7.9.7 1.8v2.5c0 .3.2.6.7.5A9.4 9.4 0 0 0 12 2.8Z" />
    </svg>
  );
}

function ProjectVisual({ kind }) {
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      {kind === "rig" && (
        <>
          <span className="amp"><i /><i /><i /></span>
          <span className="cable" />
          <span className="pedal"><i /></span>
        </>
      )}
      {kind === "band" && (
        <div className="availability-grid">
          {["M", "T", "W", "T", "F", "S"].map((day, index) => (
            <span key={`${day}-${index}`} className={`day day-${index}`}>
              {day}
            </span>
          ))}
        </div>
      )}
      {kind === "cards" && (
        <div className="playing-cards">
          <span className="card card-one">A<i>♠</i></span>
          <span className="card card-two">K<i>♥</i></span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Christian Barajas, home">
          Christian Barajas<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal reveal-1">
            <span /> Software engineer · Creator · Teammate
          </p>
          <h1 className="reveal reveal-2">
            I bring ideas to life through <em>code.</em>
          </h1>
          <p className="hero-intro reveal reveal-3">
            I combine beautiful UI with organized backend functionality to
            create software that feels powerful, simple, and genuinely useful.
            The best products come from teams that communicate, analyze, and
            solve problems together.
          </p>
          <div className="hero-actions reveal reveal-4">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/ChristianBarajas"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-card reveal reveal-3" aria-label="Developer profile">
          <div className="hero-card-top">
            <span>How I build</span>
            <i />
          </div>
          <div className="build-sequence" aria-hidden="true">
            <span>idea</span><b>→</b><span>code</span><b>→</b><span>impact</span>
          </div>
          <div className="hero-card-copy">
            <p>Beautiful interface. Organized systems. One complete experience.</p>
            <span>Built through communication, analysis, and teamwork.</span>
          </div>
          <div className="hero-card-grid" aria-hidden="true" />
        </div>
      </section>

      <div className="tech-strip" aria-label="Core technologies">
        <span>React</span><i />
        <span>JavaScript</span><i />
        <span>Firebase</span><i />
        <span>Node.js</span><i />
        <span>SQL</span>
      </div>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Selected work</p>
            <h2>Ideas turned into real products.</h2>
          </div>
          <p>
            I start with a problem, understand the people behind it, and use
            code to create an experience that makes their lives easier.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <ProjectVisual kind={project.visual} />
              <div className="project-card-body">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-links">
                  <a href={`#case-${project.slug}`}>Read case study <ArrowIcon /></a>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel} ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section" aria-labelledby="case-heading">
        <div className="case-heading">
          <p className="eyebrow"><span /> Behind the build</p>
          <h2 id="case-heading">The problem is where the real work begins.</h2>
        </div>

        <div className="case-list">
          {caseStudies.map((study) => (
            <article className="case-study" id={`case-${study.slug}`} key={study.slug}>
              <div className="case-title">
                <div className="case-number">{study.number}</div>
                <p>{study.label}</p>
                <h3>{study.title}</h3>
                <a href={study.href} target="_blank" rel="noreferrer">
                  {study.link} ↗
                </a>
              </div>
              <div className="case-content">
                <div className="case-block">
                  <span>What I built</span>
                  <p>{study.built}</p>
                </div>
                <div className="case-block problem">
                  <span>The problem</span>
                  <p>{study.challenge}</p>
                </div>
                <div className="case-block solution">
                  <span>How I tackled it</span>
                  <p>{study.solution}</p>
                </div>
                <p className="case-result"><strong>Result:</strong> {study.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="values-section" aria-labelledby="values-heading">
        <div className="values-heading">
          <p className="eyebrow"><span /> How I work with a team</p>
          <h2 id="values-heading">Strong software starts with strong collaboration.</h2>
        </div>
        <div className="value-grid">
          <article>
            <span>01</span>
            <h3>Communicate clearly</h3>
            <p>I share context, listen to different perspectives, and keep everyone aligned so good ideas do not get lost between people.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Move step by step</h3>
            <p>I break large problems into understandable decisions, validate each part, and keep the team moving without losing sight of the goal.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Face problems together</h3>
            <p>When something breaks, I analyze it with the team, learn what the system is telling us, and work toward a solution instead of running from it.</p>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-intro">
          <p className="eyebrow"><span /> About me</p>
          <h2>I create, solve, and help teams move forward.</h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I&apos;m Christian Barajas, a software engineer and computer science
            graduate from Cal State Fullerton.
          </p>
          <p>
            I love taking an idea that only exists in someone&apos;s head and
            turning it into software people can actually use. For me, great
            engineering is the combination of a beautiful, understandable
            interface and backend functionality that stays organized and
            dependable.
          </p>
          <p>
            I also love the team behind the product. Clear communication,
            patience, and honest problem solving create better software and a
            stronger group. I want to work with people who tackle hard issues
            together, learn from them, and turn them into something fantastic.
          </p>
          <a className="text-link" href="https://github.com/ChristianBarajas" target="_blank" rel="noreferrer">
            See what I&apos;m building on GitHub <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="life-section" aria-labelledby="life-heading">
        <div className="life-heading">
          <div>
            <p className="eyebrow"><span /> Beyond the code</p>
            <h2 id="life-heading">A full life makes me a better engineer.</h2>
          </div>
          <p>
            Software is a huge part of who I am, but the people and creativity
            outside of work are what keep me grounded, motivated, and human.
          </p>
        </div>

        <div className="life-grid">
          <article className="life-card father-card">
            <span className="life-number">01</span>
            <p className="life-label">Full-time father</p>
            <h3>My most important role.</h3>
            <p>
              Being a full-time father has taught me patience, responsibility,
              resilience, and how important it is to show up every day—even
              when the plan changes.
            </p>
          </article>

          <article className="life-card music-card">
            <span className="life-number">02</span>
            <p className="life-label">Making music</p>
            <h3>Where I stay creative.</h3>
            <p>
              I love making music on the side. It gives me another way to turn
              ideas into something real and reminds me how individual parts
              can work together to create something powerful.
            </p>
          </article>

          <article className="life-card people-card">
            <span className="life-number">03</span>
            <p className="life-label">Friends & family</p>
            <h3>The people who keep me grounded.</h3>
            <p>
              When I&apos;m away from code or music, I love spending time with
              friends and family. Those relationships keep me present and
              remind me that the best experiences are always built around people.
            </p>
          </article>
        </div>
      </section>

      <section className="skills-section" aria-label="Technical skills">
        <div className="skills-title">
          <span>Toolbox</span>
          <h2>Tools I use to bring ideas to life.</h2>
        </div>
        <div className="skill-groups">
          <div>
            <span>Frontend</span>
            <p>React · JavaScript · Vite · HTML · CSS · Responsive UI</p>
          </div>
          <div>
            <span>Backend & data</span>
            <p>Node.js · Firebase · Firestore · PostgreSQL · SQL · REST APIs</p>
          </div>
          <div>
            <span>Engineering</span>
            <p>Git · GitHub Actions · CI/CD · Deployment · Debugging</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow"><span /> Let&apos;s create something fantastic</p>
        <h2>Have an idea, a team, or a problem worth solving?</h2>
        <p>
          I&apos;m open to software engineering opportunities where thoughtful UI,
          organized systems, and real collaboration matter.
        </p>
        <div className="contact-actions">
          <a className="button contact-button" href="mailto:christianbarajas32@gmail.com">
            Email me <ArrowIcon />
          </a>
          <a className="contact-email" href="mailto:christianbarajas32@gmail.com">
            christianbarajas32@gmail.com
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">Christian Barajas<span>.</span></a>
        <p>Designed and built with care · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}