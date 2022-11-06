const inputs = document.querySelectorAll(".controls input");

/**
 * 上面已经选取了两个取色器
 * 请添加相应的 JS 事件处理函数并绑定到合适的事件监听器上（提示：change 事件）
 * 这样我们就可以用取色器选取颜色来生成下方的渐变色背景啦
 *  */
let root = document.querySelector(":root");
inputs[0].addEventListener('change', function () {

    root.style.setProperty("--color1", this.value);
    console.log(this.value);
}, false)
inputs[1].addEventListener('change', function () {
    root.style.setProperty("--color2", this.value);
    console.log(this.value);
}, false)
// console.log(inputs[0])
// console.log(inputs[0])
