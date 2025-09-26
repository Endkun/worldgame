
const kotoba = document.getElementById("myText");
const naiyou = ["AIは本当に地図を読めるのかをやってみた",
                "最初白地図にムンバイの位置を点で出すよう指示したが、AIは的外れの場所に点を出した",
                "その次にモスクワの位置を点で出すように指示したが、AIはまた的外れな場所に点を出した",
                "この時点ではAIは都市(国)の位置を理解してないと思っていた",
                "その次にロンドンを点で出すように指示したら、また的外れだった",
                "自分はある規則性に気づき、パリの点を出すよう指示した"]

let i = 0
let j = 0 
//let timing = 0 
function mozi(){
    kotoba.textContent = naiyou[j].slice(0, i +1);
    i++
    console.log(naiyou[i])
    count = 0
    if(i < naiyou[j].length){
        setTimeout(mozi, 200);
    }else{
        if (tigau == true){ 
            j++
            i = 0
            setTimeout(mozi, 2000);
            tigau = false
        }
        console.log(tigau)
        //timing = 1
    }
}
mozi();
// document.getElementById("myText").textContent = "何も";
// document.getElementById("myText").textContent = "何もな";
// document.getElementById("myText").textContent = "何もなし";