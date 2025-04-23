/*const menu = document.getElementById("nav");
const toogle = document.getElementById("toogler");
const hideHeadings = document.getElementById("titles");
toogle.addEventListener("click", () => {
    menu.classList.toggle("show");
    
    hideHeadings.classList.toggle("hide");
    const zIndexphoto = document.getElementById("hero-image");
    zIndexphoto.classList.toggle("zIndex");
 });

 const navItems = document.querySelectorAll("ul li a");
 navItems.forEach( item => {
  item.addEventListener('click', ()=> {
    menu.classList.remove("show");
    hideHeadings.classList.remove("hide")
  
  })
 })

 const alart = document.getElementById("alart-button").addEventListener("click", () => {
   return alert("Sorry, this button is not functional yet as Asavela is not taking messages yet, Please check back later!");
 });*/

 document.getElementById('toogler').addEventListener('click', function() {
  const menu = document.getElementById('nav');
  menu.classList.toggle('hidden');
});



const text = document.querySelector(".h1-span-2");
    const textLoad = () => {
      setTimeout(() => {
        text.textContent = "WEB DESIGNER";
      }, 0);
      setTimeout(() => {
        text.textContent = "WEB DEVELOPER";
      }, 4000);
      setTimeout(() => {
        text.textContent = "CODER";
      }, 8000);
    };
    textLoad();
    setInterval(textLoad, 12000);



 

