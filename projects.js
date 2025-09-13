// ====================== projects.js ======================

// Array de proyectos
const projects = [
  { id: 1,
        title: "Aplicación Web con Angular desplegada en AWS",
        description: "",
        details: "",
        image: "imagenes/App_Web_Desplegada_AWS.jpg",
        technologies: ["", "", "", ""],
        tags: ["Básico"],
        github: "#",
        demo: "#"
    }
];

// Exportar para uso en script.js (solo si es Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projects };
}
