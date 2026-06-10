const CATEGORIES = [
  { id: 'all', emoji: '✨', label: 'All' },
  { id: 'beaded', emoji: '📿', label: 'Beaded' },
  { id: 'gold', emoji: '🏅', label: 'Gold' },
  { id: 'silver', emoji: '🥈', label: 'Silver' },
  { id: 'pearl', emoji: '🦪', label: 'Pearl' },
  { id: 'friendship', emoji: '💕', label: 'Friendship' },
  { id: 'celestial', emoji: '🌙', label: 'Celestial' },
  { id: 'charm', emoji: '🌸', label: 'Charm' },
  { id: 'crystal', emoji: '💎', label: 'Crystal' },
  { id: 'leather', emoji: '🤎', label: 'Leather' },
  { id: 'stackable', emoji: '🔗', label: 'Stackable' },
  { id: 'vintage', emoji: '🕰️', label: 'Vintage' },
  { id: 'eco', emoji: '🌿', label: 'Eco' },
  { id: 'minimalist', emoji: '◽', label: 'Minimalist' },
  { id: 'custom', emoji: '🎨', label: 'Custom' }
];

const PRODUCTS = [
  { id: 'soleil-gold', name: 'Soleil Gold Cuff', material: '18k Gold Plated · Adjustable', price: 48, emoji: '📿', bg: 'linear-gradient(135deg,#FFF5E0,#F5D89A)', cat: 'gold', badge: 'new',
    desc: 'A sun-kissed cuff that catches every ray. Adjustable fit, hypoallergenic plating.',
    mfg: { origin: 'Handcrafted in Portland, OR', materials: ['Recycled brass base', '18k gold plate', 'Hypoallergenic lacquer'], steps: ['Cast & shaped', 'Triple-plated', 'Hand-polished', 'QC inspected'], lead: '3–5 days', eco: '♻️ Recycled metals' }},
  { id: 'amethyst-stack', name: 'Amethyst Dream Stack', material: 'Natural Amethyst · Set of 3', price: 62, emoji: '🔮', bg: 'linear-gradient(135deg,#F0E8FF,#D4C5E8)', cat: 'beaded', badge: 'hot',
    desc: 'Three dreamy amethyst strands for calm, clarity, and major stack goals.',
    mfg: { origin: 'Strung in Asheville, NC', materials: ['Natural amethyst', 'Silk thread', 'Sterling spacers'], steps: ['Stone selection', 'Hand-knotted', 'Blessed & packaged'], lead: '2–4 days', eco: '🌿 Ethically sourced stones' }},
  { id: 'wave-chain', name: 'Wave Sterling Chain', material: '925 Sterling Silver · 7"', price: 35, oldPrice: 50, emoji: '🌊', bg: 'linear-gradient(135deg,#EEF2F7,#CFD8E8)', cat: 'silver',
    desc: 'Minimal wave-link chain — ocean vibes for everyday elegance.',
    mfg: { origin: 'Made in Rhode Island', materials: ['925 sterling silver', 'Anti-tarnish coat'], steps: ['Link forging', 'Soldered', 'Tumbled smooth'], lead: '3–5 days', eco: '♻️ Recycled silver' }},
  { id: 'cherry-charm', name: 'Cherry Blossom Charm', material: 'Rose Gold · Enamel Charms', price: 29, oldPrice: 42, emoji: '🌸', bg: 'linear-gradient(135deg,#FFE8EE,#F5B8C8)', cat: 'charm', badge: 'sale',
    desc: 'Delicate cherry blossom charms on a rose gold chain — spring forever.',
    mfg: { origin: 'Designed in Tokyo, crafted in LA', materials: ['Rose gold plate', 'Hand-painted enamel'], steps: ['Charm casting', 'Enamel by hand', 'Assembly'], lead: '4–6 days', eco: '💧 Water-based enamel' }},
  { id: 'cognac-leather', name: 'Cognac Leather Wrap', material: 'Full-Grain Leather · Unisex', price: 44, emoji: '🤎', bg: 'linear-gradient(135deg,#EDE0D4,#D4B99A)', cat: 'leather',
    desc: 'Rich cognac leather that ages beautifully. Wraps twice, magnetic clasp.',
    mfg: { origin: 'Tanned in Italy, assembled in NYC', materials: ['Vegetable-tanned leather', 'Brass magnetic clasp'], steps: ['Cut & burnish', 'Edge dyed', 'Clasp set'], lead: '5–7 days', eco: '🌿 Veg-tan, no chrome' }},
  { id: 'jade-bangle', name: 'Jade Harmony Bangle', material: 'Natural Jade · Silver Trim', price: 78, emoji: '💚', bg: 'linear-gradient(135deg,#E8F5F0,#A8D8C8)', cat: 'crystal', badge: 'new',
    desc: 'Serene jade bangle with sterling trim — balance and beauty united.',
    mfg: { origin: 'Jade from Myanmar, set in Seattle', materials: ['Grade A jade', '925 silver trim'], steps: ['Jade carving', 'Silver inlay', 'Final polish'], lead: '7–10 days', eco: '✅ Fair-trade sourced' }},
  { id: 'golden-stack', name: 'Golden Hours Stack', material: 'Gold-Fill · Set of 5', price: 95, oldPrice: 120, emoji: '✨', bg: 'linear-gradient(135deg,#FFF8E0,#FFE87A)', cat: 'stackable',
    desc: 'Five golden bands for golden hour glow. Mix, match, never take off.',
    mfg: { origin: 'Handmade in Austin, TX', materials: ['14k gold-fill wire', 'Lobster clasp'], steps: ['Wire wrapping', 'Hammered texture', 'Set of 5 boxed'], lead: '3–5 days', eco: '♻️ Gold-fill = less mining' }},
  { id: 'name-plate', name: 'Name Plate Bracelet', material: 'Custom Engraved · Silver/Gold', price: 55, emoji: '🎨', bg: 'linear-gradient(135deg,#F0EEFF,#C8BCFF)', cat: 'custom', badge: 'hot',
    desc: 'Your name, your story. Laser-engraved on a dainty plate bracelet.',
    mfg: { origin: 'Engraved on-demand in Chicago', materials: ['Sterling or gold plate', 'Laser engraving'], steps: ['Plate cut', 'Laser engraved', 'Chain attached'], lead: '5–8 days', eco: '♻️ Zero-waste engraving' }},
  { id: 'pearl-classic', name: 'Luna Pearl Strand', material: 'Freshwater Pearl · 14k Clasp', price: 68, emoji: '🦪', bg: 'linear-gradient(135deg,#FFF8FC,#F5E0EE)', cat: 'pearl', badge: 'new',
    desc: 'Lustrous freshwater pearls on a dainty 14k clasp — timeless grace.',
    mfg: { origin: 'Pearls from Japan, strung in Boston', materials: ['AAA freshwater pearls', '14k gold clasp'], steps: ['Pearl grading', 'Silk restringing', 'Clasp set'], lead: '4–6 days', eco: '🌊 Sustainable farms' }},
  { id: 'friendship-braid', name: 'Bestie Braid Duo', material: 'Woven Cotton · Set of 2', price: 22, emoji: '💕', bg: 'linear-gradient(135deg,#FFE0F0,#FFB8D9)', cat: 'friendship',
    desc: 'Matching friendship bracelets for you and your ride-or-die. Two in every pack!',
    mfg: { origin: 'Woven by artisans in Oaxaca', materials: ['Organic cotton thread', 'Adjustable tie'], steps: ['Hand-braided', 'Color-matched pair', 'Gift tagged'], lead: '2–3 days', eco: '🌿 Organic cotton' }},
  { id: 'moon-celestial', name: 'Moonphase Celestial', material: 'Silver · Moon Charms', price: 52, emoji: '🌙', bg: 'linear-gradient(135deg,#E8E4F8,#B8B0E8)', cat: 'celestial', badge: 'hot',
    desc: 'Phases of the moon on a sterling chain — for stargazers and dreamers.',
    mfg: { origin: 'Cast in New Mexico', materials: ['925 silver', 'Oxidized moon charms'], steps: ['Lost-wax casting', 'Oxidation', 'Chain assembly'], lead: '5–7 days', eco: '♻️ Recycled silver' }},
  { id: 'vintage-locket', name: 'Vintage Locket Chain', material: 'Antique Gold · Photo Locket', price: 58, emoji: '🕰️', bg: 'linear-gradient(135deg,#F5EDE0,#E8D4B0)', cat: 'vintage',
    desc: 'A tiny locket for tiny treasures. Vintage-inspired, modern quality.',
    mfg: { origin: 'Inspired by 1920s Paris, made in Montreal', materials: ['Antique gold plate', 'Hinged locket'], steps: ['Locket hinge set', 'Chain matched', 'Velvet pouch'], lead: '6–8 days', eco: '♻️ Upcycled chain links' }},
  { id: 'eco-cork', name: 'Eco Cork Band', material: 'Cork & Hemp · Vegan', price: 32, emoji: '🌿', bg: 'linear-gradient(135deg,#E8F5E8,#B8DEB8)', cat: 'eco', badge: 'new',
    desc: 'Lightweight cork and hemp — planet-friendly and super comfy.',
    mfg: { origin: 'Cork from Portugal, assembled in Berlin', materials: ['Natural cork', 'Hemp cord', 'Wood bead'], steps: ['Cork sliced', 'Hemp braided', 'Bead knotted'], lead: '3–4 days', eco: '🌍 100% vegan & biodegradable' }},
  { id: 'minimal-bar', name: 'Whisper Thin Bar', material: 'Sterling Silver · 1mm', price: 38, emoji: '◽', bg: 'linear-gradient(135deg,#F5F5F5,#E0E0E0)', cat: 'minimalist',
    desc: 'Ultra-thin bar bracelet — barely there, always noticed.',
    mfg: { origin: 'Minimalist studio in Copenhagen-style workshop, NYC', materials: ['925 sterling', '1mm profile'], steps: ['Bar drawn', 'Ends rounded', 'Mirror polish'], lead: '2–4 days', eco: '♻️ Recycled sterling' }}
];

