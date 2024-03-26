export class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
    constructor(nombre, edad, img, comentarios, sonido) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    get getNombre() {
        return this.#nombre;
    }

    get getEdad() {
        return this.#edad;
    }

    get getImg() {
        return this.#img;
    }

    get getSonido() {
        return this.#sonido;
    }

    set setComentarios(comentario) {
        this.#comentarios = comentario;
    }
}

export class Leon extends Animal {
    rugir() {}
}

export class Lobo extends Animal {
    aullar() {}
}

export class Oso extends Animal {
    snarl() {}
}

export class Serpiente extends Animal {
    sisear() {}
}

export class Aguila extends Animal {
    chillar() {}
}
