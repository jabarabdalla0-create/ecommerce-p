import { products } from '../../data/products.js';
import SectionHeading from '../SectionHeading.jsx';
import ProductGrid from '../products/ProductGrid.jsx';

export default function FeaturedProducts() {
  return <section className="featured-section page-section"><SectionHeading kicker="THE STARTING LINEUP" title="Game-day essentials." link="/shop" linkText="SHOP EVERYTHING" /><ProductGrid products={products.slice(0, 4)} /></section>;
}
