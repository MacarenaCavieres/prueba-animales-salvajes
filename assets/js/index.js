const animal = document.querySelector("#animal");
const edad = document.querySelector("#edad");
const comentarios = document.querySelector("#comentarios");
const btnRegistrar = document.querySelector("#btnRegistrar");
const form = document.querySelector("form");
const preview = document.querySelector("#preview");
const Animales = document.querySelector("#Animales");
const player = document.querySelector("#player");

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
    imgs();
});

const imgs = async () => {
    try {
        const response = await fetch("animales.json");

        if (!response.ok) {
            throw new Error("No se encontro lo solicitado");
        }
        const { animales } = await response.json();

        return animales;
    } catch (err) {
        alert(err.message);
    }
};

animal.addEventListener("change", async (e) => {
    const imgData = await imgs();
    const imagenes = imgData.find((item) => item.name === e.target.value);
    preview.style.backgroundImage = `url("${imagenes.imagen}")`;
});

const play = (sonido) => {
    player.src = sonido;
    player.play();
};

const crearTarjeta = (animal) => {
    return `<div class="mostrarAnimal" onclick="play('${animal.getSonido}')">
    <img src="${animal.getImg}" alt="${animal.getNombre}">
    <button>click</button>
  </div>`;
};

const agrupar = async () => {
    const datasAnimales = await imgs();
    const animalSelect = animal.value;

    const datos = datasAnimales.find((item) => item.name === animalSelect);

    const edadSelect = edad.value;
    const msg = comentarios.value;

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

    let animalInstancia;

    switch (animalSelect) {
        case "Leon":
            animalInstancia = new Leon(animalSelect, edadSelect, datos.imagen, msg, datos.sonido);
            break;
        case "Lobo":
            animalInstancia = new Lobo(animalSelect, edadSelect, datos.imagen, msg, datos.sonido);
            break;
        case "Oso":
            animalInstancia = new Oso(animalSelect, edadSelect, datos.imagen, msg, datos.sonido);
            break;
        case "Serpiente":
            animalInstancia = new Serpiente(animalSelect, edadSelect, datos.imagen, msg, datos.sonido);
            break;
        case "Aguila":
            animalInstancia = new Aguila(animalSelect, edadSelect, datos.imagen, msg, datos.sonido);
            break;
        default:
            break;
    }
    console.log(animalInstancia);
    const instancia = crearTarjeta(animalInstancia);

    Animales.innerHTML += instancia;
};
