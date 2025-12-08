// ====================== projects.js ======================

// Array de proyectos
const projects = [
  { id: 1,
        title: "Organización de cuentas en AWS",
        description: "Proyecto que sigue las buenas practicas organizativas de cuentas en aws.s",
        details: "Arquitectura multicuenta en AWS para optimizar la administración, los permisos, la seguridad y la gestión de costes.",
        image: "https://SebastiaGB.github.io/portfolio/imagenes/Organizacion_cuentas_AWS.jpg",
        technologies: ["AWS Organizations", "IAM", "IAM Identity Center"],
        tags: ["Avanzado"],
        github: "https://github.com/SebastiaGB/Organizacion_cuentas_AWS.git",
        demo: "#"
    },
  { id: 2,
        title: "Aplicación Web con Angular desplegada en AWS",
        description: "Despliegue sitio web estatico en el cloud",
        details: "Sitio web estático alojado en un bucket S3, distribuido globalmente con CloudFront y protegido mediante un certificado SSL usando el Certificate Manager.",
        image: "https://SebastiaGB.github.io/portfolio/imagenes/Web_desplegada_AWS.jpg",
        technologies: ["Route 53", "CloudFront", "Certificate Manager", "S3"],
        tags: ["Básico"],
        github: "https://github.com/SebastiaGB/Web_con_angular.git",
        demo: "#"
    },
  { id: 3,
        title: "Arquitectura ECS",
        description: "Enfocado en orquestación, escalabilidad y arquitectura de microservicios",
        details: "Despligue escalable de servicios en contenedores usando Amazon ECS, Amazon ALB, en una VPC, con Amazon CloudWatch.",
        image: "",
        technologies: ["Amazon ECS", "Amazon CloudWatch", "Amazon ECR", "Amazon VPC", "ALB", "NAT Gateway"],
        tags: ["Avanzado"],
        github: "https://github.com/SebastiaGB/Web_con_docker.git",
        demo: "#"
    },
    {
        id: 4,
        title: "Simple Network Monitoring en AWS",
        description: "Monitoreo de dominios con microservicios en contenedores y despliegue en Kubernetes (EKS)",
        details: "Aplicación distribuida para monitoreo de uptime de dominios, con microservicios backend (FastAPI) y worker para pings, frontend en Angular, base de datos DynamoDB y métricas expuestas para Prometheus. Desplegada en un clúster de Kubernetes gestionado (EKS), usando IRSA para acceso seguro a recursos AWS desde los pods y con pipeline CI/CD para construcción y despliegue de imágenes en Amazon ECR.",
        image: "https://SebastiaGB.github.io/portfolio/imagenes/Kubernetes_aplicado_AWS.jpg",
        technologies: ["Angular", "Docker", "Kubernetes (EKS)", "Amazon ECR", "DynamoDB", "Prometheus", "Alertmanager", "FastAPI", "Python"],
        tags: ["Profesional"],
        github: "https://github.com/SebastiaGB/Simple-Network-Ping-Monitring.git",
        demo: "#"
    }
];

// Exportar para uso en script.js (solo si es Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projects };
}
