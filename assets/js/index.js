import { auto } from "./iife.js";
import { animal } from "./iife.js";
import { imgs } from "./iife.js";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    auto.getData();
    imgs();
});

animal.addEventListener("change", async (e) => {
    const imgData = await imgs();
    const imagenes = imgData.find((item) => item.name === e.target.value);
    preview.style.backgroundImage = `url("${imagenes.imagen}")`;
});
