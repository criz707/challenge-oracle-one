let boton_encriptar =  document.getElementById('encriptar');
let boton_desencriptar = document.getElementById('desencriptar');
let datos = document.getElementById('valor');
let container =  document.getElementById('resultados');



export const dibujar = (valor,texto)=>{

    if(valor==true){
    container.innerHTML = `
    <div class="no_resultados">
        <h2>Desencriptado:</h2>
        <p>${texto}</p>
    </div>
    `
    }
    else{
        container.innerHTML= `
        <div class="no_resultados">
        <div class="imagen">
            <img src="img/Muñeco.png" />
        </div>
        <h2>Ningun mensaje fue encontrado</h2>
        <p>Ingresa el texto que <br/> desees encriptar o desencriptar.</p>
        </div>
        `
    }

}


boton_encriptar.addEventListener('click',(e)=>{
    e.preventDefault();
    let respuesta = encriptar(datos.value);
    dibujar(true,respuesta);
    console.log(respuesta);
});

boton_desencriptar.addEventListener('click',(e)=>{
    e.preventDefault();
    let respuesta = desencriptar(datos.value);
    dibujar(true,respuesta); 
    console.log(respuesta);
})



/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
letras siguen iguales
*/


let arrayprueba = 'gato';

let encriptar = (valor) => {

    let resultado  = 
    valor
    .replaceAll('e','enter')
    .replaceAll('i','imes')
    .replaceAll('a','ai')
    .replaceAll('o','ober')
    .replaceAll('u','ufat')

    return resultado;
    
};

let desencriptar = (valor) => {

    let separado = valor.split();
    console.log(separado);
    let resultado  = 
    valor
    .replaceAll('enter','e','imes','i')
    .replaceAll('imes','i')
    .replaceAll('ai','a')
    .replaceAll('ober','o')
    .replaceAll('ufat','u')
    return resultado;   
}



