import React, { useState } from 'react';
import './TermsPage.css';

function TermsPage({ onAgree, darkMode }) {
  const [response, setResponse] = useState(null); // null, 'agree', or 'disagree'

  const handleAgree = () => {
    setResponse('agree');
    setTimeout(onAgree, 800); // let the transition happen
  };

  const handleDisagree = () => {
    setResponse('disagree');
  };

  return (
    <div className={`terms-page ${darkMode ? 'dark' : ''}`}>
      {response === 'disagree' ? (
        <div className="bye-message">
          <h1>😢 Bye Then!</h1>
          <p>Looks like we can’t continue without your agreement. Take care and have a meme-tastic day!</p>
        </div>
      ) : (
        <>
          <h1>📜 Terms & Privacy Policy</h1>

          <section>
            <h2>1. Terms of Use</h2>
            <p>
               This website is a personal portfolio for Dharun Kannan. Content such as text, memes, code, and designs are owned by Dharun. 
               Don't copy or misuse it. This site is just for showcasing — not a business platform.
               You’re free to scroll, smile, cringe, and maybe get inspired.But copying content without credit? Nah dawg. That’s a no-no.
        
            </p>
          </section>

          <section>
            <h2>2. Acceptable Use</h2>
            <p>
            Don’t spam the 'Ask Me Anything' form unless you're asking truly unhinged but interesting questions. 
            Don't hack me either — I’m broke and all you’ll find is memes and one unpaid AWS bill.
            </p>
          </section>

          <section>
            <h2>3. Privacy Policy</h2>
            <p>
              This site doesn’t track you. No cookies, no creepy analytics, no popups asking for your
          soul. The only info I get is what you type in the form — and I might laugh at it, not sell
          it. You're safe.
            </p>
          </section>

          <section>
            <h2>4. Contact</h2>
            <p>
              For any questions about this policy, feel free to contact me through the contact section
          of this site. But I might not be response.
            </p>
          </section>

          <div className="agree-wrapper">
            <button className="agree-button" onClick={handleAgree}>
              I Agree, Let's Go!
            </button>
            <button className="disagree-button" onClick={handleDisagree}>
               I Disagree
            </button>
          </div>
        </>
      )}
      {response !== 'disagree' && (
  <footer className="footer">
    <img src="/assets/logo.png" alt="logo" className="footer-logo" />
     <p className="in-progress-msg">
    This site is still a work in progress. Thanks for your patience!
  </p>
    <p>© {new Date().getFullYear()} Dharun Kannan. All rights reserved.</p>
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🔝 Back to Top</button>
    <p className="quote">“Not UnderQualified – Just UnderUtilized”</p>
  </footer>
)}

    </div>
  );
}




export default TermsPage;
