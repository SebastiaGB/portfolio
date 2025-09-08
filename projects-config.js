// ============================================================================
// CONFIGURACIÓN DE PROYECTOS - PORTFOLIO PROFESIONAL
// ============================================================================
// 
// INSTRUCCIONES PARA AÑADIR/MODIFICAR PROYECTOS:
// 
// 1. AÑADIR UN NUEVO PROYECTO:
//    - Copia el template de proyecto de abajo
//    - Completa todos los campos requeridos
//    - Añade el proyecto al array 'projects' al final
//    - Incrementa el ID para cada nuevo proyecto
//
// 2. MODIFICAR UN PROYECTO EXISTENTE:
//    - Encuentra el proyecto por su ID o título
//    - Modifica los campos que necesites
//
// 3. ELIMINAR UN PROYECTO:
//    - Simplemente elimina el objeto del proyecto del array
//
// 4. CAMBIAR ENLACES:
//    - Para enlaces reales: github: "https://github.com/tu-usuario/repo"
//    - Para enlaces no disponibles: github: "#"
//    - Para demos reales: demo: "https://tu-demo.com"
//    - Para demos no disponibles: demo: "#"
//
// TEMPLATE DE PROYECTO:
/*
{
    id: 11, // Incrementa el ID para cada nuevo proyecto
    title: "Nombre del Proyecto",
    description: "Descripción corta (aparece en la tarjeta del proyecto)",
    fullDescription: "Descripción completa y detallada (aparece en el modal al hacer clic)",
    image: "imagenes/nombre-imagen.jpg", // Imagen en la carpeta imagenes/
    technologies: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
    tags: ["Básico"], // Opciones: ["Básico"], ["Avanzado"], ["Profesional"]
    github: "https://github.com/tu-usuario/nombre-repo", // Enlace real o "#" si no está disponible
    demo: "https://tu-demo.com" // Enlace real o "#" si no está disponible
}
*/

// Array de proyectos
const projects = [
    {
        id: 1,
        title: "Organización en el Cloud",
        description: "Proyecto centrado en la gestión de cuentas AWS con buenas prácticas organizativas",
        fullDescription: "Arquitectura multi cuenta con AWS Organizations, ideal para separar entornos, controlar facturación y aplicar políticas centralizadas de seguridad y acceso.",
        image: "imagenes/AWS_Organization.jpg",
        technologies: ["AWS Organizations", "IAM", "CloudTrail", "Config"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    }
];

// Exportar para uso en script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects };
} 