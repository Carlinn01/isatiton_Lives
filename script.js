// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle")
const body = document.body
const sunIcon = document.getElementById("sunIcon")
const moonIcon = document.getElementById("moonIcon")

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem("theme") || "dark"
body.classList.toggle("dark", currentTheme === "dark")

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark")
  const isDark = body.classList.contains("dark")
  localStorage.setItem("theme", isDark ? "dark" : "light")
})

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")

  // Animate hamburger menu
  const spans = mobileMenuBtn.querySelectorAll("span")
  if (mobileMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close mobile menu when clicking on links
const mobileMenuLinks = mobileMenu.querySelectorAll("a")
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    const spans = mobileMenuBtn.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]')
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      const headerHeight = 80 // Altura fixa do header
      const targetPosition = targetSection.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = body.classList.contains("dark")
      ? "rgba(10, 10, 10, 0.95)"
      : "rgba(255, 255, 255, 0.95)"
  } else {
    header.style.backgroundColor = body.classList.contains("dark")
      ? "rgba(10, 10, 10, 0.8)"
      : "rgba(255, 255, 255, 0.8)"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for scroll animations
const animateElements = document.querySelectorAll(".schedule-card, .social-card, .about-content")
animateElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Add click handlers for social media cards
const socialCards = document.querySelectorAll(".social-card")
socialCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault()
    // Add your social media URLs here
    console.log("Redirecting to:", card.querySelector("h3").textContent)
  })
})

// Add click handlers for buttons
const watchNowBtn = document.querySelector(".btn-primary")

watchNowBtn.addEventListener("click", () => {
  // Redirect to Twitch
  console.log("Opening Twitch stream...")
  // window.open('https://twitch.tv/your-channel', '_blank');
})

// Parallax effect for hero background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroBackground = document.querySelector(".hero-bg-image")
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Console welcome message
console.log("%c🎮 Bem-vindo ao site da streamer! 🎮", "color: #8b5cf6; font-size: 20px; font-weight: bold;")
console.log("%cSite desenvolvido com HTML, CSS e JavaScript puro!", "color: #a855f7; font-size: 14px;")
