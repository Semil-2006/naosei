// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mostrar/esconder botão "Voltar ao topo" apenas quando rolar
document.querySelectorAll('.back-to-top').forEach(button => {
    button.style.display = 'none';
});
window.addEventListener('scroll', () => {
    document.querySelectorAll('.back-to-top').forEach(button => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
});

// Destaque no sumário conforme rolagem
const tocLinks = document.querySelectorAll('.toc a');
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tocLinks.forEach(link => link.classList.remove('active'));
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.toc a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));