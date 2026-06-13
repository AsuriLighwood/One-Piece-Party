drop policy if exists "Anyone can create service orders" on public.service_orders;
drop policy if exists "Anyone can create contact messages" on public.contact_messages;

create policy "Demo can create service orders"
on public.service_orders
for insert
to anon, authenticated
with check (true);

create policy "Demo can read service orders"
on public.service_orders
for select
to anon, authenticated
using (true);

create policy "Demo can create contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (true);

create policy "Demo can read contact messages"
on public.contact_messages
for select
to anon, authenticated
using (true);
