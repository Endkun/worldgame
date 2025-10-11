const canvas = document.getElementById("worldMap");
const ctx = canvas.getContext("2d");
let ly = 0//-30
let lx = 0//-149
let c = 0
let tigau = false
let tigau2 = false
let interval_youzumi = []
let interval = [1000]
let interval_archive = [1500]
let interval_archive2 = [2500,1000,1000,1000,1000,1000]
const cities = [
];
const archives = [
  { name: "Mumbai", lat: 19.0760, lon: 72.8777, color: "orange" },
  { name: "Moscow", lat: 55.7558, lon: 37.6173, color: "red" },
  { name: "London", lat: 51.5074, lon: -0.1278, color: "brown" },
  { name: "Tokyo", lat: 35.6895, lon: 139.6917, color: "blue" },
  { name: "Cape Town", lat: -33.9249, lon: 18.4241, color: "green" },
  { name: "Ulaanbaatar", lat: 47.8864, lon: 106.9057, color: "teal" },
  { name: "Paris", lat: 48.8566, lon: 2.3522, color: "purple" },
];
// 地図画像を読み込んでから描画
const img = new Image();
img.src = "world_map.png";
img.onload = function () {
  ctx.drawImage(img, 0, 0, 800, 600);
  //console.log("tigau",tigau)
  c++
  if (c >= interval[0]){
    cities.push(archives.shift())
    interval_youzumi.push(interval.shift())
    interval.push(interval_archive.shift())
    //console.log(interval)
    c = 0
  }
  console.log(tigau2)
  if (tigau2 == true){
    cities.push(archives.shift())
    interval_youzumi.push(interval.shift())
    interval.push(interval_archive.shift())
    tigau2 = false
  }
  //if (timing == 1){
  //  cities.push(archives.shift())
  //  timing = 0
  //}
  //console.log(count,cities)
  for (const city of cities) {
    city.lon += lx
    city.lat += ly
    // 緯度経度をピクセル座標に変換（equirectangular projection）
    const x = ((city.lon + 180) / 360) * canvas.width;
    const y = ((90 - city.lat) / 180) * canvas.height;
    // 円で都市を描画
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = city.color;
    ctx.fill();

    // テキスト描画
    ctx.font = "bold 14px sans-serif";
    ctx.fillText(city.name, x + 10, y - 10);
  }
  //console.log("a")
  requestAnimationFrame(img.onload);
};

// const canvas = document.getElementById("worldMap");
// const ctx = canvas.getContext("2d");
// let sx = 505
// let sy = 0
// let ly = -30//-30
// let lx = -149//-149
// const cities = [
//   { name: "Mumbai", lat: 19.0760, lon: 72.8777, color: "orange" },
//   { name: "Tokyo", lat: 35.6764, lon: 139.6500, color: "blue" },
//   { name: "Moscow", lat: 55.7558, lon: 37.6173, color: "red" },
//   { name: "Paris", lat: 48.8566, lon: 2.3522, color: "purple" },
//   { name: "London", lat: 51.5074, lon: -0.1278, color: "brown" }
// ];
// let lmx = 2.4//xをマップに合わせる
// let lmy = 1.5//yをマップに合わせる
// // 地図画像を読み込んでから描画
// const img = new Image();
// img.src = "world_map.png";
// img.onload = function () {
//   ctx.drawImage(img, 500, 0, 800, 600);
//   for (const city of cities) {
//     city.lon += lx
//     city.lat += ly
//     // 緯度経度をピクセル座標に変換（equirectangular projection）
//     const x = ((city.lon + 180) / 360) * canvas.width/lmx+sx;
//     const y = ((90 - city.lat) / 180) * canvas.height/lmy+sy;
//     // 円で都市を描画
//     ctx.beginPath();
//     ctx.arc(x, y, 6, 0, 2 * Math.PI);
//     ctx.fillStyle = city.color;
//     ctx.fill();

//     // テキスト描画
//     ctx.font = "bold 14px sans-serif";
//     ctx.fillText(city.name, x + 10, y - 10);
//   }
// };