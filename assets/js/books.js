function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    l = location.search.replace(/[%3C]/,"");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(l);
    if (results == null || !validateEmail(results[1])) {
    	return "";
    }
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
$.ajax({
    url: 'http://localhost:8080/OpenBook/webresources/books',
    type: 'GET',
    success: function() { alert('PUT completed'); }
});
var email = getParameterByName('email');
if (email)
	$('#myEmail').html("<b>Current email: </b>" + email);
else
	$('#myEmail').html("<b>No email</b>");