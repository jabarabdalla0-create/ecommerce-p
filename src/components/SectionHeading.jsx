import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function SectionHeading({ kicker, title, link, linkText = 'VIEW ALL' }) {
  return <div className="section-heading"><div><p className="eyebrow">{kicker}</p><h2>{title}</h2></div>{link && <Link className="text-link" to={link}>{linkText}<Icon name="arrow" size={16} /></Link>}</div>;
}
