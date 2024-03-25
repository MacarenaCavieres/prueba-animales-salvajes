const animal = document.querySelector("#animal");
const edad = document.querySelector("#edad");
const comentarios = document.querySelector("#comentarios");
const btnRegistrar = document.querySelector("#btnRegistrar");
const form = document.querySelector("form");
const preview = document.querySelector("#preview");

class Animal {
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

class Leon extends Animal {
    rugir() {}
}

class Lobo extends Animal {
    aullar() {}
}

class Oso extends Animal {
    snarl() {}
}

class Serpiente extends Animal {
    sisear() {}
}

class Aguila extends Animal {
    chillar() {}
}

//funcion IIFE
// const auto = (()=>{

// })()

form.addEventListener("submit", (e) => {
    e.preventDefault();
    agrupar();
});

const agrupar = () => {
    const animalSelect = animal.value;
    const edadSelect = edad.value;
    const msg = comentarios.value;
    console.log(animalSelect);
    console.log(edadSelect);
    console.log(msg);

    if (animalSelect === "Seleccione un animal") {
        alert("Tiene que seleccionar un animal");
        return;
    }
    if (edadSelect === "Seleccione un rango de años") {
        alert("Tiene que seleccionar un rango de edad");
        return;
    }
    if (!msg.trim()) {
        alert("Tiene que dejar sus comentarios");
        return;
    }

    const img = document.createElement("img");
    preview.appendChild(img);

    switch (animalSelect) {
        case "Leon":
            img.src = "../assets/imgs/Leon.png";
            img.width = "200";
            break;
        case "Lobo":
            img.src = "../assets/imgs/Lobo.jpg";
            img.width = "200";
            break;
        case "Oso":
            img.src = "../assets/imgs/Oso.jpg";
            img.width = "200";
            break;
        case "Serpiente":
            img.src = "../assets/imgs/Serpiente.jpg";
            img.width = "200";
            break;
        case "Aguila":
            img.src = "../assets/imgs/Aguila.png";
            img.width = "200";
            break;
    }
};
