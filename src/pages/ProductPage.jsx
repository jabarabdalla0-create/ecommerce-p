import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findProduct, products } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import Icon from '../components/Icon.jsx';

function ProductBreadcrumb({ product }) {
  return (
    <div className="breadcrumb">
      <Link to="/">HOME</Link>
      <span>/</span>
      <Link to={`/shop/${product.category}`}>{product.categoryLabel.toUpperCase()}</Link>
      <span>/</span>
      <span>{product.name.toUpperCase()}</span>
    </div>
  );
}

function ProductOptions({ product, size, setSize, onAdd, added }) {
  return (
    <div className="product-info">
      <p className="eyebrow">{product.categoryLabel.toUpperCase()} / JABAR SPORT</p>
      <h1>{product.name}<span className="heading-period">.</span></h1>
      <p className="product-color">{product.color}</p>
      <p className="product-price">${product.price}<span> USD</span></p>
      <p className="product-description">{product.description}</p>

      <div className="size-heading">
        <span>SELECT SIZE</span>
        <a href="mailto:hello@jabarsport.com">SIZE GUIDE</a>
      </div>
      <div className="size-options">
        {product.sizes.map((option) => (
          <button
            key={option}
            onClick={() => setSize(option)}
            className={size === option ? 'is-selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>

      <button className="button button--dark add-to-bag" onClick={onAdd}>
        {added ? 'ADDED TO YOUR BAG' : 'ADD TO BAG'}
        <span>${product.price}</span>
        {added && <Icon name="check" size={17} />}
      </button>
      <p className="delivery-note"><span /> IN STOCK — READY TO SHIP</p>

      <div className="product-accordion">
        <details open>
          <summary>THE DETAILS <Icon name="plus" size={16} /></summary>
          <p>{product.description} Designed to be worn hard and enjoyed often.</p>
        </details>
        <details>
          <summary>DELIVERY & RETURNS <Icon name="plus" size={16} /></summary>
          <p>Free delivery on orders over $100. Returns accepted within 30 days of delivery.</p>
        </details>
      </div>
    </div>
  );
}

function ProductNotFound() {
  return (
    <div className="empty-results page-shell">
      <p>PRODUCT NOT FOUND</p>
      <h2>That one's gone off the pitch.</h2>
      <Link className="button button--dark" to="/shop">
        BACK TO SHOP <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}

export default function ProductPage() {
  const { productId } = useParams();
  const product = findProduct(productId);
  const { addItem } = useCart();
  const [size, setSize] = useState(product?.sizes[0] || '');
  const [added, setAdded] = useState(false);

  if (!product) return <ProductNotFound />;

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  const addToBag = () => {
    addItem(product, size);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="product-page page-shell">
      <ProductBreadcrumb product={product} />
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.imageAlt} />
          <span className="product-image-number">
            JS / {product.category.slice(0, 2).toUpperCase()}—0{products.indexOf(product) + 1}
          </span>
        </div>
        <ProductOptions
          product={product}
          size={size}
          setSize={setSize}
          onAdd={addToBag}
          added={added}
        />
      </div>

      {related.length > 0 && (
        <section className="related-products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">KEEP YOUR GAME MOVING</p>
              <h2>You might like.</h2>
            </div>
            <Link className="text-link" to={`/shop/${product.category}`}>
              MORE {product.categoryLabel.toUpperCase()} <Icon name="arrow" size={16} />
            </Link>
          </div>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
