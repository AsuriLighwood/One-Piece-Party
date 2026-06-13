import { useEffect, useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from './config';

const crewCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'luffy', label: 'Luffy: carnes' },
  { id: 'zoro', label: 'Zoro: japones' },
  { id: 'sanji', label: 'Sanji: frances' },
  { id: 'robin', label: 'Robin: cafes' },
  { id: 'chopper', label: 'Chopper: dulces' },
  { id: 'franky', label: 'Franky: sodas' },
  { id: 'nami', label: 'Nami: tropical' },
  { id: 'brook', label: 'Brook: postres frios' }
];

const dishes = [
  { id: 'luffy-gigante', title: 'Carne Gigante Gomu Gomu', category: 'luffy', description: 'Costilla BBQ jugosa con papas rusticas y salsa del East Blue.', price: 68, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80' },
  { id: 'luffy-burger', title: 'Burger Rey de los Piratas', category: 'luffy', description: 'Doble carne, queso fundido, cebolla caramelizada y pan tostado.', price: 54, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80' },
  { id: 'zoro-ramen', title: 'Ramen Tres Espadas', category: 'zoro', description: 'Caldo intenso, huevo, cerdo marinado, nori y fideos firmes.', price: 46, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80' },
  { id: 'zoro-sushi', title: 'Sushi Santoryu', category: 'zoro', description: 'Rolls de salmon, palta y pepino con toque picante.', price: 58, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80' },
  { id: 'sanji-ratatouille', title: 'Ratatouille All Blue', category: 'sanji', description: 'Verduras asadas en capas con hierbas provenzales y aceite de oliva.', price: 42, image: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80' },
  { id: 'sanji-croissant', title: 'Croissant Diable Jambe', category: 'sanji', description: 'Croissant relleno de pollo cremoso, queso y champinones.', price: 34, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80' },
  { id: 'robin-espresso', title: 'Cafe Ohara', category: 'robin', description: 'Espresso doble con crema suave y notas de cacao.', price: 18, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80' },
  { id: 'robin-latte', title: 'Latte Mil Flores', category: 'robin', description: 'Latte artesanal con vainilla, canela y espuma decorada.', price: 24, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80' },
  { id: 'chopper-cupcakes', title: 'Cupcakes Rumble Ball', category: 'chopper', description: 'Mini cupcakes de chocolate, frutilla y crema de vainilla.', price: 30, image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80' },
  { id: 'chopper-waffle', title: 'Waffle Sakura', category: 'chopper', description: 'Waffle crujiente con helado, frutos rojos y miel.', price: 32, image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=80' },
  { id: 'franky-cola', title: 'Cola Super Franky', category: 'franky', description: 'Soda helada con limon, cereza y burbujas extra.', price: 16, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80' },
  { id: 'franky-float', title: 'Ice Cream Cola Coup de Burst', category: 'franky', description: 'Cola con bola de helado, crema batida y sirope de chocolate.', price: 26, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80' },
  { id: 'nami-bowl', title: 'Bowl Clima Tact', category: 'nami', description: 'Frutas tropicales, yogurt, granola y miel de naranja.', price: 36, image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=80' },
  { id: 'nami-smoothie', title: 'Smoothie Arlong Park', category: 'nami', description: 'Mango, pina, maracuya y hielo frappe.', price: 22, image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80' },
  { id: 'brook-parfait', title: 'Parfait Soul King', category: 'brook', description: 'Capas de helado, galleta, frutas y salsa de frutos rojos.', price: 28, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80' },
  { id: 'brook-gelato', title: 'Gelato Binks no Sake', category: 'brook', description: 'Trio de gelatos con vainilla, cafe y chocolate oscuro.', price: 25, image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80' }
];

const storageKey = 'grand_line_cart';
const themeKey = 'grand_line_theme';

function money(value) {
  return `Bs ${Number(value).toFixed(2)}`;
}

function categoryLabel(id) {
  return crewCategories.find((item) => item.id === id)?.label || id;
}

export default function App() {
  const [category, setCategory] = useState('todos');
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem(storageKey) || '{}'));
  const [customerName, setCustomerName] = useState('');
  const [deliveryIsland, setDeliveryIsland] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [reviewForm, setReviewForm] = useState({ name: '', favoriteDish: dishes[0].title, rating: 5, comment: '' });
  const [status, setStatus] = useState({ order: '', contact: '', review: '' });
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem(themeKey) === 'dark');

  const supabaseClient = useMemo(() => {
    const ready = SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey && !SUPABASE_CONFIG.url.includes('TU-PROYECTO');
    return ready ? createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey) : null;
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem(themeKey, darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cart));
  }, [cart]);

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory = category === 'todos' || dish.category === category;
      const search = query.trim().toLowerCase();
      const matchesSearch = !search || dish.title.toLowerCase().includes(search) || dish.description.toLowerCase().includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  const rows = useMemo(() => Object.values(cart).map((item) => ({ ...item, subtotal: item.price * item.quantity })), [cart]);
  const total = useMemo(() => rows.reduce((sum, item) => sum + item.subtotal, 0), [rows]);
  const count = useMemo(() => rows.reduce((sum, item) => sum + item.quantity, 0), [rows]);

  const addToCart = (dishId) => {
    const dish = dishes.find((item) => item.id === dishId);
    if (!dish) return;
    setCart((prev) => ({
      ...prev,
      [dishId]: {
        id: dish.id,
        title: dish.title,
        category: dish.category,
        price: dish.price,
        quantity: (prev[dishId]?.quantity || 0) + 1
      }
    }));
    setStatus((prev) => ({ ...prev, order: 'Servicio agregado al carrito.' }));
  };

  const changeQuantity = (dishId, amount) => {
    setCart((prev) => {
      const next = { ...prev };
      if (!next[dishId]) return next;
      next[dishId] = { ...next[dishId], quantity: next[dishId].quantity + amount };
      if (next[dishId].quantity <= 0) delete next[dishId];
      return next;
    });
  };

  const handleOrder = async () => {
    if (!rows.length) {
      setStatus((prev) => ({ ...prev, order: 'Agrega al menos un servicio.' }));
      return;
    }

    const order = {
      customer_name: customerName.trim() || 'Cliente pirata',
      delivery_island: deliveryIsland.trim() || 'Sin isla registrada',
      total,
      items: rows
    };

    if (!supabaseClient) {
      setStatus((prev) => ({ ...prev, order: 'Pedido confirmado. Gracias por tu compra.' }));
      setCart({});
      return;
    }

    const { data, error } = await supabaseClient.from('grand_line_orders').insert({
      customer_name: order.customer_name,
      delivery_island: order.delivery_island,
      total: order.total,
      items: order.items
    }).select('id').single();

    if (error) {
      setStatus((prev) => ({ ...prev, order: 'No se pudo completar el pedido. Intenta nuevamente.' }));
      return;
    }

    const orderItems = order.items.map((item) => ({
      order_id: data.id,
      menu_item_id: item.id,
      title: item.title,
      quantity: item.quantity,
      unit_price: item.price,
      subtotal: item.subtotal
    }));

    const { error: itemsError } = await supabaseClient.from('grand_line_order_items').insert(orderItems);

    setStatus((prev) => ({
      ...prev,
      order: itemsError ? 'Pedido registrado, pero hubo un problema con algunos detalles.' : 'Pedido registrado correctamente.'
    }));
    setCart({});
  };

  const handleContact = async (event) => {
    event.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setStatus((prev) => ({ ...prev, contact: 'Completa todos los campos del formulario.' }));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      setStatus((prev) => ({ ...prev, contact: 'Ingresa un correo válido.' }));
      return;
    }

    if (!supabaseClient) {
      setStatus((prev) => ({ ...prev, contact: 'Mensaje enviado correctamente.' }));
      setContactForm({ name: '', email: '', message: '' });
      return;
    }

    const { error } = await supabaseClient.from('grand_line_contacts').insert(contactForm);
    setStatus((prev) => ({ ...prev, contact: error ? 'No se pudo enviar el mensaje. Intenta nuevamente.' : 'Mensaje enviado correctamente.' }));
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleReview = async (event) => {
    event.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) {
      setStatus((prev) => ({ ...prev, review: 'Completa tu nombre y comentario.' }));
      return;
    }

    if (!supabaseClient) {
      setStatus((prev) => ({ ...prev, review: 'Reseña guardada correctamente.' }));
      setReviewForm({ name: '', favoriteDish: dishes[0].title, rating: 5, comment: '' });
      return;
    }

    const { error } = await supabaseClient.from('grand_line_reviews').insert({
      customer_name: reviewForm.name,
      favorite_dish: reviewForm.favoriteDish,
      rating: Number(reviewForm.rating),
      comment: reviewForm.comment
    });

    setStatus((prev) => ({ ...prev, review: error ? 'No se pudo guardar la reseña. Intenta nuevamente.' : 'Reseña guardada correctamente.' }));
    setReviewForm({ name: '', favoriteDish: dishes[0].title, rating: 5, comment: '' });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">Grand Line Bites</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Abrir menu">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="mainNav" className="collapse navbar-collapse">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#menu">Servicios</a>
              <a className="nav-link" href="#carrito">Carrito</a>
              <a className="nav-link" href="#reseñas">Reseñas</a>
              <a className="nav-link" href="#contacto">Contacto</a>
            </div>
            <button className="btn btn-sm btn-outline-light ms-lg-3" type="button" onClick={() => setDarkMode((prev) => !prev)}>{darkMode ? 'Modo soleado' : 'Noche pirata'}</button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Restaurante tematico</p>
          <h1>Contrata un banquete pirata inspirado en la tripulación del Sombrero de Paja</h1>
          <p className="hero-copy">Servicios gastronómicos: carne para Luffy, cocina japonesa para Zoro, platos franceses para Sanji, cafés para Robin, dulces para Chopper y sodas para Franky.</p>
        </div>
      </header>

      <main>
        <section id="menu" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Grand Line Menu</p>
                <h2>Servicios por personaje</h2>
              </div>
              <div className="tools">
                <input className="form-control" type="search" placeholder="Buscar servicio" value={query} onChange={(e) => setQuery(e.target.value)} />
                <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                  {crewCategories.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
                </select>
              </div>
            </div>

            <div className="crew-tabs">
              {crewCategories.map((item) => (
                <button key={item.id} className={`crew-tab ${item.id === category ? 'active' : ''}`} type="button" onClick={() => setCategory(item.id)}>{item.label}</button>
              ))}
            </div>

            <div className="menu-grid">
              {filteredDishes.map((dish) => (
                <article key={dish.id} className="dish-card">
                  <img src={dish.image} alt={dish.title} />
                  <div className="dish-body">
                    <span className="dish-category">{categoryLabel(dish.category)}</span>
                    <h3>{dish.title}</h3>
                    <p>{dish.description}</p>
                    <div className="dish-footer">
                      <strong>{money(dish.price)}</strong>
                      <button className="btn btn-primary add-dish" type="button" onClick={() => addToCart(dish.id)}>Solicitar Servicio</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="carrito" className="section cart-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Pedido pirata</p>
                <h2>Carrito de servicios</h2>
              </div>
              <span className="cart-badge">{count} servicio{count === 1 ? '' : 's'}</span>
            </div>

            <div className="cart-layout">
              <div className="cart-panel">
                {rows.length === 0 ? <p className="empty-state">Tu carrito de servicios esta vacio.</p> : rows.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{categoryLabel(item.category)} · Unitario: {money(item.price)}</p>
                    </div>
                    <div className="quantity-controls">
                      <button className="qty-minus" type="button" onClick={() => changeQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="qty-plus" type="button" onClick={() => changeQuantity(item.id, 1)}>+</button>
                    </div>
                    <strong>{money(item.subtotal)}</strong>
                    <button className="remove-item" type="button" onClick={() => setCart((prev) => { const next = { ...prev }; delete next[item.id]; return next; })}>Eliminar servicio</button>
                  </div>
                ))}
              </div>

              <aside className="cart-summary">
                <label>
                  Nombre del cliente
                  <input className="form-control" type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Ej: Nami" />
                </label>
                <label>
                  Isla o dirección
                  <input className="form-control" type="text" value={deliveryIsland} onChange={(e) => setDeliveryIsland(e.target.value)} placeholder="Ej: Loguetown" />
                </label>
                <div className="summary-row"><span>Total</span><strong>{money(total)}</strong></div>
                <button className="btn btn-primary w-100" type="button" onClick={handleOrder}>Confirmar pedido</button>
                <button className="btn btn-outline-secondary w-100" type="button" onClick={() => setCart({})}>Vaciar carrito</button>
                <p className="status-message">{status.order}</p>
              </aside>
            </div>
          </div>
        </section>

        <section id="reseñas" className="section">
          <div className="container review-layout">
            <div>
              <p className="eyebrow">Bitacora</p>
              <h2>Reseñas de clientes</h2>
            </div>
            <form className="form-card" onSubmit={handleReview}>
              <label>Nombre<input className="form-control" type="text" value={reviewForm.name} onChange={(e) => setReviewForm((prev) => ({ ...prev, name: e.target.value }))} /></label>
              <label>Servicio favorito<select className="form-select" value={reviewForm.favoriteDish} onChange={(e) => setReviewForm((prev) => ({ ...prev, favoriteDish: e.target.value }))}>{dishes.map((dish) => <option key={dish.id} value={dish.title}>{dish.title}</option>)}</select></label>
              <label>Calificación<input className="form-control" type="number" min="1" max="5" value={reviewForm.rating} onChange={(e) => setReviewForm((prev) => ({ ...prev, rating: e.target.value }))} /></label>
              <label>Comentario<textarea className="form-control" value={reviewForm.comment} onChange={(e) => setReviewForm((prev) => ({ ...prev, comment: e.target.value }))} /></label>
              <button className="btn btn-primary" type="submit">Guardar reseña</button>
              <p className="status-message">{status.review}</p>
            </form>
          </div>
        </section>

        <section id="contacto" className="section contact-section">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">Den Den Mushi</p>
              <h2>Contacto</h2>
              <p className="muted">Escríbenos para eventos, combos de tripulación o pedidos especiales.</p>
            </div>
            <form className="form-card" onSubmit={handleContact}>
              <label>Nombre<input className="form-control" type="text" value={contactForm.name} onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))} /></label>
              <label>Correo electronico<input className="form-control" type="email" value={contactForm.email} onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))} /></label>
              <label>Mensaje<textarea className="form-control" value={contactForm.message} onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))} /></label>
              <button className="btn btn-primary" type="submit">Enviar mensaje</button>
              <p className="status-message">{status.contact}</p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
