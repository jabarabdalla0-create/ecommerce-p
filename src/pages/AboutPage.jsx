import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero"><div className="page-shell"><p className="eyebrow"><span className="eyebrow-dot" /> THIS IS JABAR SPORT</p><h1>FOR THE<br />LOVE OF THE<br /><span>GAME.</span></h1><p>Sport brings people together. We make the gear that helps you show up for it.</p></div><img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1700&q=90" alt="Football match under the lights" /></section>
      <section className="about-story page-shell"><p className="eyebrow">WHY WE'RE HERE</p><h2>Not just for the big moments.<br /><span>For all the ones that lead up to them.</span></h2><div className="about-story-copy"><p>Jabar Sport started with a simple idea: good gear should help more people enjoy the game. The pickup match after work. The first run before sunrise. The team that feels like family.</p><p>We bring together dependable sportswear, football boots, sneakers, and match-day essentials for people who play because they love to. No big talk. Just good kit, picked with care.</p><Link to="/shop" className="text-link">FIND YOUR GEAR <Icon name="arrow" size={16} /></Link></div></section>
      <section className="about-values"><div><span>01</span><h3>Made to move.</h3><p>Comfort and performance for the real world: training, playing, and everything in between.</p></div><div><span>02</span><h3>For everyone.</h3><p>From the first touch to the hundredth session, every kind of player belongs here.</p></div><div><span>03</span><h3>Keep it going.</h3><p>We look for pieces you can reach for again and again, season after season.</p></div></section>
      <div className="about-cta"><p className="eyebrow">THE NEXT PLAY IS YOURS</p><h2>Let's get out there.</h2><Link className="button button--dark" to="/shop">SHOP JABAR SPORT <Icon name="arrow" size={17} /></Link></div>
    </div>
  );
}
