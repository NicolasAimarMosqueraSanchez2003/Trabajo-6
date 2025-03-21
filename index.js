const estilos = [
    "estilos.css",
    "estilos-retro.css",
    "estilos-urbano.css",
    "none"
]

let indice = 0

function cambiarEstilo() {
    indice = (indice + 1) % estilos.length

    if (estilos[indice] === "none") {
        document.getElementById("stylesheet").setAttribute("href", "")
    } else {
        document.getElementById("stylesheet").setAttribute("href", estilos[indice])
    }
}

function cambiarEstiloAleatorio() { 
     const indiceAleatorio = Math.floor(Math.random() * estilos.length)

    console.log(indiceAleatorio)
    
    if (estilos[indiceAleatorio] === "none") {
        document.getElementById("stylesheet").setAttribute("href", "")
    } else { 
        document.getElementById("stylesheet").setAttribute("href", estilos[indiceAleatorio])
    }
}

function cambiarEstiloSelect() {
    const select = document.getElementById("estilosSelect").value

    if (select === "none") {
        document.getElementById("stylesheet").setAttribute("href", "")
    } else { 
        document.getElementById("stylesheet").setAttribute("href", select)
    }
}

function cambiarEstiloRadio(Input) {
    const radio  = Input.value
    if (radio === "none") {
        document.getElementById("stylesheet").setAttribute("href", "")
    } else { 
        document.getElementById("stylesheet").setAttribute("href", radio)}
}

function guardarEstilo(){
    let estiloActual = document.getElementById("stylesheet").getAttribute("href")|| "none"

    localStorage.setItem("estiloGuardado", estiloActual)

    botonUndido(true)
}

function botonUndido() {
    let estiloGuardado = localStorage.getItem("estiloGuardado");
    let estiloActual = document.getElementById('stylesheet').getAttribute('href') || "none";
    let boton = document.getElementById('guardar');

    if (estiloActual === estiloGuardado) {
        boton.classList.add('undido');
    } else {
        boton.classList.remove('undido');
    }
}

window.onload = function() {
    let estiloGuardado = localStorage.getItem("estiloGuardado")

    if (estiloGuardado) {
        document.getElementById("stylesheet").setAttribute("href", estiloGuardado)
        botonUndido(true)
    }
}

let observer = new MutationObserver(botonUndido)
observer.observe(document.getElementById('stylesheet'), { attributes: true, attributeFilter: ['href'] })