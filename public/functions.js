// document.addEventListener('DOMContentLoaded', () => {
//   const title = document.getElementById('feature-title');
//   const text = document.getElementById('feature-text');
//   const image = document.getElementById('feature-image');
//   const prevBtn = document.querySelector('.prev-text');
//   const nextBtn = document.querySelector('.next-text');

//   const features = [
//     {
//       title: "Fler gäster som hittar dig",
//       text: "Matvrak visar din restaurang för personer som aktivt söker restauranger i appen, med videoannonser, listningar eller specialerbjudanden.",
//       image: "images/sharing.png"
//     },
//     {
//       title: "Kunder som återkommer",
//       text: "Belöna gäster med poängsystem och smarta notiser som motiverar återbesök utan manuell hantering.",
//       image: "images/customershappy.png"
//     },
//     {
//       title: "Automatiserat och datadrivet",
//       text: "Spara tid och pengar med automatiserade kampanjer samtidigt som du får värdefull data om kunder och kampanjresultat.",
//       image: "images/kampanj.png"
//     }
//   ];

//   let currentIndex = 0;

//   function updateCarousel() {
//     title.textContent = features[currentIndex].title;
//     text.textContent = features[currentIndex].text;
//     image.src = features[currentIndex].image;
//     image.alt = features[currentIndex].title;
//   }

//   nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % features.length;
//     updateCarousel();
//   });

//   prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + features.length) % features.length;
//     updateCarousel();
//   });
// });
