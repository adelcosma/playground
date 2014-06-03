function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var email = getParameterByName('email');
if (email)
	$('#myEmail').html("<h1><b>Current email: </b>" + email + "</h1>");
else
	$('#myEmail').html("<h1><b>No email</b></h1>");