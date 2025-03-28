document.addEventListener('DOMContentLoaded', () => {
  // Dynamically set footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
