
 const alart = document.getElementById("alart-button").addEventListener("click", () => {
   return alert("Sorry, this button is not functional yet as Asavela is not taking messages yet, Please check back later!");
 });
 
 const menu = document.getElementById('nav');
 document.getElementById('toogler').addEventListener('click', function() {
  menu.classList.toggle('show');
});
document.querySelectorAll('#nav li a').forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('show');
  });
})



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



 

