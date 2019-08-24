window.onload=function() {
	document.getElementById("submit").addEventListener('click',clicked);
}

function clicked() {
	var emb = document.getElementById("searchText").value;
	var obj = document.getElementById("player");
	if (emb.includes("Enter video embed link here") || !emb.includes("youtube.com")) {
		document.getElementById("error").innerHTML = "Invalid URL";
		return;
	}
	document.getElementById("error").innerHTML = "";
	if (emb.includes("watch")) {
		emb = emb.replace("watch?v=","embed/");
	}
	if (emb.includes("http") && !emb.includes("https")) {
		emb = emb.replace("http","https");
	}
	var id = emb.substring(30);
	var loop = emb.concat("?version=3&autoplay=1&loop=1&playlist=");
	loop = loop.concat(id);
	obj.src = loop;
	obj.play()
}