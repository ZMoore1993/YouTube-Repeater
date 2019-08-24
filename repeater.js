window.onload=function() {
	document.getElementById("submit").addEventListener('click',clicked);
}

function clicked() {
	var emb = document.getElementById("searchText").value;
	var obj = document.getElementById("player");
	var err = document.getElementById("error");
	if (emb.includes("Enter video embed link here") || !emb.includes("youtube.com")) {
		err.innerHTML = "Invalid URL";
		return;
	}
	err.innerHTML = "";
	if (emb.includes("watch")) {
		emb = emb.replace("watch?v=","embed/");
	}
	if (emb.includes("http") && !emb.includes("https")) {
		emb = emb.replace("http","https");
	}
	var id = emb.substring(30);
	var loop = emb.concat("?autoplay=1&playlist=");
	loop = loop.concat(id);
	loop = loop.concat("&loop=1");
	obj.src = loop;
}