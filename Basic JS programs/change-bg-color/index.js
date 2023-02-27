const button = document.querySelector('button');
const  body = document.querySelector('body');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','lime','magenta','maroon','olive','silver'];

body.style.backgroundColor = 'violet';
button.addEventListener('click',changeBg);

function changeBg(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}