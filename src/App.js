import React, { useState, useEffect } from 'react';
import TermsPage from './TermsPage';
import Loading from './Loading'; 
import './App.css';
import CtrlLol from './CtrlLol';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showCtrlLol, setShowCtrlLol] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showBirthday, setShowBirthday] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // loading screen duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!agreedToTerms) {
    return (
      <TermsPage
        onAgree={() => {
          setAgreedToTerms(true);
          window.scrollTo({ top: 0, behavior: 'auto' }); // 👈 fix here
        }}
        darkMode={darkMode}
      />
    );
  }

  if (showCtrlLol) {
    return (
      <CtrlLol
        goBack={() => {
          setShowCtrlLol(false);
          window.scrollTo({ top: 0, behavior: 'smooth' }); // optional: scroll back to top after CtrlLol
        }}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    );
  }

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="dark-toggle-wrapper">
        <div className='container'> 
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-dark">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      <header className="header">
        <img src="/assets/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Dharun Kannan</h1>
        <p className="tagline">
          Engineer by profession, designer by passion, sarcastic by default
        </p>
        <button onClick={() => setShowBirthday(true)} className="reveal-btn">
  Reveal Birthday 🎂
</button>

{showBirthday && (
  <div className={`birthday-modal ${darkMode ? 'dark' : ''}`}>
    <div className="birthday-content">
      <p>🎂 My birthday is <strong>July 5, 1999</strong></p>
      <button onClick={() => setShowBirthday(false)} className="close-btn">
        Close
      </button>
    </div>
  </div>
)}

      </header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <span className="meme-easter-egg" onClick={() => setShowCtrlLol(true)}>🤫</span>
      </nav>
      
      <TransitionGroup component="div" className="transition-wrapper">
        <CSSTransition key="about" timeout={500} classNames="fade">
          <section id="about">
            <h2>About Me</h2>
            <p>
              Quick learner working unfortunately in NOC and transitioning to cloud security. I explore tech, watch reels, design graphics, and serve sarcasm daily. Sometimes I get possessive or angry — human things.
            </p>
          </section>
        </CSSTransition>

        <CSSTransition key="skills" timeout={500} classNames="fade">
          <section id="skills">
           <h2>Skills</h2>
<ul>
  <li><strong>Cloud Platforms:</strong> AWS <em>(Hands-on)</em>, Azure <em>(Learning)</em>, Krutrim <em>(Familiar)</em>.</li>
  <li><strong>Cloud & IT Infrastructure:</strong> Experience in Cloud Infrastructure Monitoring, Server & Network Operations.</li>
  <li><strong>Monitoring Tools:</strong> OP Manager, Zabbix, Grafana, Observium, Nagios. </li>
  <li><strong>Cloud Technologies:</strong> Basic understanding of OpenStack, Kubernetes, Docker.</li>
  <li><strong>Operating Systems:</strong> Linux <em>(Hands-on)</em>, Windows Server.</li>
  <li><strong>Cloud Security:</strong> Learning AWS IAM, VPC Security, encryption, Azure Security Center, compliance standards. <br />
  <em>Planning to deep dive further into Cloud Security — so I can officially list it as a core skill. 😄🔐</em></li>
  <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript, and React — hands-on through personal projects.</li>
  <li><strong>Programming:</strong> Java & Python <em>(Beginner)</em>.</li>
  <li><strong>Web Servers & Tools:</strong> Basic knowledge of NGINX for serving and proxy setups.</li>
  <li><strong>Operations Support:</strong> Providing 24x7 Production Support, Incident Management and Escalation Handling.</li>
