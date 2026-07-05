(() => {
  const header = document.querySelector("#siteHeader");
  const menu = document.querySelector(".menu-button");
  const nav = document.querySelector(".desktop-nav");
  const form = document.querySelector(".waitlist-form");
  const formNote = document.querySelector(".form-note");
  const joinButton = document.querySelector(".join-demo");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }, { passive: true });

  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }));

  joinButton.addEventListener("click", () => {
    const joined = joinButton.classList.toggle("joined");
    joinButton.textContent = joined ? "Spot saved ✓" : "Join game";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    if (!input.checkValidity()) {
      input.reportValidity();
      return;
    }
    form.querySelector("button").textContent = "YOU'RE ON THE LIST ✓";
    input.disabled = true;
    form.querySelector("button").disabled = true;
    formNote.textContent = "Welcome to the club. Watch your inbox for your invite.";
    formNote.style.color = "var(--orange)";
  });

  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
      observer.observe(element);
    });
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("in"));
  }
})();
