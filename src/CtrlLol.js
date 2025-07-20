import React, { useEffect, useState } from 'react';
import './CtrlLol.css';

const quotes = [
  "  Slack online irundha busy nu nenachidatheenga.",
  " Ticket assign panna yosikama assign panranga.",
  " Shift time-la irunthum, naa epavum on-call.",
  " Browser tab close pannale – adhu ticket tab.",
  " Ctrl + C life, Ctrl + V expectations.",
  " Rotational shift la rota thaan matter.",
  " Escalation pota life la clarity kedaiyadhu.",
  " Seri ivanuku oru escalation ah potruvom.",
  " Friday late night ticket = full life reset.",
  " LAN port oda bonding thaniya dhan iruku.",
  " Monitoring tools la green na calm, red na alarm.",
  " Boss pesum pothu headphone potruvom – adhu noise cancellation.",
  " Login panni tea kudikardhu, logout panni summary ezhudharadhu."
];

const CtrlLol = ({ goBack, darkMode, setDarkMode }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');

  // Slide show rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Typewriter effect - FIXED
  useEffect(() => {
    const currentQuote = quotes[quoteIndex] || ''; // always valid string
    setTypewriterText(''); // clear before starting

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < currentQuote.length) {
        setTypewriterText((prev) => prev + currentQuote.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval); // stop typing
      }
    }, 40);

    return () => clearInterval(typeInterval); // cleanup when quoteIndex changes
  }, [quoteIndex]);

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div className={`ctrl-lol ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-dark">
        {darkMode ? '☀️' : '🌙'}
      </button>

      <h1>CTRL + LOL 🤣</h1>

      <div className="quote-section">
        <div className="quote">“{typewriterText}”</div>
        <button onClick={nextQuote} className="generate-button">🎲 Generate Quote</button>
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
                <input type="text" name="name" placeholder="Your Name" required />
                <textarea name="message" placeholder="Your Question" required rows="4" />
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
