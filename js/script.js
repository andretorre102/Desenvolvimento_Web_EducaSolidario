// Arquivo JavaScript do projeto EducaSolidário
// As interações serão desenvolvidas nas próximas etapas.
// Função para iniciar o slideshow do banner - interação solicitada no [PF3]
function iniciarSlideshow() {
    const slides = document.querySelectorAll('.banner .slide');
    let atual = 0;

    setInterval(() => {
        slides[atual].classList.remove('active');
        atual = (atual + 1) % slides.length; // volta pro 0 depois do último
        slides[atual].classList.add('active');
    }, 4000); // troca a cada 4 segundos
}

iniciarSlideshow();
