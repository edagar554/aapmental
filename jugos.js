// 1. Base de datos de los 12 jugos
const listaJugos = [
    {
        titulo: "Jugo de Pepino, Apio y Manzana",
        descripcion: "Ideal para adelgazar, gracias a sus propiedades diuréticas y depurativas. ¡Un quemador de grasa natural!",
        ingredientes: ["1 pepino", "1 manzana verde", "1 pera", "media rama de apio", "4 dátiles", "1 jengibre fresco", "1 vaso de agua"]
    },
    {
        titulo: "Jugo Verde de Manzana y Kiwi",
        descripcion: "Beneficia la digestión, ayuda a eliminar líquidos y contiene escasas calorías. ¡Excepcional!",
        ingredientes: ["2 kiwis", "1 manzana verde", "medio limón", "500 ml de agua"]
    },
    {
        titulo: "Jugo de Espinacas, Apio y Manzana",
        descripcion: "Multivitamínico: mejora el sistema inmune, reduce inflamación y controla azúcar.",
        ingredientes: ["4 naranjas", "1 rama de apio", "1 plátano", "1 manojo de espinacas", "2 manzanas verdes", "jengibre y cúrcuma"]
    },
    {
        titulo: "Jugo de Brócoli y Pepino",
        descripcion: "Purifica el cuerpo sin descompensarlo. Mejora el tránsito intestinal e hidrata.",
        ingredientes: ["100g de brócoli", "1 zanahoria", "1 pepino", "1 limón", "500 ml de agua"]
    },
    {
        titulo: "Jugo Detox de Espinacas",
        descripcion: "Libera al hígado de toxinas y protege la piel. Funciona como diurético natural.",
        ingredientes: ["2 tazas de espinacas", "medio pepino", "media manzana verde", "1 limón", "150 ml de agua"]
    },
    {
        titulo: "Jugo de Lechuga y Chayote (Cidra)",
        descripcion: "Especial para adelgazar la zona del abdomen y reducir colesterol.",
        ingredientes: ["1 chayote", "1 pepino", "1 taza de espinacas", "1/4 taza zumo de limón", "1 lechuga romana pequeña"]
    },
    {
        titulo: "Jugo de Berros y Pepino",
        descripcion: "Favorece la depuración de la sangre y acelera la eliminación de desechos.",
        ingredientes: ["1 manojo de berros", "1 pepino", "1 manzana verde", "1 limón"]
    },
    {
        titulo: "Jugo Depurativo de Pepino",
        descripcion: "Mejora funciones hepáticas y renales. Ayuda a eliminar piedras en el riñón.",
        ingredientes: ["2 pepinos", "1 manojo de espárragos", "1 vaso de agua"]
    },
    {
        titulo: "Jugo Detox de Apio y Piña",
        descripcion: "Muy demandado por sus cualidades diuréticas. Muy pocas calorías.",
        ingredientes: ["1 tallo de apio", "50g de piña", "1 vaso de agua"]
    },
    {
        titulo: "Jugo de Apio y Pepino (Sabor Pro)",
        descripcion: "Elimina la distensión abdominal y la molesta barriga. Sabor gratificante.",
        ingredientes: ["medio pepino", "1 rama de apio", "1 piña", "miel (opcional)"]
    },
    {
        titulo: "Jugo de Piña y Perejil",
        descripcion: "Regula el equilibrio hormonal y produce saciedad. Ideal para cenar.",
        ingredientes: ["2 zanahorias", "1 pepino", "5 ramas de perejil", "1 manzana verde", "2 rodajas de piña", "1 litro de agua"]
    },
    {
        titulo: "Jugo Tradicional de Perejil y Limón",
        descripcion: "Combate la retención de líquidos y depura los riñones profundamente.",
        ingredientes: ["medio pepino", "cilantro", "4 ramas de perejil", "1 limón", "jengibre", "500 ml de agua"]
    }
];

// 2. Función para pintar las cards
function cargarJugos() {
    const contenedor = document.getElementById('contenedor-jugos');
    if (!contenedor) return; // Seguridad por si el ID no existe
    
    listaJugos.forEach((jugo) => {
        const card = document.createElement('section');
        card.className = 'jugo-card';

        card.innerHTML = `
            <h2 class="notranslate">${jugo.titulo}</h2>
            <p class="descripcion">${jugo.descripcion}</p>
            <ul class="ingredientes">
                ${jugo.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            <p class="info-nutricional">
            🥗 Este jugo es un complemento de tu alimentación. 
            ⚠️ Consulta a tu médico o nutricionista.
        </p>
        `;
        contenedor.appendChild(card);
    }); // <--- AQUÍ: Cerramos el forEach
} // <--- AQUÍ: Cerramos la función cargarJugos

// 3. Lógica del Modal (Unificada)
// Función para abrir el modal usando tu ID exacto "modal-preparacion"
function abrirPreparacion(nombreJugo) {
    const modal = document.getElementById('modal-preparacion'); // <--- AQUÍ: El mismo ID de tu HTML
    const titulo = document.getElementById('modal-titulo-jugo'); // <--- El ID del h2
    
    if (modal && titulo) {
        titulo.innerText = "Cómo preparar: " + nombreJugo;
        modal.style.display = "flex"; // Lo mostramos
    }
}

// Función para cerrar (que coincida con tu onclick="cerrarModalJugos()")
function cerrarModalJugos() {
    const modal = document.getElementById('modal-preparacion');
    if (modal) {
        modal.style.display = "none"; // Lo ocultamos
    }
}

// Cerrar si el usuario hace clic fuera de la caja blanca
window.onclick = function(event) {
    const modal = document.getElementById('modal-preparacion');
    if (event.target == modal) {
        cerrarModalJugos();
    }
}

// Reemplaza la línea del DOMContentLoaded por esta:
window.onload = function() {
    console.log("Sistema de jugos cargado correctamente");
    cargarJugos();
};



