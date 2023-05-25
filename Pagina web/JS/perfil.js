function mostrarImagen(event) {
    var imagenSource = event.target.result;
    var previewImage = document.getElementById('preview');

    previewImage.src = imagenSource;
}

function procesarArchivo(event) {
    var imagen = event.target.files[0];

    var lector = new FileReader();

    lector.addEventListener('load', mostrarImagen, false);

    lector.readAsDataURL(imagen);
}

document.getElementById('archivo')
    .addEventListener('change', procesarArchivo, false)



    window.addEventListener('load', () =>{
        const contenedor_loader= document.querySelector('.contenedor_loader')
        contenedor_loader.style.opacity= 0
        contenedor_loader.style.visibility= 'hidden'
        })