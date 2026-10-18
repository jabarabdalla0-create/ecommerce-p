import Icon from '../Icon.jsx';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p>FREE DELIVERY ON ORDERS OVER $100</p>
      <a href="/shop" className="announcement-link">GEAR UP FOR GAME DAY <Icon name="arrow" size={14} /></a>
      <span className="announcement-region">EN <span>·</span> USD</span>
    </div>
  );
}
