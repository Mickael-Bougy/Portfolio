

var index = 0;
var intervalId = null;
var isNuit = false;
var tab = ['#D6C9B8','#CEC2B2','#C6BAAC','#BEB3A6','#B6ACA0',
'#AEA59A','#A59D95','#9D968F','#958F89','#8D8883','#85807D','#7D7977'];
function modenuit() {
	
	switch(isNuit)
	{
		case true : toJour();
		break;
		case false : toNuit();
		break;
	}
}

function toNuit (){
	
	if(index < tab.length){
		$('body').css('backgroundColor',tab[index]);
		document.getElementById("btn_id").innerHTML = "Mode Jour";
		index++;
	}
	else {
		$('nuitJour').text("Mode Jour");
		finish();
		isNuit =!isNuit;
	}
	
}

function toJour (){
	
	if(index >= 0){
		$('body').css('backgroundColor',tab[index]);
		document.getElementById("btn_id").innerHTML = "Mode Nuit";
		index--;
	}
	else {
		finish();
		isNuit =!isNuit;
	}
	
}


function start(){
	intervalId = setInterval(modenuit, 100);
}	

function finish() {
	clearInterval(intervalId);
}
