$(document).keydown(function(e) {
	if (e.key === 'Enter') {
		e.preventDefault();
		eql();
	}
});

function inst(num) {
	let data = $("#caldisplay").val();
	$("#caldisplay").val(data + num);
}

function deleteall() {
	$("#caldisplay").val("");
}

function eql() {
	try {
		let data = $("#caldisplay").val();
		let result = eval(data);
		if (!isNaN(result)) {
			$("#caldisplay").val(parseFloat(result.toFixed(2)));
		} else {
			alert("Invalid Expression");
		}
	} catch (e) {
		alert("Invalid Expression");
	}
}

function c() {
	let data = $("#caldisplay").val();
	$("#caldisplay").val(data.substring(0, data.length - 1));
}
