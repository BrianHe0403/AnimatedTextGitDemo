/*
 * @Author: brianhe brian@BrianHe.com
 * @Date: 2022-08-22 21:22:11
 * @LastEditors: brianhe brian@BrianHe.com
 * @LastEditTime: 2022-08-22 21:23:55
 * @FilePath: \gitdemo\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}


const h1 = document.querySelector('h1');


// setInterval(function(){
//     h1.style.color=randomRGB(); 
// },500)
const letters = document.querySelectorAll('.letter');
setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 500)