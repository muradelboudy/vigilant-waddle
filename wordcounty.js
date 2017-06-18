'use strict';
function wordCounty(idOfInput, idOfOutput){
	var s;

	//Error handling
	if(document.getElementById(idOfOutput) === null){
		console.log("ID of output doesn't exist");
		return false;
	}
	if(document.getElementById(idOfInput) === null){
		console.log("ID of input doesn't exist");
		return false;
	}

	//get type of element in order to get value correctly
	if(document.getElementById(idOfInput).nodeName.toLowerCase() === "input" || document.getElementById(idOfInput).nodeName.toLowerCase() === "textarea"){
		s = document.getElementById(idOfInput).value;
	}else{
		s = document.getElementById(idOfInput).innerText;
	}

	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	if(s === "" || s === null){
		document.getElementById(idOfOutput).innerText = 0;

	}else{
		document.getElementById(idOfOutput).innerText = s.split(' ').length;

	}
}
