const l = "0123456789ABCDEF" ;
function randomColor() {
    let color ="#" ;
    for (let i=0; i<6 ; i++){
        let index = Math.floor(Math.random()*16);
        color += l[index] ;
    }
    return color ;
}

const main = document.querySelector(".main") ;
function generateColors() {
    main.innerHTML = "" ;
for (let i = 0 ; i< 20 ; i++){
    const color = randomColor();
    main.innerHTML +=  `<div class="colorcard">
            <div class="colorbox" style="background:${color};"></div>
            <p>${color}</p>
            <button class="copy">copy</button>
            <button class="apply">apply</button>
        </div>`; 
}}
generateColors() ;
const refresh = document.querySelector(".refresh") ;
refresh.addEventListener("click", generateColors);

const copybtn = document.querySelector(".copy");
copybtn.addEventListener("click", () => {
    navigator.clipboard.writeText(color);
});
const applybtn = document.querySelector(".apply");
applybtn.addEventListener("click", () => {
    document.body.style.background = color ;
});
main.addEventListener("click", (e) => {
    const target = e.target ;
    const card = target.closest(".colorcard");
    if (!card) return;
    const color = card.querySelector("p").innerText ;
    if (target.classList.contains("copy"))
        {navigator.clipboard.writeText(color);
            target.innerText ="Copied!" ;
            setTimeout(() =>{
                target.innerText = "copy";
            },6000
            );}
    if(target.classList.contains("apply")){document.body.style.background = color;}
})