function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 使うとき
sleep(2000).then(() => {
  console.log("2秒後に表示");
});