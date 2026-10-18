export default function BrandMark({ compact = false, light = false }) {
  return (
    <span className={`brand-mark${compact ? ' brand-mark--compact' : ''}${light ? ' brand-mark--light' : ''}`} aria-label="Jabar Sport">
      <svg className="brand-symbol" viewBox="0 0 44 44" role="img" aria-label="JS logo">
        <path d="M8 6h27v7H16v7h11c7 0 11 4 11 10s-4 9-11 9H8v-7h18c3 0 5-1 5-3s-2-3-5-3H8V6Z" fill="currentColor" />
        <path d="M8 6h8v13H8z" fill="var(--lime)" />
        <path d="M8 32h8v7H8z" fill="var(--lime)" />
      </svg>
      {!compact && <span className="brand-wordmark"><strong>JABAR</strong><small>SPORT</small></span>}
    </span>
  );
}
