import React, { useState } from 'react';


import './App.css';
import CtrlLol from './CtrlLol'; // meme page


function App() {
const [darkMode, setDarkMode] = useState(false);
  const [showCtrlLol, setShowCtrlLol] = useState(false);

  // If meme mode is ON, show that component only
  if (showCtrlLol) {
   return (
  <CtrlLol
  goBack={() => setShowCtrlLol(false)}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
);
  }
  return (
<div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="header">

<header className="header">
  <img src="/assets/profile.jpg" alt="Profile" className="profile-pic" />
  <h1>Dharun Kannan</h1>
  <p className="tagline">
    Engineer by profession, designer by passion, sarcastic by default
  </p>
  <button onClick={() => alert('🎉 Surprise! My birthday is July 5th, 1999')}>
    Reveal Birthday 🎂
  </button>
  <button onClick={() => setDarkMode(!darkMode)}>
    Toggle {darkMode ? 'Light' : 'Dark'} Mode 🌗
  </button>
</header>


      </header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <span className="meme-easter-egg" onClick={() => setShowCtrlLol(true)}>🤫</span>
      </nav>

      <section id="about">
        <h2>About Me</h2>
        <p>Quick learner working unfortunately in NOC and transitioning to cloud security. I explore tech, watch reels, design graphics, and serve sarcasm daily. Sometimes I get possessive or angry — human things.</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
 <ul>
          <li>AWS • Krutrim • Azure </li>
          <li>Cloud & IT Infrastructure • Server & Network Monitoring • Incident & Escalation Management</li>
          <li>OP Manager • Zabbix • Grafana • Observium • Nagios</li>
          <li>Openstack • Kubernetes • Docker</li>
          <li>Operations Support 24x7 • Cloud Security (Learning AWS, Azure,)</li>
 </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <h3>Portfolio Website Project (This One!)</h3>
        <p>
          Designed and built a personal portfolio with HTML, CSS, and JavaScript — hosted on AWS.<br/>
          Includes live content sections like About, Gallery, and an Ask Me form.<br/>
          <strong>Tools:</strong> HTML, CSS, JS, AWS EC2
        </p>
	<h3>Final Year Project</h3>
        <p>
	  “Kadaila Vangune… so therla.”
	</p>
      

      </section>
 <section id="experience">
      <h2>Work Experience</h2>
      <div>
        <h3>Aaptteknous – Parent Company-time</h3>
        <p>Bangalore • Apr 2024 – Present</p>
        <p><em>“Pesama Inga join pannamaiye irundhu irukalam… inga onnum learn panna mudila. Just alerts, escalations, and occasional existential crisis.”</em></p>
         <ul>
          <h3>OLA Krutrim – Full-time (On-site)-NOC-KCC Engineer</h3>
          <p>Bangalore • Apr 2024 – Present</p>
	  <li>Core Infra Monitoring</li>
          <li>Cloud VM/Node Monitoring, Ceph, LB</li>
	  <li>Krutrim Command Center</li>
          <li>Krutrim Support</li>
          <li>Internet support – PAN India OLA EC/SDC/WS</li>
          
          <li>24x7 Ops + Escalation Handling</li>
         </ul>
        <p>Tools: Zabbix, OP Manager, Grafana</p>
        <h4>Previous: Wipro Projects – WIN, CCLG, KPM</h4>
        <p>Used Observium, Nagios for monitoring & support</p>
      </div>
      <div>
        <h3>ITSA Solutions – Network Engineer</h3>
        <p>Chennai • Jan 2023 – Apr 2024</p>
        <p><em>“Nalla dha pochu… but not enough. Gained solid hands-on experience, but something was always missing.”</em></p>
      </div>
      <div>
        <h3>Sutherland – CS Associate</h3>
        <p>Chennai • Aug 2022 – Oct 2022</p>
        <p><em>“Landed through campus placement. Stayed for the free AC. Left for my sanity (Edhuku??)”</em></p>
      </div>
    </section>

    <section id="education">
      <h2>Education</h2>
       <ul>
        <li>BE – CSE, Selvam College of Technology, Namakkal (2018–2022), 7.5 CGPA</li>
        <li>HSC – Trinity Academy, Namakkal (2015–2017) – “Marks confidential. But survived and upgraded to Engineering.”</li>
        <li>SSLC – The Spectrum Academy, Namakkal (2003–2015), 87.6%</li>
       </ul>
    </section>
    
    <section id="goals">
      <h2>Goals I'm Manifesting</h2>
       <ul>
        <li><input type="checkbox" disabled /> Get certified in Cloud Security</li>
	<li><input type="checkbox" disabled /> Build a security dashboard</li>
	<li><input type="checkbox" disabled /> Become the guy who actually understands DNS</li>

       </ul>
    </section>



      <section id="gallery">
        <h2>Behind the Screens – IRL Gallery</h2>
        <p>[Nalla Pictures Edhum Ipo Ila 🖼️]</p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>📧 Email: dharunkannan055@gmail.com</p>
        <p>📱 WhatsApp: +91 82487 45320</p>
        <p>📞 Phone: +91 82487 45320</p>
        <p>
          🔗 <a href="https://www.linkedin.com/in/dharunkannan" target="_blank" rel="noreferrer">LinkedIn</a> |
          <a href="https://www.instagram.com/dharunkd__" target="_blank" rel="noreferrer"> Instagram</a> |
          GitHub, Website, X – (To be updated)
        </p>
      </section>

      <footer>
        <p>Made with ❤️ by Dharun Kannan</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🔝 Back to Top</button>
    <p class="quote">“Slack online irundha busy nu nenachidatheenga.”</p>
 

      </footer>
    </div>
  );
}

export default App;
