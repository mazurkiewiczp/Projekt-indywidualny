	var vals = document.getElementsByClassName("note_val");
	for (var i = 0; i < vals.length; i++) {
	    var key = "val" + i;
	    var val = $.jStorage.get(key, "");
	    vals[i].setAttribute("id", key);
	    vals[i].setAttribute("value", val);
	}

	var notes = document.getElementsByClassName("add_note");
	for (var i = 0; i < notes.length; i++) {
	    notes[i].setAttribute("id", i);
	}

	function add(i) {
	    var val_id = "val" + i;
	    var key = val_id;
	    var val = document.getElementById(val_id).value;
	    $.jStorage.set(key, val);
	}

	function flush() {
	    $.jStorage.flush();
	    location.reload();
	}

	function show_cache() {
	    var index = $.jStorage.index();
	    var show = "";
	    var el;
	    for (var i = 0; i < index.length; i++){
		el = $.jStorage.get(index[i], " ");
	        show += el + " ";}
	    alert(show);
	}
