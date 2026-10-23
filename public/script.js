document.getElementById('year').textContent = new Date().getFullYear();

// El formulario abre el cliente de correo del visitante (sitio estático, sin servidor).
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const to = document.getElementById('mail').textContent.trim();
  const subject = encodeURIComponent(`Contacto desde el sitio — ${data.get('nombre')}`);
  const body = encodeURIComponent(`${data.get('mensaje')}\n\n${data.get('nombre')} (${data.get('correo')})`);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
