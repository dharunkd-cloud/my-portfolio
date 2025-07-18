import React, { useEffect, useState } from 'react';
import './CtrlLol.css'; // Make sure this path is correct

const CtrlLol = ({ goBack, darkMode, setDarkMode }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "Slack online irundha busy nu nenachidatheenga.",
    "Ticket assign panna yosikama assign panranga.",
    "Shift time-la irunthum, naa epavum on-call.",
    "Browser tab close pannale – adhu ticket tab.",
    "Ctrl + C life, Ctrl + V expectations.",
    "Rotational shift la rota thaan matter.",
    "Escalation pota life la clarity kedaiyadhu.",
    "Seri ivanuku oru escalation ah potruvom.",
    "Friday late night ticket = full life reset.",
    "LAN port oda bonding thaniya dhan iruku.",
    "Monitoring tools la green na calm, red na alarm.",
    "Boss pesum pothu headphone potruvom – adhu noise cancellation.",
    "Login panni tea kudikardhu, logout panni summary ezhudharadhu."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 5); // 5 memes
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextQuote = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <div className={`ctrl-lol ${darkMode ? 'dark-mode' : ''}`}>
      <h1>CTRL + LOL 🤣</h1>

      {/* Quote Generator */}
      <div className="quote-section">
        <div className="quote">“{quotes[quoteIndex]}”</div>
        <button onClick={nextQuote} className="generate-button">🎲 Generate Quote</button>
      </div>

      {/* Meme Slideshow */}
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

      {/* Footer Note */}
      <div className="footer-note">
        More memes & screenshots coming soon from Dharun's meme vault 💥
      </div>

      {/* Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-dark">
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Back Button */}
      <button onClick={goBack} className="back-button">🔙 Back to Portfolio</button>

      {/* Ask Me Anything Section */}
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
