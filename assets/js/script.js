

var index = 0;
var intervalId = null;
var isNuit = false;
var tab = ['#9a8478','#9a8478','#948278','#908078','#8D7F78',
'#8A7E78','#877D77','#847C77','#817B77','#7D7977'];
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
