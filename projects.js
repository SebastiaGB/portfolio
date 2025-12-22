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
        image: "https://SebastiaGB.github.io/portfolio/imagenes/Contenedores_AWS.jpg",
        technologies: ["Amazon ECS", "Amazon CloudWatch", "Amazon ECR", "Amazon VPC", "ALB", "NAT Gateway"],
        tags: ["Avanzado"],
        github: "https://github.com/SebastiaGB/Web_con_docker.git",
        demo: "#"
    },
    { id: 4,
        title: "Simple Network Monitoring en AWS",
        description: "Monitoreo de dominios con microservicios en contenedores y despliegue en Kubernetes (EKS)",
        details: "App distribuida para monitorizar uptime de dominios: backend FastAPI + worker de pings, frontend Angular, DynamoDB, métricas Prometheus. Desplegada en EKS con IRSA y pipeline CI/CD hacia ECR.",
        image: "https://SebastiaGB.github.io/portfolio/imagenes/Arquitectura_snpm.jpg",
        technologies: ["Angular", "Docker", "Kubernetes (EKS)", "Amazon ECR", "DynamoDB", "Prometheus", "Alertmanager", "FastAPI", "Python"],
        tags: ["Profesional"],
        github: "https://github.com/SebastiaGB/Simple-Network-Ping-Monitring.git",
        demo: "#"
    },
    { "id": 5,
        "title": "IoT Sensor Gateway & Monitoring Platform",
        "description": "Simulación de sensores IoT, procesamiento en tiempo real y monitorización con Grafana en AWS",
        "details": "Plataforma distribuida para simular sensores de temperatura, humedad y consumo eléctrico. Incluye IoT Gateway en ECS Fargate, API Gateway + Lambdas para procesar datos y almacenarlos en RDS PostgreSQL, y Grafana para visualización y alertas. Infraestructura desplegada completamente con CloudFormation, usando VPC privadas, ECS, ECR, ALB, Secrets Manager e IAM con permisos mínimos.",
        "image": "https://SebastiaGB.github.io/portfolio/imagenes/Iot_simulation.jpg",
        "technologies": ["AWS CloudFormation", "ECS Fargate", "ECR", "API Gateway", "Lambda", "PostgreSQL", "Grafana", "Python", "Docker", "Prometheus", "SNS"],
        "tags": ["Profesional"],
        "github": "https://github.com/SebastiaGB/Iot-Observability-Platform.git",
        "demo": "#"
      }
];

// Exportar para uso en script.js (solo si es Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projects };
}
