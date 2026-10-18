import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import Icon from '../components/Icon.jsx';

function CartItem({ item, changeQuantity, removeItem }) {
  return (
    <article className="cart-item">
      <Link to={`/product/${item.id}`} className="cart-item-image">
        <img src={item.image} alt={item.imageAlt} />
      </Link>

      <div className="cart-item-info">
        <p className="eyebrow">{item.categoryLabel.toUpperCase()}</p>
        <Link to={`/product/${item.id}`} className="cart-item-title">
          {item.name}
        </Link>
        <p className="cart-item-size">Size: {item.size} <span>·</span> {item.color}</p>

        <div className="quantity-control">
          <button aria-label="Decrease quantity" onClick={() => changeQuantity(item.lineId, -1)}>
            <Icon name="minus" size={14} />
          </button>
          <span>{item.quantity}</span>
          <button aria-label="Increase quantity" onClick={() => changeQuantity(item.lineId, 1)}>
            <Icon name="plus" size={14} />
          </button>
        </div>

        <button className="remove-item" onClick={() => removeItem(item.lineId)}>
          REMOVE
        </button>
      </div>

      <span className="cart-item-price">${item.price * item.quantity}</span>
    </article>
  );
}

function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-bag-icon"><Icon name="bag" size={28} /></div>
      <p className="eyebrow">NOTHING IN THE BAG YET</p>
      <h2>Every great game<br />starts somewhere.</h2>
      <Link className="button button--dark" to="/shop">
        FIND YOUR GEAR <Icon name="arrow" size={17} />
      </Link>
    </div>
  );
}

function OrderSummary({ subtotal }) {
  const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 8;

  return (
    <aside className="order-summary">
      <p className="eyebrow">ORDER SUMMARY</p>
      <div><span>Subtotal</span><span>${subtotal}</span></div>
      <div><span>Shipping</span><span>{shipping ? `$${shipping}` : 'FREE'}</span></div>
      {subtotal < 100 && <p className="shipping-hint">Add ${100 - subtotal} more for free delivery.</p>}
      <div className="summary-total"><strong>Total</strong><strong>${subtotal + shipping}</strong></div>
      <button
        className="button button--dark checkout-button"
        onClick={() => window.alert('Checkout is not connected yet. Your bag is saved for this demo.')}
      >
        CHECK OUT <Icon name="arrow" size={17} />
      </button>
      <p className="secure-note">Free delivery over $100 · Easy 30-day returns</p>
      <Link className="continue-shopping" to="/shop">CONTINUE SHOPPING</Link>
    </aside>
  );
}

export default function CartPage() {
  const { items, subtotal, changeQuantity, removeItem } = useCart();

  return (
    <div className="cart-page page-shell">
      <div className="breadcrumb">
        <Link to="/">HOME</Link><span>/</span><span>YOUR BAG</span>
      </div>

      <div className="cart-heading">
        <div>
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h1>Your bag<span className="heading-period">.</span></h1>
        </div>
        <span>{items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}</span>
      </div>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <CartItem
                key={item.lineId}
                item={item}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
          <OrderSummary subtotal={subtotal} />
        </div>
      )}
    </div>
  );
}
