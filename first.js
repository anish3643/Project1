let text = document.getElementById("text");
let leaf = getElementById("leaf");
let hill1 = getElementById("hill1");
let hill4 = getElementById("hill4");
let hill5 = getElementById("hill5");
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + "px";
    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
   
});