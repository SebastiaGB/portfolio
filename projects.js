// ====================== projects.js ======================

// Array de proyectos
const projects = [
  { id: 1,
        title: "Aplicación Web con Angular desplegada en AWS",
        description: "Despliegue sitio web estatico en el cloud",
        details: "Sitio web estatico alojado en un bucket S3, distribuido globalmente con CloudFront y protegido mediante un certificado SSH usando el Certificatie Manager",
        image: "https://SebastiaGB.github.io/portfolio/imagenes/web_desplegada_aws.jpg",
        technologies: ["Route 53", "CloudFront", "Certificate Manager", "S3"],
        tags: ["Básico"],
        github: "#",
        demo: "#"
    }
];

// Exportar para uso en script.js (solo si es Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projects };
}
