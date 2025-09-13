
const kotoba = document.getElementById("myText");
const naiyou = "AIは本当に地図を読めるのかをやってみた"
let i = 0
function mozi(){
    kotoba.textContent = naiyou.slice(0, i +1);
    i++
    console.log(naiyou[i])
    if(i === naiyou.length){
        clearInterval(interval)
    }
}
a = 0

const interval = setInterval(mozi, 100);
mozi()
// document.getElementById("myText").textContent = "何も";
// document.getElementById("myText").textContent = "何もな";
// document.getElementById("myText").textContent = "何もなし";