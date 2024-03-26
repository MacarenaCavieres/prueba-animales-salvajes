import { Animal } from "./clases.js";
import { Leon } from "./clases.js";
import { Lobo } from "./clases.js";
import { Oso } from "./clases.js";
import { Serpiente } from "./clases.js";
import { Aguila } from "./clases.js";
export const animal = document.querySelector("#animal");
const edad = document.querySelector("#edad");
const comentarios = document.querySelector("#comentarios");
const preview = document.querySelector("#preview");
const Animales = document.querySelector("#Animales");

export const imgs = async () => {
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

const crearTarjeta = (animal) => {
    return `<div class="mostrarAnimal">
    <img src="${animal.getImg}" alt="${animal.getNombre}">
    <button class="btn btn-light d-block">Sonido</button>
    <audio src="${animal.getSonido}"></audio>
  </div>`;
};

//funcion IIFE
export const auto = (() => {
    async function agrupar() {
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

        const instancia = crearTarjeta(animalInstancia);

        Animales.innerHTML += instancia;

        let animalitos = document.querySelectorAll(".mostrarAnimal");

        animalitos.forEach((item) => {
            item.addEventListener("click", function () {
                let audio = this.querySelector("audio");
                audio.play();
            });
        });

        animal.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentarios.value = "";
        preview.style.backgroundImage = "url(../assets/imgs/lion.svg)";
    }

    return {
        getData() {
            agrupar();
        },
    };
})();
