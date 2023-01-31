var container =  document.getElementById('resultados');



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