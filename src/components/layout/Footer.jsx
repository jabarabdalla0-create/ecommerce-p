import { Link } from 'react-router-dom';
import BrandMark from '../BrandMark.jsx';
import Icon from '../Icon.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-column">
          <Link to="/" className="footer-logo"><BrandMark light /></Link>
          <p>Good gear. Good people.<br />Better game days.</p>
          <a href="https://instagram.com" className="social-link" aria-label="Instagram"><Icon name="instagram" /></a>
        </div>
        <div className="footer-column"><h3>Explore</h3><Link to="/shop">Shop all</Link><Link to="/shop/boots">Football boots</Link><Link to="/shop/sneakers">Sneakers</Link><Link to="/shop/shirts">Shirts & kits</Link><Link to="/shop/balls">Match balls</Link></div>
        <div className="footer-column"><h3>Jabar Sport</h3><Link to="/about">Our story</Link><Link to="/contact">Contact us</Link><a href="mailto:hello@jabarsport.com">Shipping & returns</a><a href="mailto:hello@jabarsport.com">FAQs</a></div>
        <div className="footer-newsletter"><p className="eyebrow">THE JABAR SIDELINE</p><h2>Good things<br />are in play.</h2><p>New drops, game-day notes, and 10% off your first order.</p><form onSubmit={(event) => { event.preventDefault(); event.currentTarget.reset(); }}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required /><button aria-label="Subscribe"><Icon name="arrow" /></button></form></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Jabar Sport</span><span>Made for the love of the game.</span><span>Terms&nbsp;&nbsp; Privacy</span></div>
    </footer>
  );
}
