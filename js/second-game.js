/*Rectangle game*/

const parentDiv = document.querySelector('.parent-div');

for(let i = 0 ; i < 16; ++i){
    let newDiv = document.createElement('div');
    parentDiv.appendChild(newDiv);

    newDiv.addEventListener('click', function(){
        newDiv.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    });
}