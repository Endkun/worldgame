
const kotoba = document.getElementById("myText");
const naiyou = "AIは本当に地図を読めるのかをやってみた"
let i = 0
const interval = 20;
let count = 0
function mozi(){
    count++
    if (count >= interval){
        kotoba.textContent = naiyou.slice(0, i +1);
        i++
        console.log(naiyou[i])
        count = 0
    }
    requestAnimationFrame(mozi);
}
mozi();
// document.getElementById("myText").textContent = "何も";
// document.getElementById("myText").textContent = "何もな";
// document.getElementById("myText").textContent = "何もなし";