const CUSTOMIZE = {
  styles: [
    { id: 'beaded', label: 'Beaded', class: '' },
    { id: 'chain', label: 'Chain', class: 'chain' },
    { id: 'cuff', label: 'Cuff', class: 'cuff' },
    { id: 'leather', label: 'Leather Wrap', class: 'leather' }
  ],
  colors: [
    { id: 'gold', hex: '#F5D061', label: 'Gold' },
    { id: 'rose', hex: '#FFB5C2', label: 'Rose' },
    { id: 'lavender', hex: '#D4BBFF', label: 'Lavender' },
    { id: 'mint', hex: '#B8F0D8', label: 'Mint' },
    { id: 'silver', hex: '#B8C4D0', label: 'Silver' },
    { id: 'midnight', hex: '#2B2420', label: 'Midnight' }
  ],
  patterns: [
    { id: 'solid', label: 'Solid', css: 'transparent' },
    { id: 'stripes', label: 'Stripes', css: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 4px, transparent 4px, transparent 12px)' },
    { id: 'dots', label: 'Dots', css: 'radial-gradient(circle, rgba(0,0,0,0.12) 2px, transparent 2px)' },
    { id: 'hearts', label: 'Hearts', css: 'radial-gradient(circle at 50% 50%, rgba(255,100,150,0.15) 3px, transparent 3px)' },
    { id: 'wave', label: 'Wave', css: 'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.06) 0px, transparent 8px)' }
  ],
  basePrice: 45
};

