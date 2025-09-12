// ====================== projects.js ======================

// Array de proyectos
const projects = [
  { id: 1,
        title: "Aplicación Web con Angular desplegada en AWS",
        description: "Muestra cómo servir sitios web estáticos o SPA en la nube",
        details: "Sitio web estático Angular alojado en Amazon S3, distribuido globalmente con CloudFront y protegido con HTTPS mediante AWS Certificate Manager.",
        image: "imagenes/App_Web_Desplegada_AWS.jpg",
        technologies: ["Amazon S3", "CloudFront", "Route 53", "Certificate Manager"],
        tags: ["Básico"],
        github: "https://github.com/SebastiaGB",
        demo: "#"
    }
];

// Exportar para uso en script.js (solo si es Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projects };
}
