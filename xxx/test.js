function loop(){
    console.log("a")
    requestAnimationFrame(loop)
}
requestAnimationFrame(loop)