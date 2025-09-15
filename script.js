// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple form validation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert("Thank you for your enquiry! We will get back to you soon.");
    form.reset();
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  // ✅ Define projects here
  const projects = [
    {
      name: "Client A Website",
      description: "Corporate website redesign with modern UI.",
      image: "Popular.jpg"
    },
    {
      name: "E-commerce Platform",
      description: "Online shop with secure payment integration.",
      image: "Karima.jgp"
    },
    {
      name: "School Management System",
      description: "Web app for managing student records and grading.",
      image: "Gypsum ceiling.jpeg"
    }
  ];

  // Render projects dynamically
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project", "card");
    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}">
      <div class="project-info">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      </div>
    `;
    gallery.appendChild(card);
  });

  // Auto-update footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});


