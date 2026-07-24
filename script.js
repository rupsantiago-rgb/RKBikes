function cambiarIdioma(idioma){
    fetch(idioma + ".json")
    .then(r => r.json())
    .then(datos => {
        document.getElementById("titulo").textContent = datos.titulo;
    });
}