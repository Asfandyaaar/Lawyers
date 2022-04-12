const navSlide = ()=>{

        let nav = document.querySelector("#nav-links");
        let burger = document.querySelector("#burger");
        let link = document.querySelector("#link");

        burger.addEventListener("click", () => {
        nav.classList.toggle("active");
        link.classList.toggle("link-active");
        console.log("I am working...");
});
};
 navSlide();


// const navSlide = () => {
//   const navlinks = document.querySelector(".nav-links");
//   const burger = document.querySelector(".burger");

//   burger.addEventListener("click", () => {
//     navlinks.classList.toggle("nav-active");

//     burger.classList.toggle("rotate");
//   });
// };
// navSlide();