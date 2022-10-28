
const boton1 = document.getElementById('boton1');





const texto = document.getElementById('textoColor');


var coloresNombres = new Array("SandyBrown","Goldenrod","DarkBlue","DodgerBlue","SteelBlue","Turquoise","SpringGreen","GreenYellow","MistyRose","Maroon","Coral" );

//var colores = new Array(       "#F4A460",    "#DAA520",  "#00008B", "#1E90FF","#4682B4",     "#40E0D0",  "#00FF7F",   "#ADFF2F","#FFE4E1","#800000","#FF7F50" );


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
    document.body.style.backgroundColor = coloresNombres[posColorActual];

    
    document.getElementById('textoColor').innerHTML  = coloresNombres[posColorActual];
    document.getElementById('textoColor').style.color = coloresNombres[posColorActual];

    
}