const CART_KEY = 'braceletbyte_cart';
const WISH_KEY = 'bb_wishlist';
let zoomScale = 1;
let currentModalProduct = null;

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; } catch { return []; }
}
function saveWishlist(list) {
  localStorage.setItem(WISH_KEY, JSON.stringify(list));
}
function updateCartBadge() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(i => i.id === item.id && !item.custom);
  if (existing && !item.custom) existing.qty += 1;
  else cart.push({ ...item, qty: 1 });
  saveCart(cart);
  showToast(`✅ "${item.name}" added to cart`);
  announce(`Added ${item.name} to cart`);
  showVisualAlert?.(`Added to cart: ${item.name}`);
}

function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

function setActiveNav(page) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

function renderProductCard(product) {
  const badgeHtml = product.badge
    ? `<span class="product-badge badge-${product.badge}">${product.badge === 'hot' ? 'Hot' : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}</span>`
    : '';
  const oldPriceHtml = product.oldPrice ? `<span class="price-old">$${product.oldPrice}</span>` : '';
  const wished = getWishlist().includes(product.id);

  return `
    <article class="product-card" data-cat="${product.cat}" data-name="${product.name.toLowerCase()}" data-id="${product.id}" tabindex="0" role="button" aria-label="View details for ${product.name}, $${product.price}">
      <div class="product-img" style="background:${product.bg}">
        <span aria-hidden="true">${product.emoji}</span>
        ${badgeHtml}
        <button class="wishlist-btn ${wished ? 'wished' : ''}" data-wish-id="${product.id}" aria-label="${wished ? 'Remove from' : 'Add to'} wishlist" aria-pressed="${wished}">${wished ? '♥' : '♡'}</button>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-material">${product.material}</div>
        <div class="product-footer">
          <div><span class="product-price">$${product.price}</span>${oldPriceHtml}</div>
          <button class="add-btn" data-add-id="${product.id}" aria-label="Add ${product.name} to cart">+</button>
        </div>
        <button class="details-link" data-detail-id="${product.id}">View details & zoom →</button>
      </div>
    </article>`;
}

