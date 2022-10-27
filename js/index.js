
const boton1 = document.getElementById('boton1');





const texto = document.getElementById('textoColor');
//var r = new Array("00","22","33","55","66","88","99","BB","CC","EE","FF");
//var g = new Array("00","22","33","55","66","88","99","BB","CC","EE","FF");
//var b = new Array("00","22","33","55","66","88","99","BB","CC","EE","FF");

objColores = {"SandyBrown":"#F4A460","Goldenrod":"#00008B", "DarkBlue": "#00008B","DodgerBlue":"#1E90FF","SteelBlue":"4682B4","Turquoise":"#40E0D0","SpringGreen":"#00FF7F","GreenYellow":"#ADFF2F","MistyRose":"#FFE4E1","Maroon":"#800000","Coral":"#FF7F50"};

var coloresNombres = new Array("SandyBrown","Goldenrod","DarkBlue","DodgerBlue","SteelBlue","Turquoise","SpringGreen","GreenYellow","MistyRose","Maroon","Coral" );

var colores = new Array(       "#F4A460",    "#DAA520",  "#00008B", "#1E90FF","#4682B4",     "#40E0D0",  "#00FF7F",   "#ADFF2F","#FFE4E1","#800000","#FF7F50" );


var posColorActual = Math.floor(Math.random()*(10-0+1))+0;
boton1.click();


function cambiarColor(){
    console.log("Enttraa");
    var pos1;
    
    do {
        pos1 = Math.floor(Math.random()*(10-0+1))+0;
    } while (pos1 == posColorActual);


    console.log("pos1 = "+pos1+"   actual = "+posColorActual);
    posColorActual = pos1;
    document.body.style.backgroundColor = colores[posColorActual];

    
    document.getElementById('textoColor').innerHTML  = coloresNombres[posColorActual];
    document.getElementById('textoColor').style.color = colores[posColorActual];
    //var pos2 = Math.floor(Math.random()*(10-0+1))+0;
   


    //var nuevoColor = "#"+r[pos1]+g[pos2]+b[pos3];

    /*document.body.style.backgroundColor = nuevoColor;
    boton1.style.color = nuevoColor;

    var pos4 = Math.floor(Math.random()*(10-0+1))+0;
    var pos5 = Math.floor(Math.random()*(10-0+1))+0;
    var pos6 = Math.floor(Math.random()*(10-0+1))+0;*/
    
}