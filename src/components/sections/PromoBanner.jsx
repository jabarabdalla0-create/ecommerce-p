import { Link } from 'react-router-dom';
import Icon from '../Icon.jsx';

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-image"><img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1300&q=85" alt="Footballer lining up for a kick" loading="lazy" /></div>
      <div className="promo-copy"><p className="eyebrow">YOUR NEXT 90 MINUTES START HERE</p><h2>SHOW UP.<br /><span>STAND OUT.</span></h2><p>From first touch to last whistle. Find the pieces that make every minute count.</p><Link className="button button--lime" to="/shop/boots">FIND YOUR EDGE <Icon name="arrow" size={17} /></Link></div>
      <span className="promo-vertical-label">JABAR SPORT / PLAY EVERY DAY</span>
    </section>
  );
}
