const kotoba = document.getElementById("myText");
const naiyou = [
    "AIは本当に地図を読めるのかをやってみた",
    "最初白地図にムンバイの位置を点で出すよう指示したが、AIは的外れの場所に点を出した",
    "その次にモスクワの位置を点で出すように指示したが、AIはまた的外れな場所に点を出した",
    "そこである原因に気づいた。何に気がついたでしょうか？"
];
const naiyou2 = [
    "その次にロンドンを点で出すように指示したら、また的外れだった",
    "今度は東京に点を置いた。大西洋へ行ってしまった",
    "さらにケープタウンに置いてみたが、ズレている",
    "次にウランバートルに置いたら、カナダのほうへ行ってしまった",
    "最後に自分はこの規則性に気づき、パリの点を出すよう指示した",
    "--余白--"
];
let i = 0;
let j = 0;
let k = 0
let l = -1
const per = 30; //30
let count = 0;
let mojisuuu = 0;
naiyou.forEach((txt, idx) => {
    mojisuuu += txt.length;
});
console.log("naiyouの総文字数:", mojisuuu);
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// ==== アニメーション ====
function mozi(){
    if (j < naiyou.length) {
        if(i < naiyou[j].length){
            count++;
            if (count >= per){
                kotoba.textContent = naiyou[j].slice(0, i + 1);
                i++;
                count = 0;
            }
        } else {
            // 文章が終わったら次へ
            j++;
            i = 0;
            if (j < naiyou.length) {
                kotoba.textContent = ""; 
            }
        }
        requestAnimationFrame(mozi);
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function mozi2(){
    if (l < naiyou2.length) { //j = l i = k
        async function repeat(){
            for(k = 0; k < naiyou2[l].length; k++){
                console.log("a")
                await sleep(150);   // ← 2秒待つ
                    kotoba.textContent = naiyou2[l].slice(0, k + 1);
            }
            console.log("ccc")
            each.forEach(q_btn => q_btn.disabled = false);
            k = 0
        }
        repeat(); // ページ読み込み時に即実行
    }
}
mozi();