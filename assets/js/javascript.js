

 function convertirCelcius (){
  var fahrenheit = document.getElementById('textFahrenheit').value;

 	if(fahrenheit != null){
 		document.getElementById('textCelcius').value = (9/5) * fahrenheit + 32;
 	}
 	
 }
 function convertirFahrenheit (){
  var celcius = document.getElementById('textCelcius').value;
  if(celcius != null){
 	document.getElementById('textFahrenheit').value = (celcius - 32) * (5/9);
 	}
 }


