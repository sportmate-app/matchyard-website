(() => {
  const header = document.querySelector("#header");
  const menu = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav-links");
  const views = document.querySelectorAll(".screen-view");
  const appNav = document.querySelectorAll(".app-nav button");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 24), { passive: true });
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open menu");
  }));

  const showView = target => {
    views.forEach(view => view.classList.toggle("active", view.dataset.view === target));
    appNav.forEach(button => button.classList.toggle("active", button.dataset.target === target));
  };
  appNav.forEach(button => button.addEventListener("click", () => showView(button.dataset.target)));
  document.querySelector(".back-discover").addEventListener("click", () => showView("discover"));
  document.querySelector(".profile-trigger").addEventListener("click", () => showView("profile"));

  document.querySelectorAll(".sport-choice button").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".sport-choice button").forEach(item => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", String(item === button));
    });
    document.querySelectorAll(".match-card").forEach(card => card.classList.toggle("active-result", card.dataset.result === button.dataset.sport));
  }));

  document.querySelector(".find-button").addEventListener("click", event => {
    event.currentTarget.textContent = "Example matches refreshed ✓";
    setTimeout(() => event.currentTarget.innerHTML = 'Find potential matches <span>→</span>', 1500);
  });
  document.querySelectorAll(".connect-button").forEach(button => button.addEventListener("click", () => {
    const sent = button.classList.toggle("sent");
    button.textContent = sent ? "Sample request sent ✓" : "Send a sample request";
  }));

  document.querySelectorAll(".person-pin").forEach(pin => pin.addEventListener("click", () => {
    document.querySelectorAll(".person-pin").forEach(item => item.classList.toggle("selected", item === pin));
    const initials = pin.querySelector("span").textContent;
    document.querySelector("#mapAvatar").textContent = initials;
    document.querySelector("#mapName").textContent = pin.dataset.name;
    document.querySelector("#mapScore").textContent = pin.dataset.score;
    document.querySelector("#mapInfo").textContent = pin.dataset.info;
  }));
  document.querySelector(".map-request").addEventListener("click", event => {
    const sent = event.currentTarget.classList.toggle("sent");
    event.currentTarget.textContent = sent ? "Sample request sent ✓" : "Send sample request";
  });
  document.querySelector(".publish-demo").addEventListener("click", event => {
    const done = event.currentTarget.classList.toggle("done");
    event.currentTarget.textContent = done ? "Preview ready ✓" : "Preview game post";
  });

  document.querySelector(".waitlist-form").addEventListener("submit", event => {
    event.preventDefault();
    const input = event.currentTarget.querySelector("input");
    if (!input.checkValidity()) return input.reportValidity();
    input.disabled = true;
    event.currentTarget.querySelector("button").disabled = true;
    event.currentTarget.querySelector("button").textContent = "You're on the list ✓";
    const status = document.querySelector(".form-status");
    status.textContent = "Thanks. We’ll share honest product updates as the private beta takes shape.";
    status.style.color = "var(--peri)";
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
