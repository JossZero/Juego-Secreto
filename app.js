let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    
    
    if(numeroDeUsuario === numeroSecreto){
      asignarTextoElemento('p',`Acertaste El Numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        //El Usuario No Acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El Numero Secreto Es Menor')
        } else {
        asignarTextoElemento ('p', 'El Numero Secreto Es Mayor');   
    }
    intentos++;
    limpiarCaja();
}
    return;
}

function limpiarCaja(){
 document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
   //Si ya sorteamos todo los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todo los numeros posibles');
    } else {

    }
    //Si el numero generado esta incluido en la lista 
    

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego Del Numero Secreto!');
    asignarTextoElemento('p',`Indica Un Numero Del 1 Al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //Limpiar caja 
    limpiarCaja();
    //Indicar Mensaje de intervalo de numeros. 
    condicionesIniciales();
    //Generar el numero aleatorio.
    //Inicializar El Numero De Intentos.
    //Deshabilitar el boton.
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}
condicionesIniciales();

