
class Gato{
    #nombre;
    #foto;
    /* edad;
    peso; */
    #personalidad;

    constructor(nombre, personalidad, foto){
        this.#nombre = nombre;
        this.#personalidad = personalidad;
        this.#foto = foto;
    }

    getNombre(){
        return this.#nombre;
    }
    getPersonalidad(){
        return this.#personalidad;
        
    }getFoto(){
        return this.#foto;
    }
    
}

export {Gato};