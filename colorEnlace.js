const general = document.querySelector("#general");
const enlaces = document.querySelectorAll(".color");

const mostrarColorEnlace = (entradas, observador) => {
  entradas.forEach((entrada) => {
    const primerEnlace = enlaces[0];
    const segundoEnlace = enlaces[1];

    if (entrada.isIntersecting) {
      primerEnlace.classList.remove("colorObserver");
      segundoEnlace.classList.add("colorObserver");
    } else {
      primerEnlace.classList.add("colorObserver");
      segundoEnlace.classList.remove("colorObserver");
    }
  });
};

const observador = new IntersectionObserver(mostrarColorEnlace, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.05,
});

observador.observe(general);
