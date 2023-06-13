var svg1 = document.getElementById('svgBlue');
var svg2 = document.getElementById('svgYellow');
var h1 = document.getElementById('titleH1');
var svg = document.getElementById('icon');
console.log(svg.className);

svg1.style.fill = '#3C78AA';
svg2.style.fill = '#FDD835';

var p2 = document.getElementById('page2');
var p1 = document.getElementById('page1');
console.log(p1.style.left);

console.log(h1);
h1.onclick = function () {
    // svg.removeAttribute('class');
    svg.style.className = 'icon';
    p2.style.left = '100%';
    p1.style.left = '0%';
};
// setTimeout(function () {
//     document.getElementsByTagName('svg').className = '';
// }, 900);

document.addEventListener('keyup', function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 68) {
        svg.style.className = 'none';
        p2.style.left = '100%';
        p1.style.left = '0%';
    } else if (e.keyCode === 70) {
        svg.class = 'icon icon_hover';
        p2.style.left = '0%';
        p1.style.left = '-100%';

    }
});

h1.addEventListener('mouseover', function () {
    this.style.textShadow = '1px 1px 12px rgba(123, 95, 247, 0.2)';
    setTimeout(function () { h1.style.textShadow = '0px 0px 0px rgba(255, 255, 255, 0)'; }, 1200)
});
