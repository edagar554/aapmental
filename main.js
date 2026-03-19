


let audioCtx;
let oscillator;
let gainNode;
let tiempo = 60;
let intervalo = null;
let corriendo = false;




const frecuenciasSolfeggio = {
  396: "Liberar Miedo y Culpa",
  417: "Facilitar el Cambio",
  528: "Reparación y Transformación",
  639: "Conexión y Relaciones",
  741: "Despertar Intuición",
  852: "Orden Espiritual"
};

function iniciarFrecuencia(hz = 528) {
  if (oscillator) detenerFrecuencia();

  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  oscillator = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(hz, audioCtx.currentTime);
  gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start();

  alert(`Iniciando ${hz}Hz — ${frecuenciasSolfeggio[hz]}`);
}

function detenerFrecuencia() {
  if (oscillator) {
    oscillator.stop();
    oscillator.disconnect();
    oscillator = null;
  }
}

function finalizarPractica() {
  detenerFrecuencia();
  alert("Práctica completada 🙏");
  window.location.href = "lectura-kybalion.html";
}




function enviarComentario() {
  const input = document.getElementById("input-comentario");
  if (!input || input.value.trim() === "") return;

  const nuevoComentario = {
    usuario: "Viajero_Sónico",
    texto: input.value.trim(),
    fecha: new Date().toLocaleString()
  };

  let comentarios =
    JSON.parse(localStorage.getItem("comentarios_conciencia")) || [];

  comentarios.unshift(nuevoComentario);
  localStorage.setItem(
    "comentarios_conciencia",
    JSON.stringify(comentarios)
  );

  input.value = "";
  cargarComentarios();
}

function cargarComentarios() {
  const lista = document.getElementById("lista-comentarios");
  if (!lista) return;

  let comentarios =
    JSON.parse(localStorage.getItem("comentarios_conciencia")) || [];

  lista.innerHTML = "";

  comentarios.forEach(c => {
    const div = document.createElement("div");
    div.className = "comentario-item";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = "✨";

    const texto = document.createElement("div");
    texto.className = "texto-comentario";

    const strong = document.createElement("strong");
    strong.textContent = `@${c.usuario}: `;

    const spanTexto = document.createElement("span");
    spanTexto.textContent = c.texto;

    const fecha = document.createElement("small");
    fecha.style.opacity = "0.5";
    fecha.style.fontSize = "10px";
    fecha.textContent = c.fecha;

    texto.appendChild(strong);
    texto.appendChild(spanTexto);
    texto.appendChild(document.createElement("br"));
    texto.appendChild(fecha);

    div.appendChild(avatar);
    div.appendChild(texto);
    lista.appendChild(div);
  });
}








function darLike(btn) {
  const icono = btn.querySelector("i");
  icono.classList.toggle("fas");
  icono.classList.toggle("far");
  icono.style.color =
    icono.classList.contains("fas") ? "#ff4d4d" : "#ccc";
}




document.addEventListener("DOMContentLoaded", () => {
  cargarComentarios();

  const selector = document.getElementById("idioma-nav");
  if (!selector) return;

  const idiomaGuardado = localStorage.getItem("idioma") || "es";
  selector.value = idiomaGuardado;
  aplicarIdioma(idiomaGuardado);

  selector.addEventListener("change", e => {
    aplicarIdioma(e.target.value);
  });
});

// Función para manejar el tiempo de cada ejercicio
function iniciarCronometro(boton) {
  let tiempoRestante = 60;
  const textoOriginal = boton.innerText;
  
  // Deshabilitar el botón mientras corre el tiempo
  boton.disabled = true;
  boton.style.backgroundColor = "#7f8c8d";

  const intervalo = setInterval(() => {
      tiempoRestante--;
      boton.innerText = `Resiste: ${tiempoRestante}s`;

      if (tiempoRestante <= 0) {
          clearInterval(intervalo);
          boton.innerText = "¡Logrado! 🔥";
          boton.style.backgroundColor = "#27ae60";
          
          // Volver al estado original después de 3 segundos
          setTimeout(() => {
              boton.innerText = textoOriginal;
              boton.style.backgroundColor = "#e74c3c";
              boton.disabled = false;
          }, 3000);
      }
  }, 1000);
}


function actualizarDisplay() {
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  document.getElementById("display").textContent =
    `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

function iniciarTimer() {
  if (corriendo) return;
  corriendo = true;

  intervalo = setInterval(() => {
    if (tiempo > 0) {
      tiempo--;
      actualizarDisplay();
    } else {
      clearInterval(intervalo);
      alert("⏱ Tiempo completado 🔥");
      corriendo = false;
    }
  }, 1000);
}

function pausarTimer() {
  clearInterval(intervalo);
  corriendo = false;
}

function resetTimer() {
  clearInterval(intervalo);
  intervalo = null;
  tiempo = 60;
  corriendo = false;

  actualizarDisplay();

  // feedback visual elegante
  const display = document.getElementById("display");
  display.style.transform = "scale(1.1)";
  display.style.color = "#f1c40f";

  setTimeout(() => {
    display.style.transform = "scale(1)";
    display.style.color = "white";
  }, 300);
}

actualizarDisplay();

console.log("Sistema de entrenamiento isométrico cargado...");


