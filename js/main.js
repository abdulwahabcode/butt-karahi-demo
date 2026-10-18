/* Butt Karahi — menu data + interactions */

const MENU = {
  karahi: [
    { name: "Mutton Karahi", note: "Full — the legend itself, desi ghee, iron pan", price: "Rs 2,200", tag: "Signature" },
    { name: "Mutton Karahi", note: "Half — for two, served sizzling", price: "Rs 1,250" },
    { name: "Chicken Karahi", note: "Full — desi murghi style, ginger & green chilli", price: "Rs 1,700" },
    { name: "Chicken Karahi", note: "Half — quick serve", price: "Rs 950" },
    { name: "Mutton White Karahi", note: "Full — cream, black pepper, no red chilli", price: "Rs 2,400", tag: "Chef's Pick" },
    { name: "Chicken White Karahi", note: "Full — malai finish", price: "Rs 1,800" },
    { name: "Karahi Qeema", note: "Minced mutton, tomatoes, fresh coriander", price: "Rs 1,250" }
  ],
  bbq: [
    { name: "Seekh Kabab", note: "4 pcs — hand-rolled, charcoal grilled", price: "Rs 450", tag: "Famous" },
    { name: "Mutton Chops", note: "8 pcs — overnight marinade", price: "Rs 1,400" },
    { name: "Mutton Tikka", note: "Charcoal seared, lemon & onion", price: "Rs 800" },
    { name: "Chicken Malai Boti", note: "Cream & cheese marinade, melt-in-mouth", price: "Rs 650" },
    { name: "Chicken Tikka", note: "Leg or chest piece", price: "Rs 350" },
    { name: "Butt BBQ Platter", note: "Kababs, tikka, malai boti & chops — serves 4", price: "Rs 2,200", tag: "Sharing" }
  ],
  desi: [
    { name: "Mutton Qorma", note: "Slow-cooked in desi ghee", price: "Rs 1,100" },
    { name: "Chicken Qorma", note: "Old Lahore recipe", price: "Rs 750" },
    { name: "Aloo Gosht", note: "Mutton with potatoes, home style", price: "Rs 650" },
    { name: "Daal Fry", note: "Tarka in desi ghee", price: "Rs 350" },
    { name: "Daal Makhni", note: "Overnight simmer, cream finish", price: "Rs 400" },
    { name: "Chicken Biryani", note: "Single — aloo & masala rice", price: "Rs 300" }
  ],
  breads: [
    { name: "Roghni Naan", note: "Sesame topped, tandoor fresh", price: "Rs 80" },
    { name: "Garlic Naan", note: "With desi ghee brush", price: "Rs 120" },
    { name: "Tandoori Naan", note: "Classic plain", price: "Rs 60" },
    { name: "Qeema Naan", note: "Stuffed with spiced mince", price: "Rs 180" },
    { name: "Lachha Paratha", note: "Flaky, desi ghee layers", price: "Rs 100" },
    { name: "Tandoori Roti", note: "Whole wheat", price: "Rs 40" }
  ],
  drinks: [
    { name: "Meethi Lassi", note: "Thick, with malai topping", price: "Rs 200" },
    { name: "Namkeen Lassi", note: "Salted, churned fresh", price: "Rs 150" },
    { name: "Kashmiri Chai", note: "Pink tea with crushed nuts", price: "Rs 150" },
    { name: "Doodh Patti", note: "Strong milky chai", price: "Rs 120" },
    { name: "Fresh Lime Soda", note: "Sweet or salted", price: "Rs 150" },
    { name: "Kheer", note: "Rice pudding, cardamom", price: "Rs 250" },
    { name: "Shahi Tukray", note: "Bread pudding, rabri & nuts", price: "Rs 300" }
  ]
};

const list = document.getElementById("menuList");
const tabs = document.getElementById("menuTabs");

function renderMenu(key) {
  list.innerHTML = "";
  MENU[key].forEach((item) => {
    const el = document.createElement("div");
    el.className = "menu-item";
    el.innerHTML =
      '<div class="mi-name">' + item.name +
      (item.tag ? '<span class="mi-tag">' + item.tag + "</span>" : "") +
      (item.note ? "<small>" + item.note + "</small>" : "") +
      '</div><span class="mi-dots"></span><div class="mi-price">' + item.price + "</div>";
    list.appendChild(el);
  });
}

tabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  renderMenu(btn.dataset.filter);
});

renderMenu("karahi");

/* sticky nav */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

/* mobile nav */
const toggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  toggle.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle.classList.remove("open");
  })
);

/* reveal on scroll */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".panel-text, .menu-head, .voices-card, .footer-inner").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
