	function setCookie(id) {
	    var val_id = "val" + id;
	    var val = document.getElementById(val_id).value;
	    var exdays = 10;
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    var expires = "expires=" + d.toUTCString();
	    document.cookie = id + "=" + val + "; " + expires;
	}

	function getCookie(id) {
	    var name = id + "=";
	    var ca = document.cookie.split(';');
	    for (var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	    }
	    return "";
	}

	function delete_cookies() {
	    var cookies = document.getElementsByClassName("note_val");
	    for (var i = 0; i < cookies.length; i++) {
	        document.cookie = i + "=" + "" + "; " + " + expires=Thu, 01-Jan-1970 00:00:01 GMT";
	    }
	    location.reload();
	}

	function show_cookies() {
	    var cookies = document.getElementsByClassName("note_val");
	    var show = "";
	    for (var i = 0; i < cookies.length; i++)
	        show += getCookie(i) + " ";
	    alert(show);
	}

	var vals = document.getElementsByClassName("note_val");
	for (var i = 0; i < vals.length; i++) {
	    var key = "val" + i;
	    var val = getCookie(i);
	    vals[i].setAttribute("id", key);
	    vals[i].setAttribute("value", val);
	}

	var notes = document.getElementsByClassName("add_note");
	for (var i = 0; i < notes.length; i++) {
	    notes[i].setAttribute("id", i);
	}
