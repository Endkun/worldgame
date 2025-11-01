function onjudge(){
  judge(q_btn)
}
function judge(q_btn){
    console.log("b")
    if (text == "2.全ての都市の点の位置が一定の方向にズレていた"){
      ans1.textContent = "正解！おめでとう！"
      setTimeout(() => {
        console.log("1秒経過");
        setTimeout(() => {
          console.log("２秒経過");
          window.close();
        }, 1000);
      }, 1000);

    }else{
        ans1.textContent = "ちがうよ"
        mozi2();
        cities.push(archives2.shift())
        canvas2();
        q_btn.disabled = true;
    }
}//kekkaここまで
function ask(){
  let tomeru = false
  let kotae = [
"1.全ての都市の点の位置がランダムに置かれていた",
"2.全ての都市の点の位置が一定の方向にズレていた",
"3.全ての都市の点の位置が南半球側に偏って表示されていた",
"4.地図の投影法の影響で都市の位置が歪んで表示されていた",
"5.都市データの座標が古く、現在の位置と一致していなかった",
"6.地図描画時の縮尺設定が誤っていた",
"7.座標データの緯度・経度の単位変換ミスがあった",
"8.描画用のキャンバスサイズと座標系が一致していなかった",
"9.プログラムのループや配置計算にバグがあり、位置がずれていた"];
  const quesiton_button = document.getElementById("choice_area");
  for(let i = 0;  i < kotae.length; i++){
    //console.log(kotae[i])
    text = kotae[i]
    const q_btn = document.createElement("button");
    q_btn.style.display = "block";
    q_btn.textContent = text;
    quesiton_button.appendChild(q_btn); 
    q_btn.onclick = onjudge
    console.log("a")
  }
}
setTimeout(ask,28000) //28000