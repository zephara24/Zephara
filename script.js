document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle")
  const mobileNav = document.getElementById("mobile-nav")

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active")
  })

  // Portfolio filtering
  const filterButtons = document.querySelectorAll(".filter-button")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      portfolioItems.forEach((item) => {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    const formData = new FormData(contactForm)
    console.log("Form submitted:", Object.fromEntries(formData))
    alert("شكراً لك! تم استلام رسالتك وسنتواصل معك قريباً.")
    contactForm.reset()
  })

  // Update current year in footer
  const currentYearSpan = document.getElementById("current-year")
  currentYearSpan.textContent = new Date().getFullYear()

  // Initialize Lucide icons
  // Assuming Lucide is available via a CDN or a module import.  If it's a module, adjust accordingly.
  // For example, if using a CDN, ensure the script is included in your HTML before this script.js file.
  // If using a module, you would import it like: import * as lucide from './lucide.esm.js'; (adjust path as needed)

  lucide.createIcons()
})

