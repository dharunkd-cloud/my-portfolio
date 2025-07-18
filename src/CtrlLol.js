import React, { useEffect, useState } from 'react';
import './CtrlLol.css'; // This should match exactly

const CtrlLol = ({ goBack, darkMode, setDarkMode }) => {
const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 5); // if 5 memes
    }, 3000);
    return () => clearInterval(interval);

  }, []);

  return (
  <div className={`ctrl-lol ${darkMode ? 'dark-mode' : ''}`}>
      <h1>CTRL + LOL 🤣</h1>

      <div className="quote-section">
        <div className="quote">“Slack online irundha busy nu nenachidatheenga.”</div>
        <div className="quote">“Ticket assign panna yosikama assign panranga.”</div>
        <div className="quote">“Shift time-la irunthum, naa epavum on-call.”</div>
        <div className="quote">“Browser tab close pannale – adhu ticket tab.”</div>
        <div className="quote">“Ctrl + C life, Ctrl + V expectations.”</div>
        <div className="quote">“Rotational shift la rota thaan matter.”</div>
        <div className="quote">“Escalation pota life la clarity kedaiyadhu.”</div>
        <div className="quote">“Seri ivanuku oru escalation ah potruvom.”</div>
        <div className="quote">“Friday late night ticket = full life reset.”</div>
        <div className="quote">“LAN port oda bonding thaniya dhan iruku.”</div>
        <div className="quote">“Monitoring tools la green na calm, red na alarm.”</div>
        <div className="quote">“Boss pesum pothu headphone potruvom – adhu noise cancellation.”</div>
        <div className="quote">“Login panni tea kudikardhu, logout panni summary ezhudharadhu.”</div>
      </div>

      <div className="slideshow-container">
        {[1, 2, 3, 4, 5].map((num, idx) => (
          <div
            className="slide"
            key={idx}
            style={{ display: idx === slideIndex ? 'block' : 'none' }}
          >
            <img src={`/assets/memes/meme${num}.jpg`} alt={`Meme ${num}`} />
          </div>
        ))}
      </div>

      <div className="footer-note">
        More memes & screenshots coming soon from Dharun's meme vault 💥
      </div>

  <button onClick={() => setDarkMode(!darkMode)} className="toggle-dark">
    {darkMode ? '☀️ Light' : '🌙 Dark'}
  </button>

	<button onClick={goBack} className="back-button">🔙 Back to Portfolio</button>
<section id="ask" className="ask-section">
  <div className="container">
    <h2>Ask Me Anything</h2>
    <div className="ask-box">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thanks! I’ll get back to you.');
        }}
      >
        <div className="form-inner">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <textarea
            name="message"
            placeholder="Your Question"
            required
            rows="4"
          ></textarea>
          <button type="submit">Send 🚀</button>
        </div>
      </form>
    </div>
  </div>
</section>

    </div>
  );
};



export default CtrlLol;
