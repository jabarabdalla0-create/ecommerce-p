import { Link } from 'react-router-dom';
import BrandMark from '../BrandMark.jsx';
import Icon from '../Icon.jsx';

export default function BrandNote() {
  return <section className="brand-note"><BrandMark compact /><div><p className="eyebrow">A LITTLE ABOUT US</p><h2>Sport is better<br />when it brings us <span>together.</span></h2></div><p className="brand-note-copy">Jabar Sport is here for the local legends, the weekend regulars, and anyone who loves the feeling of a game well played.</p><Link to="/about" className="round-link" aria-label="Read our story"><Icon name="arrow" size={20} /></Link></section>;
}
