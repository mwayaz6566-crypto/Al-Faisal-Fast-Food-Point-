/* =========================================================
   AL-FAISAL FAST FOOD POINT — SCRIPT.JS
========================================================= */

/* ---------------------------------------------------------
   0. MENU DATA
--------------------------------------------------------- */
const MENU = [
  { name:"Faisal Beef Burger", cat:"burgers", price:450, rating:4.8, desc:"Char-grilled beef patty, cheese, house sauce.", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
  { name:"Smoky BBQ Burger", cat:"burgers", price:490, rating:4.7, desc:"Double patty with smoky BBQ glaze.", img:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80" },
  { name:"Zinger Burger", cat:"zinger", price:420, rating:4.9, desc:"Crispy fried fillet, spicy mayo, lettuce.", img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80" },
  { name:"Zinger Supreme", cat:"zinger", price:520, rating:4.8, desc:"Loaded zinger with cheese &amp; jalapenos.", img:"https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&w=600&q=80" },
  { name:"Chicken Tikka Pizza", cat:"pizza", price:990, rating:4.7, desc:"Wood-fired base, tikka chunks, mozzarella.", img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" },
  { name:"Behari Boti Pizza", cat:"pizza", price:1090, rating:4.9, desc:"Spiced behari boti, onions, extra cheese.", img:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600&q=80" },
  { name:"Chicken Shawarma", cat:"shawarma", price:320, rating:4.8, desc:"Grilled chicken, garlic sauce, fresh veg wrap.", img:"https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=600&q=80" },
  { name:"Beef Shawarma", cat:"shawarma", price:350, rating:4.6, desc:"Marinated beef strips in soft flatbread.", img:"beef.png" },
  { name:"Crispy Broast (Half)", cat:"broast", price:560, rating:4.9, desc:"Golden crunch broast with fries &amp; dip.", img:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80" },
  { name:"Crispy Broast (Full)", cat:"broast", price:1050, rating:4.9, desc:"Full crispy broast, serves 2-3 people.", img:"b3.png" },
  { name:"Club Sandwich", cat:"sandwiches", price:380, rating:4.6, desc:"Triple-layer chicken, egg &amp; veg sandwich.", img:"https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80" },
  { name:"Grilled Cheese Sandwich", cat:"sandwiches", price:280, rating:4.5, desc:"Toasted, gooey triple-cheese blend.", img:"https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=600&q=80" },
  { name:"Peri Peri Fries", cat:"fries", price:250, rating:4.7, desc:"Crispy fries tossed in peri peri spice.", img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80" },
  { name:"Loaded Cheese Fries", cat:"fries", price:340, rating:4.8, desc:"Fries loaded with cheese sauce &amp; jalapenos.", img:"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80" },
  { name:"BBQ Chicken Platter", cat:"bbq", price:890, rating:4.8, desc:"Grilled chicken skewers, salad, sauce.", img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80" },
  { name:"Seekh Kebab Platter", cat:"bbq", price:750, rating:4.7, desc:"Juicy beef seekh kebabs, naan, chutney.", img:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
  { name:"Chicken Nuggets (8pc)", cat:"nuggets", price:390, rating:4.6, desc:"Crispy golden nuggets with dip sauce.", img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80" },
  { name:"Grilled Chicken Wrap", cat:"wraps", price:340, rating:4.6, desc:"Charred chicken, veg &amp; sauce in a soft wrap.", img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80" },
  { name:"Crispy Zinger Wrap", cat:"wraps", price:360, rating:4.7, desc:"Fried fillet strips wrapped with slaw.", img:"https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?auto=format&fit=crop&w=600&q=80" },
  { name:"Chocolate Lava Cake", cat:"desserts", price:320, rating:4.9, desc:"Warm cake with molten chocolate centre.", img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80" },
  { name:"Kunafa Slice", cat:"desserts", price:380, rating:4.8, desc:"Crispy kunafa, sweet syrup, cheese layer.", img:"https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=600&q=80" },
  { name:"Fresh Lemonade", cat:"drinks", price:180, rating:4.7, desc:"Chilled mint &amp; lemon refresher.", img:"https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80" },
  { name:"Soft Drink (1.5L)", cat:"drinks", price:200, rating:4.5, desc:"Ice-cold assorted soft drinks.", img:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" },

  /* --- New Arrivals --- */
  { name:"Double Decker Cheese Burger", cat:"burgers", price:590, rating:4.8, desc:"Two beef patties, triple cheese, secret sauce.", img:"https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80" },
  { name:"Mushroom Swiss Burger", cat:"burgers", price:520, rating:4.6, desc:"Sauteed mushrooms, melted swiss, garlic aioli.", img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80" },
  { name:"Zinger Cheese Melt", cat:"zinger", price:540, rating:4.8, desc:"Crispy fillet smothered in molten cheese.", img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80" },
  { name:"Spicy Zinger Twister", cat:"zinger", price:460, rating:4.7, desc:"Extra-spicy fillet rolled with slaw &amp; sauce.", img:"https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80" },
  { name:"Fajita Pizza", cat:"pizza", price:1050, rating:4.7, desc:"Sizzling chicken fajita, peppers, onions.", img:"https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=600&q=80" },
  { name:"Four Cheese Pizza", cat:"pizza", price:1150, rating:4.9, desc:"Mozzarella, cheddar, parmesan &amp; feta blend.", img:"https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&q=80" },
  { name:"Loaded Fries Shawarma Box", cat:"shawarma", price:480, rating:4.8, desc:"Shredded shawarma over cheesy loaded fries.", img:"https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=600&q=80" },
  { name:"Mixed Grill Shawarma Plate", cat:"shawarma", price:650, rating:4.7, desc:"Chicken &amp; beef shawarma, rice, garlic sauce.", img:"147.png" },
  { name:"Broast Burger", cat:"broast", price:480, rating:4.6, desc:"Crispy broast fillet stacked in a soft bun.", img:"broast burger.png" },
  { name:"Broast Bucket (6pc)", cat:"broast", price:1350, rating:4.9, desc:"Six-piece crispy broast bucket, serves a group.", img:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80" },
  { name:"Steak Sandwich", cat:"sandwiches", price:450, rating:4.7, desc:"Grilled beef steak strips, caramelised onion.", img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80" },
  { name:"Egg &amp; Cheese Sandwich", cat:"sandwiches", price:260, rating:4.5, desc:"Fluffy egg, melted cheese, toasted bread.", img:"egg.png" },
  { name:"Masala Fries", cat:"fries", price:270, rating:4.6, desc:"Crispy fries tossed in tangy desi masala.", img:"https://images.unsplash.com/photo-1630431341973-02e1b662ec35?auto=format&fit=crop&w=600&q=80" },
  { name:"Curly Fries", cat:"fries", price:290, rating:4.7, desc:"Spiral-cut fries, extra crunchy, lightly salted.", img:"https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80" },
  { name:"BBQ Malai Boti Platter", cat:"bbq", price:820, rating:4.8, desc:"Creamy malai boti skewers, mint chutney.", img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" },
  { name:"Reshmi Kebab Platter", cat:"bbq", price:780, rating:4.7, desc:"Silky reshmi kebabs, grilled to perfection.", img:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80" },
  { name:"Spicy Chicken Wings (6pc)", cat:"nuggets", price:420, rating:4.7, desc:"Fiery buffalo-style wings with dip.", img:"https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=600&q=80" },
  { name:"Beef Seekh Wrap", cat:"wraps", price:370, rating:4.7, desc:"Spiced beef seekh, chutney, soft roti wrap.", img:"https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=600&q=80" },
  { name:"Veggie Delight Wrap", cat:"wraps", price:300, rating:4.5, desc:"Grilled vegetables, hummus &amp; fresh greens.", img:"wrap.png" },
  { name:"New York Cheesecake", cat:"desserts", price:400, rating:4.8, desc:"Rich, creamy classic baked cheesecake slice.", img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
  { name:"Fruit Trifle", cat:"desserts", price:340, rating:4.6, desc:"Layered sponge, custard &amp; fresh fruit.", img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80" },
  { name:"Mint Margarita Mocktail", cat:"drinks", price:220, rating:4.7, desc:"Zesty lime &amp; mint mocktail over crushed ice.", img:"https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80" },
];

/* ---------------------------------------------------------
   1. PRELOADER
--------------------------------------------------------- */
window.addEventListener("load", () => {
  const fill = document.getElementById("preloaderFill");
  const pct = document.getElementById("preloaderPct");
  const preloader = document.getElementById("preloader");
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add("done");
        document.body.style.overflow = "";
        initRevealAnimations();
      }, 350);
    }
    fill.style.width = progress + "%";
    pct.textContent = Math.floor(progress) + "%";
  }, 120);
});
document.body.style.overflow = "hidden";

/* ---------------------------------------------------------
   2. LENIS SMOOTH SCROLL + GSAP TICKER
--------------------------------------------------------- */
let lenis;
if (window.Lenis) {
  lenis = new Lenis({ duration: 1.1, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  if (lenis) lenis.on("scroll", ScrollTrigger.update);
}

/* Smooth anchor scrolling */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      const target = document.querySelector(id);
      if (lenis) lenis.scrollTo(target, { offset: -80 });
      else target.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu();
    }
  });
});

/* ---------------------------------------------------------
   3. CUSTOM CURSOR
--------------------------------------------------------- */
const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  window.addEventListener("mousemove", e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursorDot.style.left = mouseX + "px"; cursorDot.style.top = mouseY + "px";
  });
  (function animRing(){
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.left = ringX + "px"; cursorRing.style.top = ringY + "px";
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll("a, button, .food-card, .masonry-item, input, select, textarea").forEach(el => {
    el.addEventListener("mouseenter", () => cursorRing.classList.add("grow"));
    el.addEventListener("mouseleave", () => cursorRing.classList.remove("grow"));
  });
}

/* ---------------------------------------------------------
   4. SCROLL PROGRESS BAR
--------------------------------------------------------- */
const scrollProgress = document.getElementById("scrollProgress");
function updateScrollProgress(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  scrollProgress.style.width = scrolled + "%";
}
window.addEventListener("scroll", updateScrollProgress);

/* ---------------------------------------------------------
   5. NAVBAR SCROLL STATE + BACK TO TOP + ACTIVE LINK
--------------------------------------------------------- */
const navbar = document.getElementById("navbar");
const backTop = document.getElementById("backTop");
const sections = document.querySelectorAll("section[id]");
const navLinksEls = document.querySelectorAll("[data-nav]");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  backTop.classList.toggle("show", window.scrollY > 600);

  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 140;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinksEls.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

backTop.addEventListener("click", () => {
  if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------------------------------------------------------
   6. MOBILE MENU
--------------------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
function closeMobileMenu(){ hamburger.classList.remove("active"); mobileMenu.classList.remove("open"); }
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});
document.querySelectorAll("[data-nav-mobile]").forEach(a => a.addEventListener("click", closeMobileMenu));

/* ---------------------------------------------------------
   7. SEARCH PANEL
--------------------------------------------------------- */
const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");
const searchResults = document.getElementById("searchResults");

searchToggle.addEventListener("click", () => {
  searchPanel.classList.toggle("open");
  if (searchPanel.classList.contains("open")) setTimeout(() => searchInput.focus(), 300);
});
searchClose.addEventListener("click", () => searchPanel.classList.remove("open"));

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.innerHTML = ""; return; }
  const matches = MENU.filter(m => m.name.toLowerCase().includes(q) || m.cat.includes(q));
  searchResults.innerHTML = matches.length
    ? matches.map(m => `
      <div class="search-result" data-cat="${m.cat}">
        <img src="${m.img}" alt="${m.name}">
        <div><strong>${m.name}</strong><span>Rs ${m.price}</span></div>
      </div>`).join("")
    : `<div class="search-empty">No dishes found for "${searchInput.value}"</div>`;

  searchResults.querySelectorAll(".search-result").forEach(el => {
    el.addEventListener("click", () => {
      searchPanel.classList.remove("open");
      setActiveFilter(el.dataset.cat);
      const target = document.querySelector("#menu");
      if (lenis) lenis.scrollTo(target, { offset: -80 }); else target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

/* ---------------------------------------------------------
   8. THEME TOGGLE
--------------------------------------------------------- */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});

/* ---------------------------------------------------------
   9. MENU RENDER + FILTER
--------------------------------------------------------- */
const menuGrid = document.getElementById("menuGrid");
const filterChips = document.querySelectorAll(".filter-chip");

function renderMenu(filter = "all"){
  const items = filter === "all" ? MENU : MENU.filter(m => m.cat === filter);
  menuGrid.innerHTML = items.length ? items.map(m => `
    <div class="food-card">
      <div class="food-card-img">
        <img src="${m.img}" alt="${m.name}" loading="lazy">
        <span class="food-card-cat">${m.cat}</span>
      </div>
      <div class="food-card-top">
        <h4>${m.name}</h4>
        <span class="food-card-price">Rs ${m.price}</span>
      </div>
      <p>${m.desc}</p>
      <div class="food-card-foot">
        <span class="food-card-rating"><i class="fa-solid fa-star"></i> ${m.rating}</span>
        <a href="#reserve" class="food-card-order" aria-label="Order ${m.name}"><i class="fa-solid fa-bag-shopping"></i></a>
      </div>
    </div>
  `).join("") : `<div class="menu-empty">No items in this category yet.</div>`;

  requestAnimationFrame(() => {
    menuGrid.querySelectorAll(".food-card").forEach((card, i) => {
      setTimeout(() => card.classList.add("show"), i * 60);
    });
  });
}
function setActiveFilter(cat){
  filterChips.forEach(c => c.classList.toggle("active", c.dataset.filter === cat));
  renderMenu(cat);
}
filterChips.forEach(chip => chip.addEventListener("click", () => setActiveFilter(chip.dataset.filter)));
renderMenu();

/* Card tilt effect */
menuGrid.addEventListener("mousemove", e => {
  const card = e.target.closest(".food-card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  card.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
});
menuGrid.addEventListener("mouseleave", e => {
  document.querySelectorAll(".food-card").forEach(c => c.style.transform = "");
}, true);
menuGrid.addEventListener("mouseout", e => {
  const card = e.target.closest(".food-card");
  if (card && !card.contains(e.relatedTarget)) card.style.transform = "";
});

/* ---------------------------------------------------------
   10. OFFER COUNTDOWN TIMERS
--------------------------------------------------------- */
document.querySelectorAll("[data-countdown]").forEach((el, i) => {
  const end = Date.now() + (6 - i * 1.5) * 60 * 60 * 1000; // staggered deadlines
  function tick(){
    const diff = Math.max(0, end - Date.now());
    const h = String(Math.floor(diff / 3.6e6)).padStart(2, "0");
    const m = String(Math.floor((diff % 3.6e6) / 6e4)).padStart(2, "0");
    const s = String(Math.floor((diff % 6e4) / 1000)).padStart(2, "0");
    el.querySelector("[data-h]").textContent = h;
    el.querySelector("[data-m]").textContent = m;
    el.querySelector("[data-s]").textContent = s;
  }
  tick();
  setInterval(tick, 1000);
});

/* ---------------------------------------------------------
   11. ANIMATED COUNTERS (on scroll into view)
--------------------------------------------------------- */
const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
counters.forEach(c => counterObserver.observe(c));

function animateCounter(el){
  const target = parseInt(el.dataset.count, 10);
  const duration = 1800;
  const start = performance.now();
  function step(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(step);
}

/* ---------------------------------------------------------
   12. GALLERY LIGHTBOX
--------------------------------------------------------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
document.querySelectorAll(".masonry-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.dataset.full;
    lightboxImg.alt = item.querySelector("img").alt;
    lightbox.classList.add("open");
  });
});
document.getElementById("lightboxClose").addEventListener("click", () => lightbox.classList.remove("open"));
lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.classList.remove("open"); });

/* ---------------------------------------------------------
   13. TESTIMONIALS SWIPER
--------------------------------------------------------- */
if (window.Swiper) {
  new Swiper(".testiSwiper", {
    loop: true,
    autoplay: { delay: 4200, disableOnInteraction: false },
    spaceBetween: 26,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1100: { slidesPerView: 3 }
    }
  });
}

/* ---------------------------------------------------------
   14. RESERVATION FORM
--------------------------------------------------------- */
const reserveForm = document.getElementById("reserveForm");
const submitBtn = document.getElementById("submitBtn");
const formSuccess = document.getElementById("formSuccess");

reserveForm.addEventListener("submit", e => {
  e.preventDefault();
  submitBtn.classList.add("loading");
  setTimeout(() => {
    submitBtn.classList.remove("loading");
    formSuccess.classList.add("show");
  }, 1400);
});
document.getElementById("successClose").addEventListener("click", () => {
  formSuccess.classList.remove("show");
  reserveForm.reset();
});

/* Newsletter (demo confirmation) */
document.getElementById("newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  const icon = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-check"></i>';
  setTimeout(() => { btn.innerHTML = icon; e.target.reset(); }, 1800);
});

/* ---------------------------------------------------------
   15. FOOTER YEAR
--------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------------------------------------------------
   16. HERO CANVAS PARTICLES (embers/steam)
--------------------------------------------------------- */
const canvas = document.getElementById("heroParticles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas(){
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
function createParticles(){
  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 26000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.6,
      speedY: Math.random() * 0.35 + 0.08,
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15
    });
  }
}
function drawParticles(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
    grad.addColorStop(0, `rgba(255,183,3,${p.alpha})`);
    grad.addColorStop(1, "rgba(255,122,26,0)");
    ctx.fillStyle = grad;
    ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
    ctx.fill();
    p.y -= p.speedY;
    p.x += p.speedX;
    if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
  });
  requestAnimationFrame(drawParticles);
}
if (canvas) {
  resizeCanvas();
  createParticles();
  drawParticles();
  window.addEventListener("resize", () => { resizeCanvas(); createParticles(); });
}

/* Embers (DOM based, staggered) */
const emberContainer = document.getElementById("heroEmbers");
if (emberContainer) {
  for (let i = 0; i < 24; i++) {
    const e = document.createElement("span");
    e.className = "ember";
    e.style.left = Math.random() * 100 + "%";
    e.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
    e.style.animationDuration = (6 + Math.random() * 6) + "s";
    e.style.animationDelay = (Math.random() * 8) + "s";
    emberContainer.appendChild(e);
  }
}

/* ---------------------------------------------------------
   17. MOUSE PARALLAX ON HERO FLOATING FOOD
--------------------------------------------------------- */
const heroFloats = document.querySelectorAll(".hero-float");
const heroSection = document.querySelector(".hero");
if (heroSection) {
  heroSection.addEventListener("mousemove", e => {
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
    heroFloats.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.5;
      el.style.transform = `translate(${dx * 30 * speed}px, ${dy * 30 * speed}px)`;
    });
  });
}

/* ---------------------------------------------------------
   18. GSAP SCROLL REVEAL ANIMATIONS
--------------------------------------------------------- */
function initRevealAnimations(){
  if (!window.gsap) {
    document.querySelectorAll(".reveal-up, .reveal-left").forEach(el => el.style.opacity = 1);
    return;
  }
  document.body.classList.add("gsap-ready");

  // Hero entrance timeline
  gsap.timeline({ delay: 0.2 })
    .to(".hero-title .line", { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power4.out" }, 0)
    .fromTo(".hero-title .line", { yPercent: 100 }, { yPercent: 0, duration: 1, stagger: 0.15, ease: "power4.out" }, 0)
    .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.1)
    .to(".hero-sub", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.35)
    .to(".hero-actions", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.5)
    .to(".hero-meta", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.65);

  gsap.set(".hero-title .line", { yPercent: 100, opacity: 0 });
  gsap.to(".hero-title .line", { yPercent: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.2 });

  // Generic scroll reveals
  gsap.utils.toArray(".reveal-up").forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" }
    });
  });
  gsap.utils.toArray(".reveal-left").forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  // Re-run reveal for dynamically injected menu cards' parent
  ScrollTrigger.refresh();
}
