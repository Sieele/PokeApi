var PokeListURL = 'https://pokeapi.co/api/v2/pokemon/?offset={offset}&limit={limit}';
var PokeDataURL = 'https://pokeapi.co/api/v2/pokemon/{name}';

var PokelistOffset = 0;
var PokeListLimit = 25;

function GetPokeList() {
	$.getJSON(PokeListURL.replace('{offset}', PokelistOffset).replace('{limit}', PokeListLimit), function (data) {
		data.results.forEach(function (o) {

			$.getJSON(PokeDataURL.replace('{name}', o.name), function (detail) {

				var htmlOut = '<div class = "col-sm-3 text-center py-4 border">';

				htmlOut += '<img src = "{img}" class = "img-responsive" height = "150px" />'.replace('{img}', detail.sprites.front_default);

				htmlOut += '<h2>' + o.name.toUpperCase() + '</h2>';

				htmlOut += '<p>' + "Por: +R$ 0,00" + '</p>';

				htmlOut += '<p class = "text-center"><a href=""> ADICIONAR </a></p>';

				htmlOut += "</div>";

				$("#resultado").append(htmlOut);

			}); 
		});
	});
}