// ============================================================
// CORPORATE FABLES — comportamento condiviso
// ============================================================

// --- aggiorna questi due una volta sola, valgono per tutto il sito ---
const SUBSTACK_URL = "https://substack.com/@stefrengo"; // TODO Stefano: sostituisci con l'URL pubblico della newsletter se diverso
const LINKEDIN_URL  = "#"; // TODO Stefano: incolla qui il link al tuo profilo LinkedIn

// costruisce una riga dell'elenco favole a partire da un oggetto in js/fables-data.js
function fableRowHTML(f) {
  const link = f.url && f.url.trim() ? f.url.trim() : SUBSTACK_URL;
  return `
    <article class="fable-row">
      <div class="who">${f.character}, ${f.role}</div>
      <div>
        <h3><a href="${link}" target="_blank" rel="noopener">${f.title}</a></h3>
        <p class="moral">${f.moral}</p>
        <p class="teaser">${f.teaser}</p>
        <a class="read-link btn-text" href="${link}" target="_blank" rel="noopener">Leggi su Substack</a>
      </div>
    </article>`;
}

function renderFables() {
  document.querySelectorAll("[data-fable-list]").forEach((container) => {
    const limit = parseInt(container.getAttribute("data-fable-limit"), 10);
    const items = Number.isFinite(limit) ? FABLES.slice(0, limit) : FABLES;
    container.innerHTML = items.map(fableRowHTML).join("");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-substack-link]").forEach((el) => (el.href = SUBSTACK_URL));
  document.querySelectorAll("[data-linkedin-link]").forEach((el) => (el.href = LINKEDIN_URL));

  if (typeof FABLES !== "undefined") renderFables();

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const subject = encodeURIComponent(`Contatto dal sito, ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
      window.location.href = `mailto:info@corporatefables.it?subject=${subject}&body=${body}`;
    });
  }
});
