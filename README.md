# Grand Line Bites

Plataforma web funcional para el Hito 5, adaptada a React con JSX y conectada a Supabase. Mantiene la temática de un negocio gastronómico inspirado en One Piece, con carrito, formularios y almacenamiento de pedidos, contactos y reseñas.

## Requisitos del hito

- React con JSX
- Conexión a Supabase
- Página funcional y lista para desplegar en Netlify o GitHub Pages

## Comandos

```powershell
npm install
npm run dev
npm run build
```

## Despliegue

1. Subir el repositorio a GitHub.
2. Conectar el proyecto a Netlify o GitHub Pages.
3. Publicar la carpeta `dist/` generada por Vite.

## Funciones principales

- Catálogo con muchos servicios/platos divididos por personaje: Luffy, Zoro, Sanji, Robin, Chopper, Franky, Nami y Brook.
- Cards con imagen, título, descripción, precio y botón "Solicitar Servicio".
- Filtro por personaje, tabs horizontales y barra de busqueda.
- Carrito de servicios con cantidad, precio unitario, subtotal, botones `+`, `-` y eliminar.
- Modal de confirmación de pedido.
- Formulario de contacto validado en tiempo real con jQuery.
- Formulario de reseñas con calificación.
- Animaciones con `fadeIn`, `slideUp`, `slideDown` y `.animate()`.
- `localStorage` para restaurar carrito y tema.
- Modo oscuro.
- Supabase opcional para guardar pedidos, contactos y reseñas.

## Tablas nuevas de Supabase

- `grand_line_menu_categories`
- `grand_line_menu_items`
- `grand_line_orders`
- `grand_line_order_items`
- `grand_line_contacts`
- `grand_line_reviews`

## Funciones SQL

- `grand_line_order_count()`
- `grand_line_revenue_total()`

## Subir cambios a Supabase

```powershell
supabase.cmd db push
```

La conexión del frontend está en `config.js`.
