
const kotoba = document.getElementById("myText");
const naiyou = ["AIは本当に地図を読めるのかをやってみた",
                "最初白地図にムンバイの位置を点で出すよう指示したが、AIは的外れの場所に点を出した",
                "その次にモスクワの位置を点で出すように指示したが、AIはまた的外れな場所に点を出した",
                "この時点ではAIは都市(国)の位置を理解してないと思っていた",
                "その次にロンドンを点で出すように指示したら、また的外れだった",
                "自分はある規則性に気づき、パリの点を出すよう指示した"]
let i = 0
function mozi(){
    kotoba.textContent = naiyou[1].slice(0, i +1);
    i++
    console.log(naiyou[i])
    count = 0
    if(i < naiyou.length){
        setTimeout(mozi, 1500);
    }
}
mozi();
// document.getElementById("myText").textContent = "何も";
// document.getElementById("myText").textContent = "何もな";
// document.getElementById("myText").textContent = "何もなし";