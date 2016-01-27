	function set_storage(id) {
	    var val_id = "val" + id;
	    var val = document.getElementById(val_id).value;
	    localStorage.setItem(val_id, val);
	}

	function delete_storage() {
	    localStorage.clear();
	    location.reload();
	}

	function show_storage() {
	    var items = document.getElementsByClassName("note_val");
	    var show = "";
	    for (var i = 0; i < items.length; i++)
	        if (localStorage.getItem("val" + i) != null) show += localStorage.getItem("val" + i) + " ";
	    alert(show);
	}

	var vals = document.getElementsByClassName("note_val");
	for (var i = 0; i < vals.length; i++) {
	    var key = "val" + i;
	    var val = localStorage.getItem(key);
	    vals[i].setAttribute("id", key);
	    if (val != null) vals[i].setAttribute("value", val);
	    else vals[i].setAttribute("value", "");
	}

	var notes = document.getElementsByClassName("add_note");
	for (var i = 0; i < notes.length; i++) {
	    notes[i].setAttribute("id", i);
	}
