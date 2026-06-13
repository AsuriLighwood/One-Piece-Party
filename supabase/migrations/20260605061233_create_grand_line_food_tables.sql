create table if not exists public.grand_line_menu_categories (
  id text primary key,
  label text not null,
  description text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.grand_line_menu_items (
  id text primary key,
  category_id text not null references public.grand_line_menu_categories(id),
  title text not null,
  description text not null,
  price numeric(10, 2) not null,
  image_url text not null,
  is_available boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.grand_line_orders (
  id bigint generated always as identity primary key,
  customer_name text not null,
  delivery_island text not null,
  items jsonb not null,
  total numeric(10, 2) not null,
  created_at timestamptz not null default now()
);

create table if not exists public.grand_line_order_items (
  id bigint generated always as identity primary key,
  order_id bigint references public.grand_line_orders(id) on delete cascade,
  menu_item_id text,
  title text not null,
  quantity integer not null,
  unit_price numeric(10, 2) not null,
  subtotal numeric(10, 2) not null,
  created_at timestamptz not null default now()
);

create table if not exists public.grand_line_contacts (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.grand_line_reviews (
  id bigint generated always as identity primary key,
  customer_name text not null,
  favorite_dish text not null,
  rating integer not null,
  comment text not null,
  created_at timestamptz not null default now()
);

alter table public.grand_line_menu_categories enable row level security;
alter table public.grand_line_menu_items enable row level security;
alter table public.grand_line_orders enable row level security;
alter table public.grand_line_order_items enable row level security;
alter table public.grand_line_contacts enable row level security;
alter table public.grand_line_reviews enable row level security;

create policy "Read grand line categories"
on public.grand_line_menu_categories
for select
to anon, authenticated
using (true);

create policy "Read grand line menu"
on public.grand_line_menu_items
for select
to anon, authenticated
using (true);

create policy "Create grand line orders"
on public.grand_line_orders
for insert
to anon, authenticated
with check (true);

create policy "Read grand line orders"
on public.grand_line_orders
for select
to anon, authenticated
using (true);

create policy "Create grand line order items"
on public.grand_line_order_items
for insert
to anon, authenticated
with check (true);

create policy "Read grand line order items"
on public.grand_line_order_items
for select
to anon, authenticated
using (true);

create policy "Create grand line contacts"
on public.grand_line_contacts
for insert
to anon, authenticated
with check (true);

create policy "Read grand line contacts"
on public.grand_line_contacts
for select
to anon, authenticated
using (true);

create policy "Create grand line reviews"
on public.grand_line_reviews
for insert
to anon, authenticated
with check (true);

create policy "Read grand line reviews"
on public.grand_line_reviews
for select
to anon, authenticated
using (true);

create or replace function public.grand_line_order_count()
returns bigint
language sql
stable
as $$
  select count(*) from public.grand_line_orders;
$$;

create or replace function public.grand_line_revenue_total()
returns numeric
language sql
stable
as $$
  select coalesce(sum(total), 0) from public.grand_line_orders;
$$;

insert into public.grand_line_menu_categories (id, label, description)
values
  ('luffy', 'Luffy: carnes', 'Platos grandes con carne y energia pirata.'),
  ('zoro', 'Zoro: japones', 'Ramen, sushi y sabores inspirados en espadachines.'),
  ('sanji', 'Sanji: frances', 'Cocina elegante con tecnica de chef.'),
  ('robin', 'Robin: cafes', 'Bebidas calientes para leer y descansar.'),
  ('chopper', 'Chopper: dulces', 'Postres tiernos y coloridos.'),
  ('franky', 'Franky: sodas', 'Sodas frias, burbujeantes y super.'),
  ('nami', 'Nami: tropical', 'Frutas, bowls y bebidas frescas.'),
  ('brook', 'Brook: postres frios', 'Helados y parfaits para cerrar el banquete.')
on conflict (id) do update set
  label = excluded.label,
  description = excluded.description;

insert into public.grand_line_menu_items (id, category_id, title, description, price, image_url)
values
  ('luffy-gigante', 'luffy', 'Carne Gigante Gomu Gomu', 'Costilla BBQ jugosa con papas rusticas y salsa del East Blue.', 68, 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'),
  ('luffy-burger', 'luffy', 'Burger Rey de los Piratas', 'Doble carne, queso fundido, cebolla caramelizada y pan tostado.', 54, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80'),
  ('zoro-ramen', 'zoro', 'Ramen Tres Espadas', 'Caldo intenso, huevo, cerdo marinado, nori y fideos firmes.', 46, 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80'),
  ('zoro-sushi', 'zoro', 'Sushi Santoryu', 'Rolls de salmon, palta y pepino con toque picante.', 58, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80'),
  ('sanji-ratatouille', 'sanji', 'Ratatouille All Blue', 'Verduras asadas en capas con hierbas provenzales y aceite de oliva.', 42, 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80'),
  ('sanji-croissant', 'sanji', 'Croissant Diable Jambe', 'Croissant relleno de pollo cremoso, queso y champinones.', 34, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80'),
  ('robin-espresso', 'robin', 'Cafe Ohara', 'Espresso doble con crema suave y notas de cacao.', 18, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'),
  ('robin-latte', 'robin', 'Latte Mil Flores', 'Latte artesanal con vainilla, canela y espuma decorada.', 24, 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80'),
  ('chopper-cupcakes', 'chopper', 'Cupcakes Rumble Ball', 'Mini cupcakes de chocolate, frutilla y crema de vainilla.', 30, 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80'),
  ('chopper-waffle', 'chopper', 'Waffle Sakura', 'Waffle crujiente con helado, frutos rojos y miel.', 32, 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=80'),
  ('franky-cola', 'franky', 'Cola Super Franky', 'Soda helada con limon, cereza y burbujas extra.', 16, 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80'),
  ('franky-float', 'franky', 'Ice Cream Cola Coup de Burst', 'Cola con bola de helado, crema batida y sirope de chocolate.', 26, 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80'),
  ('nami-bowl', 'nami', 'Bowl Clima Tact', 'Frutas tropicales, yogurt, granola y miel de naranja.', 36, 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=80'),
  ('nami-smoothie', 'nami', 'Smoothie Arlong Park', 'Mango, pina, maracuya y hielo frappe.', 22, 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80'),
  ('brook-parfait', 'brook', 'Parfait Soul King', 'Capas de helado, galleta, frutas y salsa de frutos rojos.', 28, 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80'),
  ('brook-gelato', 'brook', 'Gelato Binks no Sake', 'Trio de gelatos con vainilla, cafe y chocolate oscuro.', 25, 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80')
on conflict (id) do update set
  category_id = excluded.category_id,
  title = excluded.title,
  description = excluded.description,
  price = excluded.price,
  image_url = excluded.image_url,
  is_available = true;
