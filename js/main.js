// ============================================================
// CORPORATE FABLES — shared behaviour
// ============================================================

// --- update these two once, they're used across every page ---
const SUBSTACK_URL = "https://substack.com/@stefrengo"; // TODO Stefano: sostituisci con l'URL pubblico della newsletter se diverso
const LINKEDIN_URL  = "#"; // TODO Stefano: incolla qui il link al tuo profilo LinkedIn

// --- builds one fable card from a FABLES entry (see js/fables-data.js) ---
function fableCardHTML(f) {
  const link = f.url && f.url.trim() ? f.url.trim() : SUBSTACK_URL;
  return `
    <article class="fable-card">
      <svg class="crest-icon" viewBox="0 0 100 120"><use href="assets/crests.svg#crest-${f.crest}"/></svg>
      <span class="role">${f.character} — ${f.role}</span>
      <h3>${f.title}</h3>
      <p class="moral">${f.moral}</p>
      <p class="teaser">${f.teaser}</p>
      <a class="read-link" href="${link}" target="_blank" rel="noopener">Leggi su Substack →</a>
    </article>`;
}

// renders fables into any container with [data-fable-list], optionally
// capped via data-fable-limit="3" (used for the homepage preview)
function renderFables() {
  document.querySelectorAll("[data-fable-list]").forEach((container) => {
    const limit = parseInt(container.getAttribute("data-fable-limit"), 10);
    const items = Number.isFinite(limit) ? FABLES.slice(0, limit) : FABLES;
    container.innerHTML = items.map(fableCardHTML).join("");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // apply the constants to every element that opted in via data attributes
  document.querySelectorAll("[data-substack-link]").forEach((el) => (el.href = SUBSTACK_URL));
  document.querySelectorAll("[data-linkedin-link]").forEach((el) => (el.href = LINKEDIN_URL));

  // render fable cards wherever a container asks for them
  if (typeof FABLES !== "undefined") renderFables();

  // mobile nav toggle
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

  // scroll reveal
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

  // contact form (static hosting: no backend, so we open the user's mail client)
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const subject = encodeURIComponent(`Contatto dal sito — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:info@corporatefables.it?subject=${subject}&body=${body}`;
    });
  }
});
