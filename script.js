// ====================== script.js ======================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  const tabs = document.querySelectorAll("#tabs .tab");
  const backToTop = document.getElementById("back-to-top");

  // ===== Modal elements =====
  const modal = document.getElementById("project-modal");
  const modalDialog = modal.querySelector(".modal-content");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDetails = document.getElementById("modal-details");
  const modalGithub = document.getElementById("modal-github");
  const modalDemo = document.getElementById("modal-demo");
  const modalClose = document.querySelector(".modal-close");
  const modalTech = document.getElementById("modal-tech");

  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <section class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
      <button class="lightbox-close" type="button" aria-label="Cerrar imagen ampliada">&times;</button>
      <img class="lightbox-img" src="" alt="">
    </section>`;
  document.body.appendChild(lightbox);
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");

  let lastFocusedElement = null; // para focus trap

  // ====================== Notificación ======================
  function showNotification(message) {
    const notif = document.createElement("div");
    notif.className = "notification";
    notif.setAttribute("role", "status");
    const icon = document.createElement("i");
    icon.className = "fas fa-info-circle";
    icon.setAttribute("aria-hidden", "true");
    notif.append(icon, document.createTextNode(message));
    document.body.appendChild(notif);

    // trigger animación
    setTimeout(() => notif.classList.add("show"), 10);

    // desaparecer
    setTimeout(() => {
      notif.classList.remove("show");
      setTimeout(() => notif.remove(), 300);
    }, 3000);
  }

  // ====================== Modal ======================
  function openModal(projectId) {
    const project = projects.find((p) => p.id === projectId);
    if (!project) return;

    lastFocusedElement = document.activeElement;

    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalDetails.textContent = project.details || "";

    modalTech.replaceChildren(...(project.technologies || []).map((tech) => {
      const item = document.createElement("li");
      item.className = "tech-chip";
      item.textContent = tech;
      return item;
    }));

    // Botones
    modalGithub.style.display = "inline-block";
    modalGithub.href = project.github || "#";
    modalDemo.style.display = project.demo && project.demo !== "#" ? "inline-block" : "none";
    if (project.demo && project.demo !== "#") modalDemo.href = project.demo;

    // Eventos de botones del modal
    modalGithub.onclick = (e) => {
      if (!project.github || project.github === "#") {
        e.preventDefault();
        showNotification(" Este proyecto no tiene repositorio GitHub todavía.");
      }
    };
    modalDemo.onclick = (e) => {
      if (!project.demo || project.demo === "#") {
        e.preventDefault();
        showNotification(" Este proyecto no tiene demo disponible todavía.");
      }
    };

    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    modalDialog.focus({ preventScroll: true });
  }

  function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  lightboxClose.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightbox.style.display === "flex") closeLightbox();
      else if (modal.style.display === "flex") closeModal();
    }

    if (e.key === "Tab" && lightbox.style.display === "flex") {
      e.preventDefault();
      lightboxClose.focus();
      return;
    }

    if (e.key === "Tab" && modal.style.display === "flex") {
      const focusable = [...modal.querySelectorAll("a[href], button:not([disabled]), [role='button'][tabindex]")]
        .filter((element) => element.offsetParent !== null);
      if (!focusable.length) {
        e.preventDefault();
        modal.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
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

  // ====================== Botón volver arriba ======================
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
      const card = document.createElement("article");
      card.classList.add("project-card");

      card.innerHTML = `
        <button class="project-card-open" type="button" aria-label="Ver detalles de ${proj.title}">
          <img src="${proj.image}" alt="" loading="lazy">
          <span class="project-card-content">
            <span class="project-card-title">${proj.title}</span>
            ${proj.description ? `<span class="project-card-description">${proj.description}</span>` : ""}
          </span>
        </button>
        <div class="project-links">
            ${proj.github ? `<a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-link github"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>` : ""}
            ${proj.demo && proj.demo !== "#" ? `<a href="${proj.demo}" target="_blank" rel="noopener noreferrer" class="btn-link demo"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Demo</a>` : ""}
        </div>
      `;

      setTimeout(() => card.classList.add("show"), index * 150);

      container.appendChild(card);
      card.querySelector(".project-card-open").addEventListener("click", () => openModal(proj.id));

      // --- Enlaces dentro de la tarjeta ---
      const cardLinks = card.querySelectorAll(".project-links a");
      cardLinks.forEach((a) => {
        // Evitar que el click en un link abra el modal
        a.addEventListener("click", (e) => e.stopPropagation());

        const href = a.getAttribute("href");
        const isGithub = a.classList.contains("github");
        if (!href || href === "#" || href.trim() === "" || href.startsWith("javascript:")) {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            if (isGithub) showNotification("Este proyecto no tiene repositorio GitHub todavía.");
          });
        }
      });
    });
  }

  // ====================== Tabs ======================
  const availableFilters = [...tabs].map((tab) => tab.dataset.filter);
  let savedFilter = "Todos";
  try {
    const storedFilter = localStorage.getItem("selectedTab");
    if (availableFilters.includes(storedFilter)) savedFilter = storedFilter;
  } catch {
    // El sitio sigue funcionando aunque el navegador bloquee el almacenamiento local.
  }

  function applyFilter(filter) {
  if (filter === "Todos") {
    renderProjects(projects);
  } else {
    const filtered = projects.filter((p) => {
      return (
        (p.tags && p.tags.includes(filter)) || 
        (p.plataforma && p.plataforma === filter)
      );
    });

    renderProjects(filtered);
  }

  try {
    localStorage.setItem("selectedTab", filter);
  } catch {
    // El filtro sigue activo durante esta visita aunque no se pueda guardar.
  }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
        tabs.forEach((item) => item.setAttribute("aria-pressed", String(item === tab)));
      const filter = tab.getAttribute("data-filter");
      applyFilter(filter);
    });
  });

  tabs.forEach((tab) => {
    const isActive = tab.getAttribute("data-filter") === savedFilter;
    if (isActive) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
    tab.setAttribute("aria-pressed", String(isActive));
  });
  applyFilter(savedFilter);

  // ===== Lightbox =====
  function closeLightbox() {
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");
    modalImage.focus();
  }

  modalImage.tabIndex = 0;
  modalImage.setAttribute("role", "button");
  modalImage.setAttribute("aria-label", "Ampliar imagen del proyecto");
  modalImage.addEventListener("click", () => {
    lightboxImg.src = modalImage.src;
    lightboxImg.alt = `Imagen ampliada: ${modalImage.alt}`;
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.style.display = "flex";
    lightboxClose.focus();
  });
  modalImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      modalImage.click();
    }
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });


});
