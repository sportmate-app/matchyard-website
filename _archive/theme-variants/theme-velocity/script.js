(() => {
  const nav = document.querySelector("#nav");
  const menu = document.querySelector(".menu");
  const navLinks = document.querySelector(".nav-links");
  const modal = document.querySelector("#demoModal");
  const phone = document.querySelector(".phone-wrap");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 28), { passive: true });

  menu.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open menu");
  }));

  const openDemo = () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
  };
  const closeDemo = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };
  document.querySelector("#watchDemo").addEventListener("click", openDemo);
  modal.querySelector(".modal-close").addEventListener("click", closeDemo);
  modal.addEventListener("click", event => { if (event.target === modal) closeDemo(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeDemo(); });
  modal.querySelector(".modal-action").addEventListener("click", () => {
    closeDemo();
    phone.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  });

  document.querySelectorAll(".app-tabs button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".app-tabs button").forEach(item => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", String(item === button));
    });
    const view = button.dataset.view;
    const title = document.querySelector(".app-head strong");
    title.textContent = view === "nearby" ? "Ready to play?" : view === "players" ? "Players for you" : "Clubs near you";
  }));

  document.querySelectorAll(".sport-filter button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".sport-filter button").forEach(item => item.classList.toggle("active", item === button));
    const sport = button.dataset.sport;
    document.querySelectorAll(".game-card").forEach(card => {
      card.style.display = sport === "all" || card.dataset.sport === sport ? "" : "none";
    });
  }));

  document.querySelector(".join-button").addEventListener("click", event => {
    const joined = event.currentTarget.classList.toggle("joined");
    event.currentTarget.textContent = joined ? "Joined ✓" : "Join";
    document.querySelector(".people span").textContent = joined ? "4 / 4 joined" : "3 / 4 joined";
  });

  document.querySelectorAll(".sport-selector button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".sport-selector button").forEach(item => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", String(item === button));
    });
    document.querySelectorAll(".sport-pane").forEach(panel => panel.classList.toggle("active", panel.id === button.dataset.panel));
  }));

  document.querySelector(".signup-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = event.currentTarget.querySelector("input");
    if (!input.checkValidity()) return input.reportValidity();
    input.disabled = true;
    event.currentTarget.querySelector("button").disabled = true;
    event.currentTarget.querySelector("button").textContent = "You're in ✓";
    document.querySelector(".signup-status").textContent = "You're on the list. Your launch invite is reserved.";
    document.querySelector(".signup-status").style.color = "var(--lime)";
  });

  if (!reduceMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    }), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((element, index) => {
      element.style.transitionDelay = `${(index % 3) * 70}ms`;
      observer.observe(element);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(element => element.classList.add("in"));
  }
})();
