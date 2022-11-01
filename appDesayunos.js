import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { menuDesayunos } from "./menuDesayuno.js";

const unContenedorTarjetas = new ContenedorTarjetas("#contenedor-cards");

/* unContenedorTarjetas.setIdContenedor("#contenedor-cards"); */

unContenedorTarjetas.agregarTarjetasALaAppCon(menuDesayunos);



/* const unaTarjeta = new Tarjeta(
    unDesayuno.getNombre(),
    unDesayuno.getTipoPreparacion(),
    unDesayuno.getFoto()
); */

 