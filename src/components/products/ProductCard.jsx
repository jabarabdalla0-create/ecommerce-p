import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import Icon from '../Icon.jsx';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const addQuickly = (event) => {
    event.preventDefault();
    addItem(product, product.sizes[0]);
  };

  return (
    <article className="product-card">
      <Link className="product-image-wrap" to={`/product/${product.id}`}>
        <img src={product.image} alt={product.imageAlt} loading="lazy" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button className="quick-add" onClick={addQuickly} aria-label={`Add ${product.name} to your bag`}><Icon name="plus" size={19} /><span>QUICK ADD</span></button>
      </Link>
      <div className="product-card-meta"><p>{product.categoryLabel}</p><p>{product.color}</p></div>
      <div className="product-card-bottom"><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link><span>${product.price}</span></div>
    </article>
  );
}