</ul>

          </section>
        </CSSTransition>

        <CSSTransition key="projects" timeout={500} classNames="fade">
          <section id="projects">
            <h2>Projects</h2>
            <h3>Portfolio Website Project (This One!)</h3>
            <p>
             <p>
             Designed and developed a personal portfolio using React, with custom CSS styling, a responsive layout, and interactive components powered by JavaScript.<br />
             Deployed on AWS EC2 with GitHub integration for automated deployment via webhooks.<br />
             Features dynamic sections like About, Gallery, and an Ask Me Anything form integrated with EmailJS to send submissions directly to email inboxes.<br />
             Includes modern UI features such as dark mode, page animations, loading screen, and a stamp-style T&C agreement.<br />
             <strong>Tools:</strong> React, CSS, JavaScript, GitHub, EmailJS, AWS EC2
            </p>

            </p>
            <h3>Final Year Project</h3>
            <p>“Kadaila Vangune… so therla.”</p>
          </section>
        </CSSTransition>

        <CSSTransition key="experience" timeout={500} classNames="fade">
          <section id="experience">
            <h2>Work Experience</h2>
            <div>
              <ul>
                <h3>OLA Krutrim – Full-time (On-site) | System Engineer (NOC & KCC) </h3>
                <p><em>Bangalore • Apr 2024 – Present</em></p>
                <li>Core Infrastructure Monitoring : All Servers and Networks of OLA Services.  </li>
                <li>Krutrim Cloud Services : Cloud VMs, Ceph storage, Load Balancers, Node health.</li>
                <li>Krutrim Command Center.</li>
                <li>Krutrim Support.</li>
                <li>Internet support – PAN India OLA EC/SDC/WS.</li>
                <li>24x7 Ops + Escalation Handling.</li>
              </ul>
              <p><strong>Tools:</strong> Zabbix, OP Manager, Grafana, ServiceNow, JIRA.</p>
              <h4>Previous Projects: Wipro – WIN, CCLG, KPM | System Engineer</h4>
              <li>Conducted system health checks, log analysis, and daily monitoring of critical servers.</li>
              <li>Managed scheduled patching, backup verification, and software deployments.</li>
              <li>Administered user access control, Active Directory permissions, and server cleanup routines.</li>
              <li>Hands-on with incident ticketing, escalation flows, and stakeholder communication.</li>
              <p><strong>Tools:</strong> Observium, Nagios, Zammad.</p>
              <h3>Aaptteknous – Parent Company</h3>
              <p><em>Bangalore • Apr 2024 – Present</em></p>
              <p><em>“Honestly, should’ve just skipped joining here... couldn’t really learn anything. Just alerts, escalations, and the occasional existential crisis.”</em></p>

            </div>
            <div>
              <h3>ITSA Solutions | Network Engineer</h3>
              <p><em>Chennai • Jan 2023 – Apr 2024</em></p>
              <li>Managed and maintained network devices like routers, switches, and firewalls.</li>
              <li>Configured VLANs, VPNs, and security policies for safe and efficient communication</li>
              <li>Monitored network performance and fixed issues to reduce downtime.</li>
              <li>Implemented firewall rules and security measures like IDS/IPS.</li>
              <li>Worked with teams to improve and scale network infrastructure.</li>
              <li>Documented network setups and troubleshooting steps.</li>
              <p><em>“Nalla dha pochu… but not enough. Gained solid hands-on experience, but something was always missing.”</em></p>
            </div>
            <div>
              <h3>Sutherland | CS Associate</h3>
              <p><em>Chennai • Aug 2022 – Oct 2022</em></p>
              <p>Worked in the Amazon WFSCO process at Sutherland and gained expertise in:</p>
              <li>Customer Support & Query Resolution.</li>
              <li>Workforce Staffing & Scheduling.</li>
              <li>Effective Communication & Problem-Solving.</li>
              <li>CRM Tools & Data Management.</li>
              <li>Process Optimization & Compliance.</li>
              <p><strong>Tools & Platforms:</strong> Salesforce CRM, Amazon WorkSpaces.</p>
              <p><em>“Landed through campus placement. Stayed for the free AC. Unfortunately had to leave due to the situation… (Edhuku??)”</em></p>
            </div>
          </section>
        </CSSTransition>

        <CSSTransition key="education" timeout={500} classNames="fade">
          <section id="education">
            <h2>Education</h2>
            <ul>
              <li>B.E in Computer Science and Engineering - Selvam College of Technology, Namakkal (2018–2022) - <em>7.5 CGPA</em></li>
              <li>HSC – Trinity Academy, Namakkal (2015–2017) - <em>“Marks confidential. But survived and upgraded to Engineering.”</em> </li>
              <li>SSLC – The Spectrum Academy, Namakkal (2014–2015) - <em>87.6%</em></li>
            </ul>
          </section>
        </CSSTransition>

        <CSSTransition key="goals" timeout={500} classNames="fade">
          <section id="goals">
            <h2>Goals I'm Manifesting</h2>
            <ul>
              <li><input type="checkbox" disabled /> Get certified in Cloud Security</li>
              <li><input type="checkbox" disabled /> Build a security dashboard</li>
              <li><input type="checkbox" disabled /> Become the guy who actually understands DNS</li>
            </ul>
          </section>
        </CSSTransition>

        <CSSTransition key="gallery" timeout={500} classNames="fade">
          <section id="gallery">
            <h2>Behind the Screens – IRL Gallery</h2>
            <p>[Nalla Pictures Edhum Ipo Ila 🖼️]</p>
          </section>
        </CSSTransition>

        <CSSTransition key="contact" timeout={500} classNames="fade">
          <section id="contact">
            <h2>Contact Me</h2>
            <p>📧 Email: dharunkannan055@gmail.com</p>
            <p>📞 Phone: +91 82487 45320</p>
            <p>📍 Location : Bangalore, Karnataka, India</p>
            <p>🌐 Website : You're already on my website 😄</p>
            <p className="social-links">
              <a href="https://www.linkedin.com/in/dharunkannan" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a> | 
              <a href="https://github.com/dharunkd-cloud" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a> |
              <a href="https://www.instagram.com/dharunkd__" target="_blank" rel="noreferrer">
                <FaInstagram /> Instagram
              </a> | 
               <a href="https://wa.me/918248745320" target="_blank" rel="noreferrer">
                  <FaWhatsapp /> WhatsApp
              </a>
            </p>
          </section>
        </CSSTransition>
      </TransitionGroup>

      <footer className="footer">
        <img src="/assets/logo.png" alt="logo" className="footer-logo" />
        <p className="in-progress-msg">
          This site is still a work in progress. Thanks for your patience!
        </p>
        <p>© {new Date().getFullYear()} Dharun Kannan. All rights reserved.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🔝 Back to Top</button>
        <p className="quote">“Not UnderQulaified --Just UnderUtilized”</p>
      </footer>
    </div>
  );
}

export default App;
