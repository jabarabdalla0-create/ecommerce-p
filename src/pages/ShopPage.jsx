import { useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid.jsx';
import { categories, products } from '../data/products.js';
import Icon from '../components/Icon.jsx';

export default function ShopPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim().toLowerCase();
  const selectedCategory = categories.find((item) => item.slug === category);
  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesSearch = !query || `${product.name} ${product.categoryLabel} ${product.color}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  }), [category, query]);

  const title = query ? `Results for “${searchParams.get('q')}”` : selectedCategory?.title || 'The collection';
  return (
    <div className="shop-page page-shell">
      <div className="breadcrumb"><Link to="/">HOME</Link><span>/</span><span>SHOP</span>{selectedCategory && <><span>/</span><span>{selectedCategory.title.toUpperCase()}</span></>}</div>
      <div className="shop-heading"><div><p className="eyebrow">GEAR FOR EVERY KIND OF GAME</p><h1>{title}<span className="heading-period">.</span></h1><p className="shop-subtitle">{query ? 'A few good options for your next session.' : 'Good kit, made to get out there.'}</p></div><span className="result-count">{String(visibleProducts.length).padStart(2, '0')} PRODUCTS</span></div>
      <div className="shop-filters"><div className="category-tabs"><Link className={!category ? 'is-active' : ''} to="/shop">ALL</Link>{categories.map((item) => <Link key={item.slug} className={category === item.slug ? 'is-active' : ''} to={`/shop/${item.slug}`}>{item.title.toUpperCase()}</Link>)}</div><span className="sort-label">CURATED FOR YOU <Icon name="chevron" size={15} /></span></div>
      {visibleProducts.length ? <ProductGrid products={visibleProducts} /> : <div className="empty-results"><p>NO MATCHES JUST YET</p><h2>Try another search.</h2><Link className="button button--dark" to="/shop">VIEW ALL GEAR <Icon name="arrow" size={16} /></Link></div>}
      <p className="shop-endnote">THOUGHTFULLY PICKED. READY FOR WHAT'S NEXT.</p>
    </div>
  );
}
