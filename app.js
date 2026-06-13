const crewCategories = [
  { id: "todos", label: "Todos" },
  { id: "luffy", label: "Luffy: carnes" },
  { id: "zoro", label: "Zoro: japones" },
  { id: "sanji", label: "Sanji: frances" },
  { id: "robin", label: "Robin: cafes" },
  { id: "chopper", label: "Chopper: dulces" },
  { id: "franky", label: "Franky: sodas" },
  { id: "nami", label: "Nami: tropical" },
  { id: "brook", label: "Brook: postres frios" }
];

const dishes = [
  {
    id: "luffy-gigante",
    title: "Carne Gigante Gomu Gomu",
    category: "luffy",
    description: "Costilla BBQ jugosa con papas rusticas y salsa del East Blue.",
    price: 68,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "luffy-burger",
    title: "Burger Rey de los Piratas",
    category: "luffy",
    description: "Doble carne, queso fundido, cebolla caramelizada y pan tostado.",
    price: 54,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "zoro-ramen",
    title: "Ramen Tres Espadas",
    category: "zoro",
    description: "Caldo intenso, huevo, cerdo marinado, nori y fideos firmes.",
    price: 46,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "zoro-sushi",
    title: "Sushi Santoryu",
    category: "zoro",
    description: "Rolls de salmon, palta y pepino con toque picante.",
    price: 58,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "sanji-ratatouille",
    title: "Ratatouille All Blue",
    category: "sanji",
    description: "Verduras asadas en capas con hierbas provenzales y aceite de oliva.",
    price: 42,
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "sanji-croissant",
    title: "Croissant Diable Jambe",
    category: "sanji",
    description: "Croissant relleno de pollo cremoso, queso y champinones.",
    price: 34,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "robin-espresso",
    title: "Cafe Ohara",
    category: "robin",
    description: "Espresso doble con crema suave y notas de cacao.",
    price: 18,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "robin-latte",
    title: "Latte Mil Flores",
    category: "robin",
    description: "Latte artesanal con vainilla, canela y espuma decorada.",
    price: 24,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "chopper-cupcakes",
    title: "Cupcakes Rumble Ball",
    category: "chopper",
    description: "Mini cupcakes de chocolate, frutilla y crema de vainilla.",
    price: 30,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "chopper-waffle",
    title: "Waffle Sakura",
    category: "chopper",
    description: "Waffle crujiente con helado, frutos rojos y miel.",
    price: 32,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "franky-cola",
    title: "Cola Super Franky",
    category: "franky",
    description: "Soda helada con limon, cereza y burbujas extra.",
    price: 16,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "franky-float",
    title: "Ice Cream Cola Coup de Burst",
    category: "franky",
    description: "Cola con bola de helado, crema batida y sirope de chocolate.",
    price: 26,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "nami-bowl",
    title: "Bowl Clima Tact",
    category: "nami",
    description: "Frutas tropicales, yogurt, granola y miel de naranja.",
    price: 36,
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "nami-smoothie",
    title: "Smoothie Arlong Park",
    category: "nami",
    description: "Mango, pina, maracuya y hielo frappe.",
    price: 22,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "brook-parfait",
    title: "Parfait Soul King",
    category: "brook",
    description: "Capas de helado, galleta, frutas y salsa de frutos rojos.",
    price: 28,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "brook-gelato",
    title: "Gelato Binks no Sake",
    category: "brook",
    description: "Trio de gelatos con vainilla, cafe y chocolate oscuro.",
    price: 25,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80"
  }
];

const storageKey = "grand_line_cart";
const themeKey = "grand_line_theme";
let cart = JSON.parse(localStorage.getItem(storageKey) || "{}");

const config = window.SUPABASE_CONFIG || {};
const supabaseReady =
  config.url &&
  config.anonKey &&
  !config.url.includes("TU-PROYECTO") &&
  !config.anonKey.includes("TU-ANON-KEY");
const supabaseClient = supabaseReady
  ? window.supabase.createClient(config.url, config.anonKey)
  : null;

function money(value) {
  return `Bs ${Number(value).toFixed(2)}`;
}

function saveCart() {
  localStorage.setItem(storageKey, JSON.stringify(cart));
}

function cartRows() {
  return Object.values(cart).map((item) => ({
    ...item,
    subtotal: item.price * item.quantity
  }));
}

function cartTotal() {
  return cartRows().reduce((sum, item) => sum + item.subtotal, 0);
}

function categoryLabel(id) {
  return crewCategories.find((category) => category.id === id)?.label || id;
}

function renderControls() {
  crewCategories.forEach((category) => {
    $("#categoryFilter").append(`<option value="${category.id}">${category.label}</option>`);
    $("#crewTabs").append(`<button class="crew-tab ${category.id === "todos" ? "active" : ""}" data-category="${category.id}" type="button">${category.label}</button>`);
  });

  dishes.forEach((dish) => {
    $("#favoriteDish").append(`<option value="${dish.title}">${dish.title}</option>`);
  });
}

