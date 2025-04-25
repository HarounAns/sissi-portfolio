import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
          <nav>
              <div className="logo">Sissi Yu</div>
              <ul>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
      </header>

      <main>
          <section id="hero">
              {/* Add thin lines container */}
              <div className="hero-lines"></div> 
              
              <div className="hero-content-blocks">
                  {/* Recreate block structure */}
                  <div className="hero-block block-visual">
                      <h1>Visual</h1>
                  </div>
                  <div className="hero-block block-ux">
                      <h1>& UX</h1>
                  </div>
                  <div className="hero-block block-design">
                      <h1>Design</h1>
                  </div>
              </div>
              
              {/* Keep subtitle separate */}
              <p className="subtitle">Blending Multicultural Perspectives into Digital Storytelling</p>
              <a href="#portfolio" className="cta-button">View My Work</a>

              {/* No separate visual image needed if we are using blocks */}
          </section>

          <section id="portfolio">
              <h2>Selected Work</h2>
              <div className="portfolio-grid">
                  {/* Project 1: Breakfast for Dinner */}
                  <div className="portfolio-item">
                      <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Collaboration with laptops" />
                      <h3>Breakfast for Dinner (Mobile Game)</h3>
                      <p>UI/UX design for a mobile game app with playful visuals and data tracking.</p>
                      <a href="#">View Case Study</a> {/* Link to actual case study later */}
                  </div>
                  {/* Project 2: Hippra */}
                  <div className="portfolio-item">
                      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" alt="Modern workspace with devices" />
                      <h3>Hippra (UI/UX Redesign)</h3>
                      <p>Redesigned a medical content platform focusing on clean UI and accessibility.</p>
                      <a href="#">View Case Study</a> {/* Link to actual case study later */}
                  </div>
                  {/* Project 3: Pink Dot */}
                  <div className="portfolio-item">
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Data visualization on screen" />
                      <h3>Pink Dot Campaign Assets</h3>
                      <p>Branding and visual assets for an LGBTQ+ campaign anniversary, including print and digital.</p>
                      <a href="#">View Case Study</a> {/* Link to actual case study later */}
                  </div>
              </div>
          </section>

          <section id="about">
              <h2>About Me</h2>
              <div className="about-content">
                  {/* Updated About snippet based on her philosophy */}
                  <p>I engage with user-centered design through my multicultural perspective, weaving unique cultural elements into storytelling to create extraordinary digital experiences.</p>
                  <a href="#">Learn More</a> {/* Link to a full About page eventually */}
              </div>
          </section>

          <section id="contact">
              <h2>Get In Touch</h2>
              <p>Interested in collaborating or have a question? Reach out!</p>
              <a href="mailto:zxyu@gwu.edu" className="email-link">zxyu@gwu.edu</a>
              {/* Add LinkedIn link later */}
          </section>
      </main>

      <footer>
          <p>&copy; 2024 Sissi Yu. All rights reserved.</p>
      </footer>
    </>
  );
}
