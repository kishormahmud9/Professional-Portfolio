import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Mail, Phone, MapPin, Globe } from "lucide-react";
import avatar from "@/assets/resume2.png";
import "./resume.css";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="resume-body">
      <div className="page">
        {/* ░░ SIDEBAR ░░ */}
        <aside className="sidebar">
          <div className="avatar-wrap">
            <div className="avatar-ring" style={{ overflow: "hidden" }}>
              <img
                src={avatar}
                alt="profile image"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top",
                  transform: "scale(1)",
                }}
              />
            </div>
          </div>

          {/* Contact */}
          <div className="s-section">
            <div className="s-label">Contact</div>
            <div className="contact-item">
              <span className="ico">
                <Mail size={14} />
              </span>
              <span>
                <a href="mailto:dev.kishor138@gmail.com">dev.kishor138@gmail.com</a>
              </span>
            </div>
            <div className="contact-item">
              <span className="ico">
                <Phone size={14} />
              </span>
              <span>+880 1723-343865</span>
            </div>
            <div className="contact-item">
              <span className="ico">
                <MapPin size={14} />
              </span>
              <span>
                Banasree, Rampura
                <br />
                Dhaka-1219, Bangladesh
              </span>
            </div>
            <div className="contact-item">
              <span className="ico">
                <Github size={14} />
              </span>
              <span>
                <a href="https://github.com/kishormahmud9" target="_blank" rel="noreferrer">
                  kishormahmud9
                </a>
              </span>
            </div>
            <div className="contact-item">
              <span className="ico">
                <Globe size={14} />
              </span>
              <span>
                <a href="https://devkishor.com" target="_blank" rel="noreferrer">
                  devkishor.com
                </a>
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="s-section">
            <div className="s-label">Education</div>
            <div className="edu-list-sidebar">
              <div className="edu-item-sidebar">
                <div className="edu-year-sidebar">2018 – 2022</div>
                <div className="edu-info">
                  <div className="edu-degree-sidebar">Diploma in Engineering</div>
                  <div className="edu-school-sidebar">Rangpur Polytechnic Institute</div>
                </div>
              </div>
              <div className="edu-item-sidebar">
                <div className="edu-year-sidebar">2016 – 2018</div>
                <div className="edu-info">
                  <div className="edu-degree-sidebar">Secondary School Certificate</div>
                  <div className="edu-school-sidebar">Rangpur Technical School</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Skills */}
          <div className="s-section">
            <div className="s-label">Core Skills</div>
            <div className="skill-group">
              <div className="skill-row">
                <div className="skill-header">
                  <span className="skill-name">React.js / Next.js</span>
                  <span className="skill-level">Expert</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-header">
                  <span className="skill-name">Laravel / PHP</span>
                  <span className="skill-level">Expert</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "93%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-header">
                  <span className="skill-name">Node.js / Express</span>
                  <span className="skill-level">Expert</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-header">
                  <span className="skill-name">PostgreSQL / MongoDB</span>
                  <span className="skill-level">Expert</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-header">
                  <span className="skill-name">TypeScript</span>
                  <span className="skill-level">Comfort</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-header">
                  <span className="skill-name">RESTful API Design</span>
                  <span className="skill-level">Expert</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="skill-row">
                <div className="skill-header">
                  <span className="skill-name">Python / AI Agents</span>
                  <span className="skill-level">Familiar</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: "62%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="s-section">
            <div className="s-label">Technologies</div>
            <div className="tech-tags">
              <span className="tech-tag">Redux</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">VPS</span>
              <span className="tech-tag">Vercel</span>
              <span className="tech-tag">Git</span>
              <span className="tech-tag">Postman</span>
              <span className="tech-tag">OOP</span>
              <span className="tech-tag">DSA</span>
              <span className="tech-tag">Netlify</span>
              <span className="tech-tag">XAMPP</span>
            </div>
          </div>



          {/* Languages */}
          <div className="s-section">
            <div className="s-label">Languages</div>
            <div className="lang-row">
              <span>Bangla</span>
              <span className="lang-level">Native</span>
            </div>
            <div className="lang-row">
              <span>English</span>
              <span className="lang-level">Professional</span>
            </div>
          </div>


        </aside>

        {/* ░░ MAIN ░░ */}
        <main className="main">
          <div className="main-header">
            <div>
              <h1 className="main-name">Ehaoteshamul Islam Kishor</h1>
              <h2 className="main-designation">Full Stack Developer</h2>
            </div>
          </div>

          {/* Experience */}
          <section>
            <div className="section-title">Experience</div>
            <div className="exp-list">
              {/* Current */}
              <div className="exp-item current">
                <div>
                  <div className="exp-role">Full Stack Developer</div>
                  <div className="exp-company">Fire AI · Betopia Group, Banasree, Dhaka</div>
                </div>
                <div className="exp-date">
                  <div className="current-badge">Current</div>
                  <br />
                  Sep 2025 – Present
                </div>
                <div className="exp-bullets">
                  <div className="exp-bullet">
                    Designed backend systems — database architecture, APIs, and AI agent
                    integrations into scalable applications.
                  </div>
                  <div className="exp-bullet">
                    Led end-to-end project execution including client communication, requirement
                    analysis, and final delivery.
                  </div>
                  <div className="exp-bullet">
                    Managed deployment and maintenance on VPS servers ensuring secure, optimized
                    production environments.
                  </div>
                  <div className="exp-bullet">
                    Mentored a dev team, delivering 30+ projects with modern AI tools and
                    streamlined workflows.
                  </div>
                </div>
              </div>

              {/* Eclipse */}
              <div className="exp-item">
                <div>
                  <div className="exp-role">Full Stack Developer</div>
                  <div className="exp-company">Eclipse Intellitech Limited, Banasree, Dhaka</div>
                </div>
                <div className="exp-date">Aug 2023 – Sep 2025</div>
                <div className="exp-bullets">
                  <div className="exp-bullet">
                    Built a fully functional POS system (Laravel + React) with inventory
                    management, sales tracking, and supplier modules.
                  </div>
                  <div className="exp-bullet">
                    Developed a scalable e-commerce platform with payment gateway integration and
                    customer review systems.
                  </div>
                  <div className="exp-bullet">
                    Leveraged Next.js, Redux, and RESTful APIs to optimize performance and data
                    communication across projects.
                  </div>
                  <div className="exp-bullet">
                    Served as Team Lead — overseeing planning, task delegation, and code quality
                    across multiple client deliverables.
                  </div>
                </div>
              </div>

              {/* E-Learning */}
              <div className="exp-item">
                <div>
                  <div className="exp-role">Web Developer</div>
                  <div className="exp-company">E-Learning & Earning LTD, Kallyanpur, Dhaka</div>
                </div>
                <div className="exp-date">Dec 2022 – Jul 2023</div>
                <div className="exp-bullets">
                  <div className="exp-bullet">
                    Developed dynamic websites using the MERN stack across industries — blogs,
                    agencies, restaurants, and e-commerce.
                  </div>
                  <div className="exp-bullet">
                    Built and integrated RESTful APIs for seamless frontend–backend data
                    communication.
                  </div>
                  <div className="exp-bullet">
                    Ensured optimal performance, responsiveness, and scalability across all
                    deployed web applications.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <div className="section-title">Featured Projects</div>
            <div className="project-grid">
              <div className="project-card">
                <div className="project-name">🛒 Glowthentic E-Commerce</div>
                <div className="project-desc">
                  Full-stack e-commerce platform with dynamic search, advanced filtering, cart,
                  checkout, wishlist, blog, and combo order management. Led team to delivery.
                </div>
                <div className="project-links">
                  <a href="https://glowthentic.store/" target="_blank" rel="noreferrer" className="proj-link">
                    <ExternalLink size={12} /> Live
                  </a>
                  <a href="https://github.com/eildev/Glowthentic-Backend" target="_blank" rel="noreferrer" className="proj-link">
                    <Github size={12} /> Backend
                  </a>
                  <a href="https://github.com/eildev/Glowthentic-e-commerce" target="_blank" rel="noreferrer" className="proj-link">
                    <Github size={12} /> Frontend
                  </a>
                </div>
                <div className="project-stack">
                  <span className="stack-pill">Laravel</span>
                  <span className="stack-pill">React</span>
                  <span className="stack-pill">Redux</span>
                  <span className="stack-pill">MySQL</span>
                  <span className="stack-pill">RESTful API</span>
                </div>
              </div>
              <div className="project-card">
                <div className="project-name">🧾 Electro POS System</div>
                <div className="project-desc">
                  Sophisticated POS software built from scratch with inventory management, sales
                  tracking, and customer management.
                  <div className="project-creds">
                    <span>Admin: demoadmin@gmail.com</span>
                    <span>Pass: 12345678</span>
                  </div>
                </div>
                <div className="project-links">
                  <a href="https://demo.eclipseposapp.com/login" target="_blank" rel="noreferrer" className="proj-link">
                    <ExternalLink size={12} /> Live
                  </a>
                  <a href="https://github.com/eildev/Electro-POS" target="_blank" rel="noreferrer" className="proj-link">
                    <Github size={12} /> Repo
                  </a>
                </div>
                <div className="project-stack">
                  <span className="stack-pill">Laravel</span>
                  <span className="stack-pill">React</span>
                  <span className="stack-pill">MySQL</span>
                  <span className="stack-pill">RESTful API</span>
                </div>
              </div>
            </div>
          </section>




        </main>
      </div>
    </div>
  );
}
