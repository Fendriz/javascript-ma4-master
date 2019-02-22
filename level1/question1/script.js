var button = document.querySelector("button");

button.addEventListener('click', function(evt){
	alert("Button is clicked at ScreenXPos: " + evt.screenX +"  ScreenYPos:" + evt.screenY);
	//console.log(evt);
}, true);