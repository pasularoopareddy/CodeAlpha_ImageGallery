const cards = document.querySelectorAll(".card");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");


cards.forEach(card => {

  card.addEventListener("click", () => {

    const imgSrc = card.querySelector("img").src;

    lightbox.style.display = "flex";

    lightboxImg.src = imgSrc;

  });

});


closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});


lightbox.addEventListener("click", (e) => {

  if(e.target !== lightboxImg){

    lightbox.style.display = "none";

  }

});