function bindProductGrid(grid) {
  if (!grid) return;

  grid.addEventListener('click', e => {
    const wishBtn = e.target.closest('[data-wish-id]');
    if (wishBtn) { e.stopPropagation(); toggleWish(wishBtn); return; }

    const addBtn = e.target.closest('[data-add-id]');
    if (addBtn) {
      e.stopPropagation();
      const p = PRODUCTS.find(x => x.id === addBtn.dataset.addId);
      if (p) addToCart({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, bg: p.bg, meta: p.material });
      return;
    }

    const detailBtn = e.target.closest('[data-detail-id]');
    const card = e.target.closest('.product-card');
    const id = detailBtn?.dataset.detailId || card?.dataset.id;
    if (id) openProductModal(id);
  });

  grid.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.product-card');
      if (card?.dataset.id) { e.preventDefault(); openProductModal(card.dataset.id); }
    }
  });
}

function toggleWish(btn) {
  const id = btn.dataset.wishId;
  let list = getWishlist();
  const has = list.includes(id);
  list = has ? list.filter(x => x !== id) : [...list, id];
  saveWishlist(list);
  btn.textContent = has ? '♡' : '♥';
  btn.classList.toggle('wished', !has);
  btn.setAttribute('aria-pressed', String(!has));
  btn.setAttribute('aria-label', `${has ? 'Add to' : 'Remove from'} wishlist`);
  showToast(has ? 'Removed from wishlist' : 'Added to wishlist ♥');
}

function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = p;
  zoomScale = 1;

  document.getElementById('productModalTitle').textContent = p.name;
  document.getElementById('productModalMaterial').textContent = p.material;
  document.getElementById('productModalPrice').textContent = `$${p.price}${p.oldPrice ? ' (was $' + p.oldPrice + ')' : ''}`;
  document.getElementById('productModalDesc').textContent = p.desc || '';

  const mfg = p.mfg;
  document.getElementById('productModalMfg').innerHTML = mfg ? `
    <li><strong>Origin:</strong> ${mfg.origin}</li>
    <li><strong>Materials:</strong> ${mfg.materials.join(', ')}</li>
    <li><strong>Process:</strong> ${mfg.steps.join(' → ')}</li>
    <li><strong>Lead time:</strong> ${mfg.lead}</li>
    <li><strong>Sustainability:</strong> ${mfg.eco}</li>` : '';

  const zoomImg = document.getElementById('zoomImg');
  zoomImg.style.background = p.bg;
  zoomImg.innerHTML = `<span class="zoom-emoji" aria-hidden="true">${p.emoji}</span>`;
  updateZoom();

  const wished = getWishlist().includes(p.id);
  const wishBtn = document.getElementById('productModalWish');
  wishBtn.textContent = wished ? '♥ Wishlisted' : '♡ Wishlist';
  wishBtn.setAttribute('aria-pressed', String(wished));

  openModal('productModal');
  announce(`Opened details for ${p.name}`);
}

function updateZoom() {
  const inner = document.getElementById('zoomInner');
  const level = document.getElementById('zoomLevel');
  if (inner) inner.style.transform = `scale(${zoomScale})`;
  if (level) level.textContent = Math.round(zoomScale * 100) + '%';
}

