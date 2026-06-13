create table if not exists public.service_orders (
  id bigint generated always as identity primary key,
  items jsonb not null,
  total numeric(10, 2) not null,
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.service_orders enable row level security;
alter table public.contact_messages enable row level security;

create policy "Anyone can create service orders"
on public.service_orders
for insert
to anon, authenticated
with check (
  jsonb_array_length(items) > 0
  and total > 0
);

create policy "Anyone can create contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (
  length(trim(name)) between 1 and 100
  and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  and length(trim(message)) between 12 and 1000
);
