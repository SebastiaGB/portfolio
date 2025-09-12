// ====================== script.js ======================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  const tabs = document.querySelectorAll("#tabs .tab");
  const backToTop = document.getElementById("back-to-top");

  // ===== Modal elements =====
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDetails = document.getElementById("modal-details");
  const modalGithub = document.getElementById("modal-github");
  const modalDemo = document.getElementById("modal-demo");
  const modalClose = document.querySelector(".modal-close");
  const modalTech = document.getElementById("modal-tech");

  let lastFocusedElement = null; // para focus trap

  // ====================== Modal ======================
  function openModal(projectId) {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;

    // Guardar elemento que tenía el foco
    lastFocusedElement = document.activeElement;

    // Contenido dinámico
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalDetails.innerHTML = `<p>${project.details || ""}</p>`;

    // Tecnologías (chips)
    modalTech.innerHTML = project.technologies?.length
      ? project.technologies.map((tech) => `<span class="tech-chip">${tech}</span>`).join("")
      : "";

    // Botones
    modalGithub.style.display = project.github ? "inline-block" : "none";
    modalDemo.style.display = project.demo ? "inline-block" : "none";
    if (project.github) modalGithub.href = project.github;
    if (project.demo) modalDemo.href = project.demo;

    // Accesibilidad
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.style.display = "flex";

    // Enfocar modal
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    // Devolver foco al último elemento
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  // ===== Eventos de cerrar modal =====
  modalClose.addEventListener("click", closeModal);

  // Cerrar con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();

    // Focus trap dentro del modal
    if (e.key === "Tab" && modal.style.display === "flex") {
      const focusable = modal.querySelectorAll("a, button, [tabindex]:not([tabindex='-1'])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // ====================== Scroll suave ======================
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }
  window.scrollToSection = scrollToSection;

  // ====================== Botón volver arriba con IntersectionObserver ======================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) backToTop.classList.add("show");
        else backToTop.classList.remove("show");
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(document.querySelector("#hero"));

  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // ====================== Renderizar proyectos ======================
  function renderProjects(filteredProjects) {
    container.innerHTML = "";

    if (filteredProjects.length === 0) {
      container.innerHTML = `
        <div class="no-projects">
          <p>No hay proyectos disponibles por ahora 🛠️</p>
        </div>
      `;
      container.classList.remove("multi-columns");
      return;
    }

    if (filteredProjects.length > 1) {
      container.classList.add("multi-columns");
    } else {
      container.classList.remove("multi-columns");
    }

    filteredProjects.forEach((proj, index) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.style.cursor = "pointer";

      card.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}" loading="lazy">
        <div class="project-card-content">
          <h3>${proj.title}</h3>
          ${proj.description ? `<p>${proj.description}</p>` : ""}
          <div class="project-links">
            ${proj.github ? `<a href="${proj.github}" target="_blank" class="btn-link"><i class="fab fa-github"></i> GitHub</a>` : ""}
            ${proj.demo ? `<a href="${proj.demo}" target="_blank" class="btn-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ""}
          </div>
        </div>
      `;

      // Animación fade-in escalonada
      setTimeout(() => card.classList.add("show"), index * 150);

      // Evento para abrir modal
      card.addEventListener("click", () => openModal(proj.id));

      container.appendChild(card);
    });
  }

  // ====================== Tabs de filtrado con localStorage ======================
  const savedFilter = localStorage.getItem("selectedTab") || "Todos";

  function applyFilter(filter) {
    if (filter === "Todos") {
      renderProjects(projects);
    } else {
      const filtered = projects.filter((p) => p.tags && p.tags.includes(filter));
      renderProjects(filtered);
    }
    localStorage.setItem("selectedTab", filter);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      applyFilter(filter);
    });
  });

  // Render inicial con filtro guardado
  tabs.forEach((tab) => {
    if (tab.getAttribute("data-filter") === savedFilter) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  applyFilter(savedFilter);
});
