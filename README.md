# Jabar Sport

A React storefront for Jabar Sport, with a custom JS mark, responsive layout, category browsing, product details, and a persistent shopping bag.

## Run locally

```bash
npm install
npm run dev
```

## Pages

- `/` — home page and featured collections
- `/shop` — all products; `/shop/boots`, `/shop/sneakers`, `/shop/shirts`, and `/shop/balls` — category pages
- `/product/:productId` — product details and size selection
- `/cart` — persistent bag with quantity controls and subtotal
- `/about` and `/contact` — story and contact pages

## Structure

- `src/components/layout/` — announcement bar, header, footer, and shared site layout
- `src/components/sections/` — reusable home page sections
- `src/components/products/` — product cards and grids
- `src/pages/` — route-level pages
- `src/context/CartContext.jsx` — cart state saved in local storage
- `src/data/products.js` — sample catalog and category data

The catalog uses sample pricing and remote Unsplash photos. Checkout, newsletter signup, and contact submission are front-end demos and need a payment service or backend before taking real orders.
