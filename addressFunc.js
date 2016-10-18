 //var info = [1234, 1459, 23453, 23, 546, 1230, 432, 666, 3490],["Oak avenue", "Main Street", "Elm Street", "Nonantum Street", "Mulberry Lane"],["Boston", "New York", "Brimstone", "Ellvington", "Dookietown"],["Indiana", "FL", "NC", "CO", "IA", "WA","XX"],[12345, 00000, 66666,54321,10293,54723,54839458392]];
 // var str = ["Oak avenue", "Main Street", "Elm Street", "Nonantum Street", "Mulberry Lane" ];
 // var cty = ["Boston", "New York", "Brimstone", "Ellvington", "Dookietown"];
 // var ste = ["Indiana", "FL", "NC", "CO", "IA", "WA","XX"];
 // var zip = [12345, 00000, 66666,54321,10293,54723,54839458392];

 // var ranadr = (Math.floor(Math.random() * adr.length));
 //  var ranstr = (Math.floor(Math.random() * str.length));
 //   var rancty = (Math.floor(Math.random() * cty.length));
 //    var ranste = (Math.floor(Math.random() * ste.length));
 //     var ranzip = (Math.floor(Math.random() * zip.length));

 //     console.log (adr[ranadr] + " " + str[ranstr] + ", " + cty[rancty] + " " + ste[ranste] + ", " + zip[ranzip]);

var info = [[1234, 1459, 23453, 23, 546, 1230, 432, 666, 3490],["Oak avenue", "Main Street", "Elm Street", "Nonantum Street", "Mulberry Lane"],["Boston", "New York", "Brimstone", "Ellvington", "Dookietown"],["Indiana", "FL", "NC", "CO", "IA", "WA","XX"],[12345,00000,66666,54321,10293,54723,54839458392]];
var num1 = info.length-1;
var point = [];
var num2;
var address;

function grabOne(arr){
	for (var i=0; i<=num1; i++){
    num2 = (Math.floor(Math.random() * (arr[i].length)-1));
    point.push(arr[i][num2]);
}
   return(point);
  
}


function generate(x){

	var y = grabOne(x);
	address = (y[0] + " " + y[1] + ", " + y[2] + " " + y[3] + ", " + y[4]);
  return(address);
}

generate(info);