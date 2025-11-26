// ----------------------
// Aparición suave al cargar
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('poster');
  card.style.opacity = 0;
  card.style.transform = 'translateY(8px)';

  setTimeout(() => {
    card.style.transition = 'opacity .9s ease, transform .9s';
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, 80);
});

// ----------------------
// Activar audio al hacer click
// ----------------------
document.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music.muted) {
    music.muted = false;
    music.play();
  }
});

// ----------------------
// Parallax suave
// ----------------------
(function(){
  const card = document.querySelector('.card');
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${ -y * 3 }deg) rotateY(${ x * 4 }deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
  });
})();

// ----------------------
// Aviso de orientación
// ----------------------
function checkOrientation() {
  const warning = document.getElementById('rotate-warning');
  if (window.matchMedia("(orientation: portrait)").matches) {
    warning.style.display = "flex";
  } else {
    warning.style.display = "none";
    document.body.classList.remove("force-horizontal"); // Reset si giran el teléfono
  }
}
window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation);
checkOrientation();

// ----------------------
// Botón para forzar horizontal
// ----------------------
const forceBtn = document.getElementById("force-horizontal");
const body = document.body;

forceBtn.addEventListener("click", () => {
  body.classList.toggle("force-horizontal");
});

// Mostrar el botón solo en portrait
function updateForceButton() {
  if (window.matchMedia("(orientation: portrait)").matches) {
    forceBtn.style.display = "block";
  } else {
    forceBtn.style.display = "none";
    body.classList.remove("force-horizontal"); // reset si cambia la orientación
  }
}
window.addEventListener("resize", updateForceButton);
window.addEventListener("orientationchange", updateForceButton);
updateForceButton();
