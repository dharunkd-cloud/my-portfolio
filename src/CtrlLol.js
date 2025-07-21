import React, { useEffect, useState } from 'react';
import './CtrlLol.css';
import emailjs from 'emailjs-com';

const quotes = [
  "  LeMe ~ Seri ivanuku oru escalation ah potruvom.",
  " Night shift perks: More peace, more coffee, and more existential thoughts at 3AM.",
  " NOC life: Alert comes first, panic later.",
  " SSH-ing into problems I didn't create, at a time I shouldn't be awake.",
  " One does not simply 'restart the server' in production.",
  " Logs say it's fine, user says it's broken. Welcome to tech support!",
  " Cloud is just someone else's computer – and we’re the someone else on-call.",
  " ‘It works in staging’ – famous last words before a live outage.",
  " Downtime doesn’t sleep, and neither do we.",
  " Slack messages hit different at 2:47 AM.",
  " Night shifts are 90% waiting and 10% 'Oh no, everything’s on fire!'",
  " Rotational shift: Where Monday and Sunday both feel illegal.",
  " Monitoring tools la green na calm, red na alarm.",
  " Ctrl + C life, Ctrl + V expectations."
];

const CtrlLol = ({ goBack, darkMode, setDarkMode }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [showModal, setShowModal] = useState(false); // ✅ New: modal toggle state

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex] || '';
    setTypewriterText('');
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < currentQuote.length) {
        setTypewriterText((prev) => prev + currentQuote.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 40);
    return () => clearInterval(typeInterval);
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
<section id="hobbies" className="hobbies-section">
  <h2>Hobbies & Interests</h2>
  <li>🎵 <strong>Music:</strong> Always vibing to playlists — from Lo-fi to Tamil Bass Boosted hits.</li>
  <li>🎬 <strong>Movies & Series:</strong> Comedy, feel-good, and romantic genres — perfect for binge-watching.</li>
  <li>🚍 <strong>Solo Bus Travel:</strong> Front seat, speed, horn sounds, overtaking thrills with 80s hits.</li>
  <li>🍽️ <strong>Foodie:</strong> Love exploring new foods — even though I can’t eat much, tasting is enough! 😄.</li>
  <li>📱 <strong>Instagram Reels:</strong> Watching reels, adding stories, and vibing with trends.</li>
  
</section>
      <button onClick={goBack} className="back-button">🔙 Back to Portfolio</button>

      <section id="ask" className="ask-section">
        <div className="container">
          <h2>Ask Me Anything</h2>
          <div className="ask-box">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const userEmail = formData.get('email');
                const userName = formData.get('name');
                const subject = formData.get('title');
                const message = formData.get('message');

                emailjs.sendForm(
                  'service_cy6zusa',
                  'template_xjey87u',
                  form,
                  'RGaipTVhUOZtLg_pO'
                )
                  .then(() => {
                    return emailjs.send(
                      'service_cy6zusa',
                      'template_tierqje',
                      {
                        name: userName,
                        email: userEmail,
                        title: subject,
                        message: message,
                      },
                      'RGaipTVhUOZtLg_pO'
                    );
                  })
                  .then(() => {
                    setShowModal(true); // ✅ Show modal instead of alert
                  })
                  .catch((err) => {
                    console.error('Something failed ❌', err);
                    alert('Oops! Something went wrong.');
                  });

                form.reset();
              }}
            >
              <div className="form-inner">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="title" placeholder="Subject" required />
                <textarea name="message" placeholder="Your Question" required rows="4" />
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <button type="submit">Send 🚀</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Success Modal */}
      {showModal && (
        <div className="ask-success-modal">
  <div className="ask-success-content">
            <h3>✅ Sent Successfully!</h3>
            <p>Thanks! Your message has been sent. Please check your email 📧</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CtrlLol;
