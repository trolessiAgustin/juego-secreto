let numeroSecreto = 0;
let intentos = 0;
listaNumerosSorteados = [];
let numeroMaximo = 10;


let parrafo =document.querySelector("p");
parrafo.innerHTML = "Ingrese un numero del 1 al 10"

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    

    if(numeroDeUsuario === numeroSecreto){
        asignarElementoTexto(`p`,`Acertaste el numero en ${intentos} ${(intentos == 1) ? `vez` : `veces` }`)
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
         } else {

         if(numeroDeUsuario>numeroSecreto){
            asignarElementoTexto(`p`,`El numero secreto es menor`)
         } else {
            asignarElementoTexto(`p`,`El numero secreto es mayor`)
         }
         intentos++;
         limpiarCaja();
         }
 }

    function limpiarCaja(){
        document.querySelector(`#valorUsuario`).value = "";
        //Se puede hacer tambien de esta manera pero es impractica
        /*let valorCaja = document.querySelector(`#valorUsuario`)
        valorCaja.value = ""; */
    }

function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarElementoTexto('p', 'Ya se sortearon todos los numeros');
        document.querySelector(`#intentar`).setAttribute(`disabled`, `true`);
    }  else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
    }   else   {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
    
    //Si ya sorteamos todos los numeros
    //Si el numero generado esta incluido en la Lista
    
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar de inicio
    //Generar numero Aletorio
    //Reiniciar numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
    
}

function condicionesIniciales(){
    asignarElementoTexto(`h1`, "Juego Secreto");
    asignarElementoTexto(`p`, `Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();








