//Primera entrega Proyecto Final
//prompt de bienvenida
let cliente = prompt("Ingrese su nombre").toUpperCase();
document.write("Bienvenida/o " + cliente + " a On Travel" + "<br>" );

//
//array de objetos
const promo = [
    {
        destino: "Rio de Janeiro",
        id: "GIG",
        precio: 65000,
        foto: "https://i.pinimg.com/originals/21/5f/97/215f974acbfc42ad2db977c996a3e35f.png",
    },
    {
        destino: "Cancun",
        id: "CUN",
        precio: 95000,
        foto: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_310,q_75,w_470,x_2144,y_1660/v1/clients/quintanaroo/fotogaleria_1352922621_family_cancun_08_0432beda-364b-4cbb-b043-024ea3a2c4fc.jpg",
    },
    {
        destino: "Punta Cana",
        id: "PUJ",
        precio: 103500,
        foto: "https://www.todopuntacana.com/wp-content/uploads/2019/02/CapCana_beach.jpg",
    },

];

console.table(promo);
// alert 
alert("Elija a continuación uno de los siguientes destinos!!")
//pido info para que elija destino
let viaje = prompt("Elije RIO - CANCUN - PUNTA CANA").toUpperCase();
//operaciones 
//
const resta = (a, b) => a - b;
const suma = (a, b) => a + b;
const iva   = x => x * 0.21;
//

function descuento(resta,suma) {
    if (viaje == "RIO" ) {

        // junto css agregar la img adecuada a cada destino
        document.write("<br>"+"<div class= 'box'>");
        document.write(`<img id="foto" src=${promo[0].foto}> `);
        document.write("<div class= 'text'>");
        document.write(promo[0].destino + `<br>`);
        document.write(promo[0].id  + `<br>`);
        document.write("$" + promo[0].precio + " s/iva" + `<br>` );
        document.write("</div>"  + "<br>");
        document.write("</div>"  + "<br>");
        // a traves de las operaciones sacar el precio final con iva y descuento
        let precioFinal = resta(suma(65000, iva(65000)), 5000); 
        document.write("<br>" + "Elegiste Rio de Janeiro como tu siguiete destino" + "<br>" + "El precio Final es de: $" + precioFinal + "<br>");
        alert("Tenes un descuento de $5000");
        
    } 
    else if ( viaje == "CANCUN"){

        // junto css agregar la img adecuada a cada destino
        document.write("<br>"+"<div class= 'box'>");
        document.write(`<img id="foto" src=${promo[1].foto}> `);
        document.write("<div class= 'text'>");
        document.write(promo[1].destino + `<br>`);
        document.write(promo[1].id  + `<br>`);
        document.write("$"+promo[1].precio + " s/iva" + `<br>` );
        document.write("</div>"  + "<br>");
        document.write("</div>"  + "<br>");

        // a traves de las operaciones sacar el precio final con iva y descuento
        let precioFinal = resta(suma(95000, iva(95000)), 7500); 
        document.write("<br>" + "Elegiste Cancun como tu siguiete destino" + "<br>" + "El precio Final es de: $" + precioFinal + "<br>");
        alert("Tenes un descuento de $7500");
        
    }
    else if(viaje == "PUNTA CANA" ){

        // junto css agregar la img adecuada a cada destino
        document.write("<br>"+"<div class= 'box'>");
        document.write(`<img id="foto" src=${promo[2].foto}> `);
        document.write("<div class= 'text'>");
        document.write(promo[2].destino + `<br>`);
        document.write(promo[2].id  + `<br>`);
        document.write("$"+promo[2].precio + " s/iva" + `<br>` );
        document.write("</div>" + "<br>");
        document.write("</div>"  + "<br>");

        // a traves de las operaciones sacar el precio final con iva y descuento
        let precioFinal = resta(suma(103500, iva(103500)), 10000); 
        document.write("<br>" + "Elegiste Punta Cana como tu siguiete destino" + "<br>" + "El precio Final es de: $" + precioFinal + "<br>");
        alert("Tenes un descuento de $10000");
        
    }
    else{
        document.write("<br>" + "No tenemos ese destino.Vuelve a intentarlo");
    }
}

descuento (resta,suma);




