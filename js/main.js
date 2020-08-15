function getLink(upiId) {
	var paymentStr = "upi://pay?pa=" + upiId +
                        "&pn=" + $('#pn').val() +
			"&am=" + $('#am').val() +
	    		"&tn=" + "#fingerTips";
	return paymentStr;
}



function payToUpi() {
	var upiId = $("#upi-input").val();
	paymentStr = getLink(upiId);
	window.location= paymentStr;
}

// upi://pay?pa=sruthisantho95@okaxis&pn=cek&tn=TreatmentFund&am=undefined
