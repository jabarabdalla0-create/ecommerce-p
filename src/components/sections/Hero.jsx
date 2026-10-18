import { Link } from 'react-router-dom';
import Icon from '../Icon.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> BUILT FOR THE MOMENT</p>
        <h1>THE GAME<br />IS <span>YOURS.</span></h1>
        <p className="hero-description">Gear that moves with you. Made for the early sessions, the last-minute goals, and every day in between.</p>
        <div className="hero-actions"><Link className="button button--dark" to="/shop">SHOP THE DROP <Icon name="arrow" size={17} /></Link><Link className="hero-secondary-link" to="/about">THE JABAR STORY</Link></div>
        <div className="hero-footnote"><span className="hero-footnote-line" /><span>IN IT FOR THE LOVE OF THE GAME</span></div>
      </div>
      <div className="hero-visual">
        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=90" alt="Football pitch under stadium lights" />
        <div className="hero-image-shade" />
        <div className="hero-image-caption"><span>01 / 03</span><span>OWN YOUR NEXT PLAY <Icon name="arrow" size={15} /></span></div>
        <div className="hero-stamp"><span>PLAY<br />WITH<br />PURPOSE</span><span className="stamp-star">✳</span></div>
      </div>
      <div className="hero-bottom"><span>PERFORMANCE WITH PERSONALITY</span><span>SCROLL TO EXPLORE ↓</span><span>EST. FOR EVERYDAY ATHLETES</span></div>
    </section>
  );
}
