
class Desayuno{
    #nombre = "def nombre";
    #tipoPreparacion = "def preparacion";
    #foto = "def foto";

    /**
     * Inicializa los estados del objeto Desayuno
     * @param {String} nombre del desayuno
     * @param {String} tipoPreparacion del desayuno
     * @param {String} foto url del desayuno
     */
    constructor(nombre, tipoPreparacion, foto){
        this.#nombre = nombre;
        this.#tipoPreparacion = tipoPreparacion;
        this.#foto = foto;
    }

    getNombre(){
        return this.#nombre;
    }

    getTipoPreparacion(){
        return this.#tipoPreparacion;
    }

    getFoto(){
        return this.#foto;
    }
}

export {Desayuno};