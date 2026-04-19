/**
 * BETARRAGA.JS - Lógica de Nutrición Interactiva
 * Proyecto: Módulo de Superalimentos
 */

// 1. Data Store: Centralizamos la información técnica
const DATA_BETARRAGA = {
    beneficios: [
        { id: 1, titulo: "Presión Arterial", desc: "Dilata vasos sanguíneos mediante óxido nítrico.", icono: "❤️" },
        { id: 2, titulo: "Rendimiento", desc: "Mejora la eficiencia mitocondrial y oxigenación muscular.", icono: "🏃‍♂️" },
        { id: 3, titulo: "Antiinflamatorio", desc: "Las betalaínas protegen contra enfermedades crónicas.", icono: "🛡️" },
        { id: 4, titulo: "Salud Digestiva", desc: "Fuente excelente de fibra para la microbiota.", icono: "🧘" },
        { id: 5, titulo: "Detox Hepático", desc: "La betaína ayuda a eliminar toxinas del hígado.", icono: "🧪" }
    ],
    recetas: [
        { 
            nombre: "Clásico Energizante", 
            ingredientes: ["1 beterraga mediana", "Jugo de 2 naranjas", "1 taza de agua"],
            meta: "Presión Arterial"
        },
        { 
            nombre: "Súper Jugo Detox", 
            ingredientes: ["1 beterraga", "1/2 zanahoria", "6 rodajas de pepino"],
            meta: "Desintoxicación"
        },
        { 
            nombre: "Shot de Rendimiento", 
            ingredientes: ["1 beterraga", "Piña", "Jengibre"],
            meta: "Deporte"
        }
    ],
    precauciones: [
        "Cálculos renales (oxalatos)",
        "Interacción con fármacos de presión arterial",
        "Sensibilidad digestiva (gastritis)"
    ]
};

// 2. Funciones de Renderizado (Elegancia y Orden)
const renderizarDashboard = () => {
    const grid = document.getElementById('listaBeneficios');
    const containerRecetas = document.getElementById('contenedorRecetas');

    // Inyectar Beneficios con efecto Card
    grid.innerHTML = DATA_BETARRAGA.beneficios.map(b => `
        <div class="card-nutricion" onclick="mostrarDetalle(${b.id})">
            <span class="icon">${b.icono}</span>
            <h3>${b.titulo}</h3>
            <p>${b.desc}</p>
        </div>
    `).join('');

    // Inyectar Recetas
    containerRecetas.innerHTML = DATA_BETARRAGA.recetas.map(r => `
        <div class="receta-item">
            <h4>${r.nombre}</h4>
            <small>Objetivo: ${r.meta}</small>
            <ul>${r.ingredientes.map(ing => `<li>${ing}</li>`).join('')}</ul>
        </div>
    `).join('');
};

// 3. Lógica de Interacción
const mostrarDetalle = (id) => {
    const item = DATA_BETARRAGA.beneficios.find(b => b.id === id);
    console.log(`%c Info Nutricional: ${item.titulo}`, 'color: #6b0f1a; font-weight: bold;');
    // Aquí podrías disparar un modal o un alert elegante
};

// 4. Inicialización
document.addEventListener('DOMContentLoaded', () => {
    console.log("Módulo Beterraga cargado correctamente... 🚀");
    renderizarDashboard();
    
    // Bonus: Alerta de coloración (Beturia)
    setTimeout(() => {
        console.warn("Nota: El consumo puede causar beturia (coloración roja en orina/heces). Es normal.");
    }, 2000);
});