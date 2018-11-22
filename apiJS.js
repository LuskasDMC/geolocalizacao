 navigator.geolocation.getCurrentPosition(f1);
//se funcionar:
function f1(pos){
	console.log(pos);
	var lat = pos.coords.latitude;
	var long = pos.coords.longitude;
// para dar um alerta da posição	alert(lat + ", " + long)
	mymap.setView([lat,long],13)
}

function init(){
	btn = document.getElementById("btn_buscar");
	btn.addEventListener("click", f2);
	return;
}

function f2(pos){
	console.log(pos);
	var latitude = Number(document.getElementById("latitude").value);
	var longitude = Number(document.getElementById("longitude").value);
	mymap.setView([latitude,longitude],13)

	var latitude2 = Number(document.getElementById("latitude2").value);
	var longitude2 = Number(document.getElementById("longitude2").value);

var polygon = L.polygon([
    [latitude,longitude],
    [latitude2,longitude2]
]).addTo(mymap);
}


//Códigos para o funcionamento
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibHVza2FzZG1jIiwiYSI6ImNqb2U1aGc2aDE0YXEza280a3c1aTdjYnMifQ.THYQxiVZIzibXfKlVM00hg'
}).addTo(mymap);
init();