function initPage() {
  setActiveNav(document.body.dataset.page || 'home');
  updateCartBadge();
  if (document.body.dataset.page === 'home') {
    const grid = document.getElementById('featuredGrid');
    if (grid) {
      grid.innerHTML = PRODUCTS.slice(0, 4).map(renderProductCard).join('');
      bindProductGrid(grid);
    }
  }
  if (document.body.dataset.page === 'products') {
    const productGrid = document.getElementById('productGrid');
    const categoriesScroll = document.querySelector('.categories-scroll');
    if (productGrid && categoriesScroll) {
      productGrid.innerHTML = PRODUCTS.map(renderProductCard).join('');
      categoriesScroll.innerHTML = CATEGORIES.map(cat => `
        <button class="cat-chip" data-cat="${cat.id}" type="button" aria-label="Filter by ${cat.label}"><span>${cat.emoji}</span> ${cat.label}</button>
      `).join('');
      bindProductGrid(productGrid);
      categoriesScroll.addEventListener('click', e => {
        const btn = e.target.closest('.cat-chip');
        if (!btn) return;
        const cat = btn.dataset.cat;
        document.querySelectorAll('.cat-chip').forEach(c => c.classList.toggle('active', c === btn));
        filterProducts(cat);
      });
      document.getElementById('searchInput')?.addEventListener('input', e => filterSearch(e.target.value));
    }
  }
  if (document.body.dataset.page === 'customize') {
    initCustomize();
  }
  if (document.body.dataset.page === 'cart') {
    renderCart();
  }
}

function filterProducts(cat) {
  document.querySelectorAll('.product-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? '' : 'none';
  });
}

function filterSearch(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.product-card').forEach(card => {
    const name = card.dataset.name;
    const cat = card.dataset.cat;
    card.style.display = !q || name.includes(q) || cat.includes(q) ? '' : 'none';
  });
}

function initCustomize() {
  const previewRing = document.getElementById('previewRing');
  const previewPattern = document.getElementById('previewPattern');
  const previewEngraving = document.getElementById('previewEngraving');
  const styleGroup = document.getElementById('styleOptions');
  const colorGroup = document.getElementById('colorOptions');
  const patternGroup = document.getElementById('patternOptions');
  const engravingInput = document.getElementById('engravingInput');
  const priceEl = document.getElementById('customPrice');
  const addBtn = document.getElementById('addCustomBtn');

  const state = { style: 'beaded', color: '#F5D061', pattern: 'solid', engraving: '' };

  function updatePreview() {
    previewRing.style.borderColor = state.color;
    previewPattern.style.background = CUSTOMIZE.patterns.find(p => p.id === state.pattern).css;
    previewPattern.style.opacity = state.pattern === 'solid' ? '0.2' : '0.7';
    previewPattern.style.backgroundColor = state.color;
    previewEngraving.textContent = state.engraving.toUpperCase();
    previewEngraving.style.color = state.color;
    priceEl.textContent = `$${CUSTOMIZE.basePrice + (state.engraving.length * 3)}`;
  }

  styleGroup?.addEventListener('click', e => {
    const button = e.target.closest('[data-value]');
    if (!button) return;
    state.style = button.dataset.value;
    [...styleGroup.children].forEach(btn => btn.classList.toggle('selected', btn === button));
    updatePreview();
  });

  colorGroup?.addEventListener('click', e => {
    const button = e.target.closest('[data-color]');
    if (!button) return;
    state.color = button.dataset.color;
    [...colorGroup.children].forEach(btn => btn.classList.toggle('selected', btn === button));
    updatePreview();
  });

  patternGroup?.addEventListener('click', e => {
    const button = e.target.closest('[data-value]');
    if (!button) return;
    state.pattern = button.dataset.value;
    [...patternGroup.children].forEach(btn => btn.classList.toggle('selected', btn === button));
    updatePreview();
  });

  engravingInput?.addEventListener('input', e => {
    state.engraving = e.target.value.slice(0, 12);
    updatePreview();
  });

  addBtn?.addEventListener('click', () => {
    addToCart({ id: `custom-${Date.now()}`, name: `Custom Bracelet`, price: CUSTOMIZE.basePrice + (state.engraving.length * 3), custom: true });
    showToast('Custom bracelet added to cart!');
  });

  updatePreview();
}

function renderCart() {
  const cartContent = document.getElementById('cartContent');
  if (!cartContent) return;
  const cart = getCart();
  if (!cart.length) {
    cartContent.innerHTML = '<div class="cart-empty"><h2>Your cart is empty</h2><p>Add something sparkly to get started.</p></div>';
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartContent.innerHTML = `
    ${cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-meta">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${item.qty} x $${item.price}</div>
          <div class="cart-item-desc">${item.meta || ''}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;align-items:flex-end;">
          <button type="button" class="btn-secondary" onclick="removeFromCart('${item.id}')">Remove</button>
          <span class="cart-item-price">$${item.price * item.qty}</span>
        </div>
      </div>
    `).join('')}
    <div class="cart-summary">
      <span><strong>Total</strong></span>
      <span><strong>$${total}</strong></span>
    </div>
  `;
}

window.addEventListener('DOMContentLoaded', initPage);
