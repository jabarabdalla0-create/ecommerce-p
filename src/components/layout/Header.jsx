import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import BrandMark from '../BrandMark.jsx';
import Icon from '../Icon.jsx';

const navLinks = [
  { to: '/shop', label: 'Shop all' },
  { to: '/shop/boots', label: 'Football boots' },
  { to: '/shop/sneakers', label: 'Sneakers' },
  { to: '/shop/shirts', label: 'Shirts' },
  { to: '/about', label: 'Our story' },
];

export default function Header() {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const submitSearch = (event) => {
    event.preventDefault();
    window.location.href = `/shop${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`;
  };

  return (
    <>
      <header className="site-header">
        <button className="icon-button menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}><BrandMark /></Link>
        <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => <NavLink key={link.to + link.label} to={link.to} end={link.to === '/shop'} onClick={() => setMenuOpen(false)}>{link.label}</NavLink>)}
          <NavLink className="mobile-nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
        <div className="header-actions">
          <button className="icon-button search-toggle" aria-label="Search products" onClick={() => setSearchOpen(!searchOpen)}><Icon name={searchOpen ? 'close' : 'search'} /></button>
          <Link to="/cart" className="cart-link" aria-label={`Shopping bag, ${count} items`}><Icon name="bag" /><span className="cart-label">Bag</span><span className="cart-count">{count}</span></Link>
        </div>
      </header>
      {searchOpen && <form className="search-panel" onSubmit={submitSearch}><Icon name="search" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the collection" aria-label="Search products" /><button type="submit" className="text-link">SEARCH <Icon name="arrow" size={16} /></button></form>}
    </>
  );
}
