import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function NotFoundPage() {
  return <div className="not-found page-shell"><p className="eyebrow">OFFSIDE</p><h1>404<span>.</span></h1><p>Looks like this page took a wrong turn on the way to the pitch.</p><Link className="button button--dark" to="/">BACK TO HOME <Icon name="arrow" size={17} /></Link></div>;
}