function renderMenu() {
  const category = $("#categoryFilter").val();
  const query = $("#searchInput").val().trim().toLowerCase();
  const filtered = dishes.filter((dish) => {
    const matchesCategory = category === "todos" || dish.category === category;
    const matchesSearch = dish.title.toLowerCase().includes(query) || dish.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  $("#menuGrid").empty();

  if (!filtered.length) {
    $("#menuGrid").append('<p class="empty-state">No hay servicios para ese filtro.</p>');
    return;
  }

  filtered.forEach((dish) => {
    const card = $(`
      <article class="dish-card" data-category="${dish.category}">
        <img src="${dish.image}" alt="${dish.title}">
        <div class="dish-body">
          <span class="dish-category">${categoryLabel(dish.category)}</span>
          <h3>${dish.title}</h3>
          <p>${dish.description}</p>
          <div class="dish-footer">
            <strong>${money(dish.price)}</strong>
            <button class="btn btn-primary add-dish" data-id="${dish.id}" type="button">Solicitar Servicio</button>
          </div>
        </div>
      </article>
    `);
    card.hide().appendTo("#menuGrid").fadeIn(180);
  });
}

function renderCart() {
  const rows = cartRows();
  $("#cartItems").empty();

  if (!rows.length) {
    $("#cartItems").html('<p class="empty-state">Tu carrito de servicios esta vacio.</p>');
  } else {
    rows.forEach((item) => {
      $("#cartItems").append(`
        <div class="cart-item" data-id="${item.id}">
          <div>
            <h3>${item.title}</h3>
            <p>${categoryLabel(item.category)} · Unitario: ${money(item.price)}</p>
          </div>
          <div class="quantity-controls">
            <button class="qty-minus" type="button" aria-label="Restar">-</button>
            <span>${item.quantity}</span>
            <button class="qty-plus" type="button" aria-label="Sumar">+</button>
          </div>
          <strong>${money(item.subtotal)}</strong>
          <button class="remove-item" type="button">Eliminar servicio</button>
        </div>
      `);
    });
  }

  const count = rows.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartBadge").text(`${count} servicio${count === 1 ? "" : "s"}`);
  $("#cartTotal").text(money(cartTotal()));
  saveCart();
}

function addToCart(dishId) {
  const dish = dishes.find((item) => item.id === dishId);
  if (!dish) return;

  if (cart[dishId]) {
    cart[dishId].quantity += 1;
  } else {
    cart[dishId] = {
      id: dish.id,
      title: dish.title,
      category: dish.category,
      price: dish.price,
      quantity: 1
    };
  }

  renderCart();
  $("#cartBadge").stop(true).animate({ opacity: 0.35 }, 110).animate({ opacity: 1 }, 130);
}

function changeQuantity(dishId, amount) {
  if (!cart[dishId]) return;
  cart[dishId].quantity += amount;

  if (cart[dishId].quantity <= 0) {
    delete cart[dishId];
  }

  renderCart();
}

function validateField($field) {
  const value = $field.val().trim();
  const name = $field.attr("name");
  let message = "";

  if (!value) {
    message = "Este campo es obligatorio.";
  } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    message = "Ingresa un correo valido.";
  } else if ((name === "message" || name === "reviewComment") && value.length < 12) {
    message = "Escribe al menos 12 caracteres.";
  } else if (name === "rating" && (Number(value) < 1 || Number(value) > 5)) {
    message = "La calificación debe estar entre 1 y 5.";
  }

  $field.toggleClass("is-invalid", Boolean(message));
  $field.siblings(".field-error").text(message);
  if (message) {
    $field.siblings(".field-error").stop(true).slideDown(120);
  } else {
    $field.siblings(".field-error").stop(true).slideUp(120);
  }

  return !message;
}

function validateForm(selector) {
  let valid = true;
  $(`${selector} input, ${selector} textarea, ${selector} select`).each(function () {
    valid = validateField($(this)) && valid;
  });
  return valid;
}

async function syncOrder(order) {
  if (!supabaseClient) {
    return { message: "Pedido confirmado. Gracias por tu compra." };
  }

  const { data, error } = await supabaseClient
    .from("grand_line_orders")
    .insert({
      customer_name: order.customer_name,
      delivery_island: order.delivery_island,
      total: order.total,
      items: order.items
    })
    .select("id")
    .single();

  if (error) {
    return { message: "No se pudo completar el pedido. Intenta nuevamente." };
  }

  const orderItems = order.items.map((item) => ({
    order_id: data.id,
    menu_item_id: item.id,
    title: item.title,
    quantity: item.quantity,
    unit_price: item.price,
    subtotal: item.subtotal
  }));
  const { error: itemsError } = await supabaseClient.from("grand_line_order_items").insert(orderItems);

  if (itemsError) {
    return { id: data.id, message: "Pedido registrado, pero hubo un problema con algunos detalles." };
  }

  return { id: data.id, message: "Pedido registrado correctamente." };
}

async function syncContact(contact) {
  if (!supabaseClient) {
    return { message: "Mensaje enviado correctamente." };
  }

  const { error } = await supabaseClient.from("grand_line_contacts").insert(contact);
  return { message: error ? "No se pudo enviar el mensaje. Intenta nuevamente." : "Mensaje enviado correctamente." };
}

async function syncReview(review) {
  if (!supabaseClient) {
    return { message: "Reseña guardada correctamente." };
  }

  const { error } = await supabaseClient.from("grand_line_reviews").insert(review);
  return { message: error ? "No se pudo guardar la reseña. Intenta nuevamente." : "Reseña guardada correctamente." };
}

$(function () {
  renderControls();

  if (localStorage.getItem(themeKey) === "dark") {
    $("body").addClass("dark-mode");
    $("#themeToggle").text("Modo soleado");
  }

  renderMenu();
  renderCart();
  $(".field-error").hide();

  $("#categoryFilter, #searchInput").on("change keyup", renderMenu);

  $("#crewTabs").on("click", ".crew-tab", function () {
    $(".crew-tab").removeClass("active");
    $(this).addClass("active");
    $("#categoryFilter").val($(this).data("category"));
    renderMenu();
  });

  $("#menuGrid").on("click", ".add-dish", function () {
    addToCart($(this).data("id"));
    $("#orderStatus").hide().text("Servicio agregado al carrito.").fadeIn(180).delay(1200).fadeOut(300);
  });

  $("#menuGrid").on("mouseenter", ".dish-card", function () {
    $(this).stop(true).animate({ marginTop: "-7px" }, 150);
  });

  $("#menuGrid").on("mouseleave", ".dish-card", function () {
    $(this).stop(true).animate({ marginTop: "0" }, 150);
  });

  $("#cartItems").on("click", ".qty-plus", function () {
    changeQuantity($(this).closest(".cart-item").data("id"), 1);
  });

  $("#cartItems").on("click", ".qty-minus", function () {
    changeQuantity($(this).closest(".cart-item").data("id"), -1);
  });

  $("#cartItems").on("click", ".remove-item", function () {
    const id = $(this).closest(".cart-item").data("id");
    $(this).closest(".cart-item").slideUp(180, function () {
      delete cart[id];
      renderCart();
    });
  });

  $("#clearCart").on("click", function () {
    cart = {};
    $("#cartItems").slideUp(180, function () {
      renderCart();
      $("#cartItems").slideDown(180);
    });
  });

  $("#confirmOrder").on("click", async function () {
    const rows = cartRows();
    const customer = $("#customerName").val().trim() || "Cliente pirata";
    const island = $("#deliveryIsland").val().trim() || "Sin isla registrada";

    if (!rows.length) {
      $("#orderStatus").hide().text("Agrega al menos un servicio.").fadeIn(180);
      return;
    }

    const order = {
      customer_name: customer,
      delivery_island: island,
      items: rows,
      total: cartTotal()
    };
    const sync = await syncOrder(order);

    $("#orderSummary").html(`
      <p><strong>Cliente:</strong> ${customer}</p>
      <p><strong>Entrega:</strong> ${island}</p>
      <ul class="summary-list">
        ${rows.map((item) => `<li>${item.title} x ${item.quantity} - ${money(item.subtotal)}</li>`).join("")}
      </ul>
      <strong>Total: ${money(order.total)}</strong>
      <p class="muted">${sync.message}</p>
    `);

    bootstrap.Modal.getOrCreateInstance(document.getElementById("orderModal")).show();
    cart = {};
    renderCart();
    $("#orderStatus").hide().text("Pedido confirmado.").fadeIn(180).delay(1700).fadeOut(350);
  });

  $("#contactForm input, #contactForm textarea, #reviewForm input, #reviewForm textarea, #reviewForm select").on("input blur change", function () {
    validateField($(this));
  });

  $("#contactForm").on("submit", async function (event) {
    event.preventDefault();
    if (!validateForm("#contactForm")) return;

    const contact = {
      name: $("#contactName").val().trim(),
      email: $("#contactEmail").val().trim(),
      message: $("#contactMessage").val().trim()
    };
    const sync = await syncContact(contact);

    this.reset();
    $(".field-error").hide();
    $("#contactStatus").hide().text(`Mensaje enviado. ${sync.message}`).fadeIn(180).delay(2400).fadeOut(400);
  });

  $("#reviewForm").on("submit", async function (event) {
    event.preventDefault();
    if (!validateForm("#reviewForm")) return;

    const review = {
      customer_name: $("#reviewName").val().trim(),
      favorite_dish: $("#favoriteDish").val(),
      rating: Number($("#rating").val()),
      comment: $("#reviewComment").val().trim()
    };
    const sync = await syncReview(review);

    this.reset();
    $("#rating").val("5");
    $(".field-error").hide();
    $("#reviewStatus").hide().text(`Reseña guardada. ${sync.message}`).fadeIn(180).delay(2400).fadeOut(400);
  });

  $("#themeToggle").on("click", function () {
    $("body").toggleClass("dark-mode");
    const dark = $("body").hasClass("dark-mode");
    localStorage.setItem(themeKey, dark ? "dark" : "light");
    $(this).text(dark ? "Modo soleado" : "Noche pirata");
  });
});
