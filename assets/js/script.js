
var index = 0;
var intervalId = null;

function modenuit() {

	var tab = ['red','green','yellow'];
	
	if(index < tab.length){
		console.log($('body').css('backgroundColor'))
		$('body').css('backgroundColor',tab[index]);
		console.log(index);
		index++;
	}
	else finish();
	
}

function start(){
	intervalId = setInterval(modenuit, 1000);
}	

function finish() {
	clearInterval(intervalId);
}