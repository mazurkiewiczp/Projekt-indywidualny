	function przyklad1() {
	    Cookies.set('name', { foo: 'bar' });
	    var x = Cookies.get('name');
	    var obj = JSON.parse(x);
	    alert(obj.foo);
        }

	function przyklad2() {
	    var text = '{"name":"Jan Kowalski","street":"Warszawska 10"}';
	    Cookies.set('foo', text);
	    var x2 = Cookies.getJSON('foo');
	    alert(x2.name + " " + x2.street);
	}

	function przyklad3() {
	    var text = '{"name":"Jan Kowalski","street":"Warszawska 10"}';
	    localStorage.setItem('key', JSON.stringify(text));
	    var obj = localStorage.getItem('key');
	    var x31 = JSON.parse(obj);
	    var x32 = JSON.parse(x31);
	    alert(x32.name + " " + x32.street);
	}



var vals = document.getElementsByClassName("note_val");
for (var i = 0; i < vals.length; i++) {
	var key = "val" + i;
	var val = getCookie(i);
	vals[i].setAttribute("id", key);
	vals[i].setAttribute("value", val);
}

var x = document.getElementById("val0");
var y = document.getElementById("val1");

