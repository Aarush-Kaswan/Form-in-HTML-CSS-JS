function enterNickname(){
	if (document.getElementById('nickname').checked) {
		document.getElementById('nick').style.display="inline";
		document.getElementById('nick').setAttribute('required',true);
	}
	else{
		document.getElementById('nick').removeAttribute('required');
		document.getElementById('nick').style.display="none";
	}
}

function billingFunction(){
	if (document.getElementById('copy-add').checked) {
		document.getElementById('bill-add').value=document.getElementById('add').value
		document.getElementById('bill-city').value=document.getElementById('city').value
		document.getElementById('bill-state').value=document.getElementById('state').value
		document.getElementById('bill-pin').value=document.getElementById('pin').value
		document.getElementById('bill-landmark').value=document.getElementById('landmark').value
	}
	else{
		document.getElementById('bill-add').value=""
		document.getElementById('bill-city').value=""
		document.getElementById('bill-state').value=""
		document.getElementById('bill-pin').value=""
		document.getElementById('bill-landmark').value=""
	}
}