import { Link } from 'react-router-dom';
import { categories } from '../../data/products.js';
import SectionHeading from '../SectionHeading.jsx';
import Icon from '../Icon.jsx';

export default function CategoryGrid() {
  return (
    <section className="category-section page-section">
      <SectionHeading kicker="FIND YOUR GAME" title="Made for your next move." link="/shop" linkText="ALL GEAR" />
      <div className="category-grid">{categories.map((category, index) => (
        <Link className={`category-card category-card--${index + 1}`} to={`/shop/${category.slug}`} key={category.slug}>
          <img src={category.image} alt={category.imageAlt} loading="lazy" />
          <span className="category-count">{category.count}</span>
          <span className="category-title">{category.title}<Icon name="arrow" size={18} /></span>
        </Link>
      ))}</div>
    </section>
  );
}
