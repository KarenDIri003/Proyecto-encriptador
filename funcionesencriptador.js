function ocultar(){
    document.getElementById("mensajeimagendesencriptado").style.display = "none";
    document.getElementById("desencriptado").style.display = "block";
}

function encriptar(){
    const text = document.getElementById("inputText")
    let nuevoTexto = ""

    for (let index = 0; index < text.value.length; index++) {
        const letra = text.value[index]
        
        if (letra === "e"){
            nuevoTexto += "enter"
        }else if(letra === "i"){
            nuevoTexto += "imes"
        }else if(letra === "a"){
            nuevoTexto += "ai"
        }else if(letra === "o"){
            nuevoTexto += "ober"
        }else if(letra === "u"){
            nuevoTexto += "ufat"
        }else{
            nuevoTexto += text.value[index]
        }
    }
    ocultar()
    const mensaje = document.getElementById("desencriptado").getElementsByTagName("p")[0]
    mensaje.innerHTML = nuevoTexto;
    console.log("nuevoTexto", nuevoTexto);
}

function desencriptar(){
    const text = document.getElementById("inputText")
    let nuevoTexto = ""

    nuevoTexto = encriptardesencriptar("ai", "a", text.value)
    nuevoTexto = encriptardesencriptar("enter", "e", nuevoTexto)
    nuevoTexto = encriptardesencriptar("imes", "i", nuevoTexto)
    nuevoTexto = encriptardesencriptar("ober", "o", nuevoTexto)
    nuevoTexto = encriptardesencriptar("ufat", "u", nuevoTexto)

    ocultar()

    const mensaje = document.getElementById("desencriptado").getElementsByTagName("p")[0]
    console.log("mensaje", mensaje)
    mensaje.innerHTML = nuevoTexto;
}

function encriptardesencriptar(textoCambiar, textoNuevo, textoCompleta) {
    return textoCompleta.split(textoCambiar).join(textoNuevo);
}

async function copiarTexto(){
    const text = document.getElementById("desencriptado").getElementsByTagName("p")[0].innerText
    await navigator.clipboard.writeText(text);
    alert("Texto copiado")
}