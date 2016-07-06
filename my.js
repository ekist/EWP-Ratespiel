let randomNumber = Math.floor(Math.random() * 100 + 1);
list=[];
var Versuchsanzahl=7;

$("#start").on("click", function(){
	$("#result").text("");
	console.log(randomNumber);
	console.log(Versuchsanzahl);
	$("#versuch").text("Noch 7 Versuche von 7.");
	
});


$("#check").on("click", function(){
	x=$("#user-input").val();
	console.log(Versuchsanzahl);
	$("#versuch").text("Noch " + (Versuchsanzahl-1) + " Versuch/-e von 7.");
	if (x > randomNumber) {
		$("#result").text("Niedriger raten.");
		console.log("Niedriger raten.");
		Versuchsanzahl=Versuchsanzahl-1;	
	} 
	else if (x < randomNumber) {
		$("#result").text("Höher raten.");
		console.log("Höher raten.");	
		Versuchsanzahl=Versuchsanzahl-1;
	}	
	else if (x == randomNumber) {
		console.log("Gewonnen.");
		$("#result").text("Gewonnen, neues Spiel starten!");
		//Versuchsanzahl=0;
	};
		
	if (Versuchsanzahl == 0) {
		$("#result").text("Verloren, neues Spiel starten!");
		Versuchsanzahl =7;
	};
});		
	
