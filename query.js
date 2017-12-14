
var color=['red','green','tomato ','yellow','black','blue','teal'];

var button=document.querySelector('button');



function colorChange(){
	document.body.style.backgroundColor=color[parseInt(Math.random()  * color.length)];
}

button.addEventListener('mouseout', colorChange);
button.addEventListener('mouseover', colorChange);