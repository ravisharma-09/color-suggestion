const l = "0123456789ABCDEF" ;
function randomColor() {
    let color ="#" ;
    for (let i=0; i<6 ; i++){
        let index = Math.floor(Math.random()*16);
        color += l[index] ;
    }
    return color ;
}

const box = document.querySelector(".colorbox");
const text = document.querySelector(".colorcard p")

const color = randomColor() ;
box.style.background = color ;
text.innerText = color ;

const copybtn = document.querySelector(".copy");
copybtn.addEventListener("click", () => {
    navigator.clipboard.writeText(color);
});
const applybtn = document.querySelector(".apply");
applybtn.addEventListener("click", () => {
    document.body.style.background = color ;
});
