//H1
code.jquery.com

<script
  src="http://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>


// H2
$('h1');
$('h1').html("Lore, ipsum");

$('img').eq(0).attr("src", "https://storage.googleapis.com/afs-prod/media/e2a9aae4ddfc460eab6ca9c36ae0b3df/1000.jpeg");

// H3

$('#button').click( function() {
 $('h1').fadeOut();
});


// H4 Demo

$('#contant').load('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22');

// H4 Demo

var content;

var url ="https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";



$.get(url, function(data){
    
	content = data;   

});



var sis = `Pilviä: ${content.clouds.all} <br> Lämpötila: ${content.main.temp}`;


$('h1').html( sis );