let counter = 0;
function increment(){
	counter++;
	document.getElementById("counter").innerText = counter;	
}
counter2 = 0;
let history = [];
function save(){
	if(history.length == 10){
		document.getElementById("saves").innerText = "";
		history.length = 0;
		counter2 = 0;
		reset();
	}
	else{
		let prevSaves = counter;
		history[counter2] = prevSaves;
		document.getElementById("saves").innerText = history;
		counter2++;
	}
}
function reset(){
	counter = 0;
	document.getElementById("counter").innerText = counter;
	document.getElementById("saves").innerText = "";
	history.length = 0;
	counter2 = 0;
}