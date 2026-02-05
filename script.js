emailjs.init("RhXmYBM1XQ0Wx4L-r");  
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})
const navbar = document.getElementById("navbar");
const navLink = document.getElementById("navLink");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
    mobileMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    mobileMenu.style.transform = 'translateX(0)';
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
    } else {
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
    }
})

 

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const subject = document.getElementById("subjectInput").value;
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const message = document.getElementById("messageInput").value;

  emailjs.send("service_7kblftz", "template_evj4dl6", {
    subject: subject,
    name: name,
    email: email,
    message: message,
  })
  .then(() => {
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
  })
  .catch(error => {
    console.log("Error:", error);
    alert("Failed to send message");
  });
});