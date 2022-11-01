import {ContenedorTarjetas} from "./ContenedorTarjetas.js"
import { listaMichis } from "./listaMichis.js";


const contenedorTarjetasMichis = new ContenedorTarjetas("#contenedor-cards");
contenedorTarjetasMichis.agregarTarjetasALaAppCon(listaMichis);



/* const unMichi = new Gato("Chucky", "Es de comer mucho", "https://static6.depositphotos.com/1030334/671/i/600/depositphotos_6716219-stock-photo-kitten.jpg");
//una tarjeta con otro objeto (POO)
const unaTarjeta = new Tarjeta(
    unMichi.getNombre(),
    unMichi.getPersonalidad(),
    unMichi.getFoto()
);
//una tarjeta sin usar otras objeto
const otraTarjeta = new Tarjeta("Toffee", "Es jugueton", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1199242002.jpg?crop=0.666xw:1.00xh;0.201xw,0&resize=480:*");



document.querySelector("#contenedor-cards").innerHTML =`
    <div class="row">
        <div class="col">
            ${unaTarjeta.generarHtml()}
        </div>
        <div class="col">
            ${otraTarjeta.generarHtml()}
        </div>
    </div>
`; */