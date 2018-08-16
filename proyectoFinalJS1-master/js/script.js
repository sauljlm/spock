let piedra = document.getElementById('rock');
let papel = document.getElementById('paper');
let tijeras = document.getElementById('cut');
let lagarto = document.getElementById('lizard');
let spock = document.getElementById('spock');
let random = document.getElementById('pptls');

let piedraPC = document.getElementById('rockPC');
let papelPC = document.getElementById('paperPC');
let tijerasPC = document.getElementById('cutPC');
let lagartoPC = document.getElementById('lizardPC');
let spockPC = document.getElementById('spockPC');
let randomPC = document.getElementById('pptlsPC');

let btnPiedra = document.getElementById('btnpiedra');
let btnPapel = document.getElementById('btnpapel');
let btnTijeras = document.getElementById('btntijeras');
let btnLagarto = document.getElementById('btnlagarto');
let btnSpock = document.getElementById('btnspock');
let btnRestart = document.getElementById('btnrestart');
let btnenunciado = document.getElementById('btnenunciado');
let btnpregunta = document.getElementById('btnpregunta');

let usuario;
let ganador;
let pc;
let resultado = document.getElementById('resultado');
let mensaje = document.createElement('h2');

    /* funciones esconder */ 
function esconderPiedra() {
    piedra.style.display = 'none';
}
function esconderPapel() {
    papel.style.display = 'none';
}
function esconderTijeras() {
    tijeras.style.display = 'none';
}
function esconderLagarto() {
    lagarto.style.display = 'none';
}
function esconderSpock() {
    spock.style.display = 'none';
}
function escondeRandom() {
    random.style.display = 'none';
}

function esconderPiedraPC() {
    piedraPC.style.display = 'none';
}
function esconderPapelPC() {
    papelPC.style.display = 'none';
}
function esconderTijerasPC() {
    tijerasPC.style.display = 'none';
}
function esconderLagartoPC() {
    lagartoPC.style.display = 'none';
}
function esconderSpockPC() {
    spockPC.style.display = 'none';
}
function escondeRandomPC() {
    randomPC.style.display = 'none';
}
/////////////////
///botones//////
///////////////
function esconderBotones() {
    btnPiedra.style.display = 'none';
    btnPapel.style.display = 'none';
    btnTijeras.style.display = 'none';
    btnLagarto.style.display = 'none';
    btnSpock.style.display = 'none';
    btnenunciado.style.display = 'none';
}
function esconderReiniciar() {
    btnRestart.style.display = 'none';
    btnpregunta.style.display = 'none';
}
function esconderResultado() {
    resultado.style.display = 'none';
}
///////////////////////////////////////////////////////////////////////////////
    /* funciones mostrar */ 
function mostrarPiedra() {
    piedra.style.display = 'block';
}
function mostrarPapel() {
    papel.style.display = 'block';
}
function mostrarTijeras() {
    tijeras.style.display = 'block';
}
function mostrarLagarto() {
    lagarto.style.display = 'block';
}
function mostrarSpock() {
    spock.style.display = 'block';
}
function mostrarRandom() {
    random.style.display = 'block';
}
function mostrarReiniciar() {
    btnRestart.style.display = 'inline';
    btnpregunta.style.display = 'block';
}

function mostrarPiedraPC() {
    piedraPC.style.display = 'block';
}
function mostrarPapelPC() {
    papelPC.style.display = 'block';
}
function mostrarTijerasPC() {
    tijerasPC.style.display = 'block';
}
function mostrarLagartoPC() {
    lagartoPC.style.display = 'block';
}
function mostrarSpockPC() {
    spockPC.style.display = 'block';
}
function mostrarRandomPC() {
    randomPC.style.display = 'block';
}
function mostrarResultado() {
    resultado.style.display = 'inline';
}
/////////////////////////////////////////////////////////////////////
    /* funciones onclick */ 

function clickPiedra() {
    usuario = 1;
    mostrarPiedra();
    escondeRandom();
    esconderTijeras();
    esconderPapel();
    esconderLagarto();
    esconderSpock();
    
    seleccionPC();
    esconderBotones();
    mostrarReiniciar();
    elegirGanador();
}
function clickPapel() {
    usuario = 2;
    mostrarPapel();
    escondeRandom();
    esconderTijeras();
    esconderPiedra();
    esconderLagarto();
    esconderSpock();

    seleccionPC();
    esconderBotones();
    mostrarReiniciar();
    elegirGanador();
}
function clickTijeras() {
    usuario = 3;
    mostrarTijeras();
    escondeRandom();
    esconderPapel();
    esconderPiedra();
    esconderLagarto();
    esconderSpock();

    seleccionPC();
    esconderBotones();
    mostrarReiniciar();
    elegirGanador();
}
function clickLagarto() {
    usuario = 4;
    mostrarLagarto();
    escondeRandom();
    esconderPapel();
    esconderPiedra();
    esconderSpock();
    esconderTijeras();

    seleccionPC();
    esconderBotones();
    mostrarReiniciar();
    elegirGanador();
}
function clickSpock() {
    usuario = 5;
    mostrarSpock();
    escondeRandom();
    esconderPapel();
    esconderPiedra();
    esconderTijeras();
    esconderLagarto();

    seleccionPC();
    esconderBotones();
    mostrarReiniciar();
    elegirGanador();
}

function reiniciar() {
    location.reload(true);
}
     /* funciones onclick */ 
function seleccionPC() {
    pc=(Math.random() * 5) + 1;
    pc=parseInt(pc);
    switch (pc) {
        case 1:
            mostrarPiedraPC();
            escondeRandomPC();
            esconderTijerasPC();
            esconderPapelPC();
            esconderLagartoPC();
            esconderSpockPC();
            break;
        case 2:
            mostrarPapelPC();
            escondeRandomPC();
            esconderTijerasPC();
            esconderPiedraPC();
            esconderLagartoPC();
            esconderSpockPC();
            break;
        case 3:
            mostrarTijerasPC();
            escondeRandomPC();
            esconderPapelPC();
            esconderPiedraPC();
            esconderLagartoPC();
            esconderSpockPC();
            break;
        case 4:
            mostrarLagartoPC();
            escondeRandomPC();
            esconderPapelPC();
            esconderPiedraPC();
            esconderSpockPC();
            esconderTijerasPC();
            break;
        case 5:
            mostrarSpockPC();
            escondeRandomPC();
            esconderPapelPC();
            esconderPiedraPC();
            esconderTijerasPC();
            esconderLagartoPC();
            break;
        default:
            break;
    }
}

/* inicio */ 
esconderPapel();
esconderPiedra();
esconderTijeras();
esconderLagarto();
esconderSpock();

esconderPapelPC();
esconderPiedraPC();
esconderTijerasPC();
esconderLagartoPC();
esconderSpockPC();

esconderReiniciar();
esconderResultado() 

/* al hacer click al icono piedra*/
btnPiedra.onclick = clickPiedra;

/* al hacer click al icono papel*/
btnPapel.onclick = clickPapel;

/* al hacer click al icono tijeras*/
btnTijeras.onclick = clickTijeras;

/* al hacer click al icono lagarto*/
btnLagarto.onclick = clickLagarto;

/* al hacer click al icono spock*/
btnSpock.onclick = clickSpock;

btnRestart.onclick = reiniciar;

///////////////////////////////////////////////////////////////////////////
/////////////////////////////Elegir al ganador/////////////////////////////
///////////////////////////////////////////////////////////////////////////

function elegirGanador() {
    switch (pc) {
        case 1:
            if(usuario==1){
                ganador= "¡EMPATE! ";
                ganador = ganador + " piedra contra piedra";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                piedra.style.backgroundColor = "#fb1e00";
                piedraPC.style.backgroundColor = "#fb1e00";
                
            }else if(usuario==2){
                ganador= "¡GANAS! ";
                ganador = ganador + " papel envuelve piedra";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                piedraPC.style.backgroundColor = "#fb1e00";
                papel.style.backgroundColor = "#429100";
                
            }else if(usuario ==3){
                ganador="¡PIERDES! ";
                ganador = ganador + " piedra aplasta tijeras";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                
                tijeras.style.backgroundColor = "#fb1e00";
                piedraPC.style.backgroundColor = "#429100";
                
            }else if (usuario == 4){
                ganador="¡PIERDES! ";
                ganador = ganador + " piedra aplasta lagarto";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                
                lagarto.style.backgroundColor = "#fb1e00";
                piedraPC.style.backgroundColor = "#429100";
                
            }else{
                ganador= "¡GANAS! ";
                ganador = ganador + " spock vaporiza piedra";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                
                piedraPC.style.backgroundColor = "#fb1e00";
                spock.style.backgroundColor = "#429100";
                
            }
            break;
        case 2:
            if(usuario==1){
                ganador="¡PIERDES! ";
                ganador = ganador + " papel tapa piedra";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                
                piedra.style.backgroundColor = "#fb1e00";
                papelPC.style.backgroundColor = "#429100";
                
            }else if(usuario==2){
                ganador= "¡EMPATE! ";
                ganador = ganador + " papel contra papel";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
            
                
                papel.style.backgroundColor = "#fb1e00";
                papelPC.style.backgroundColor = "#fb1e00";
                
            }else if(usuario == 3){
                ganador="¡GANAS! ";
                ganador = ganador + " tijeras cortan papel";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                
                papelPC.style.backgroundColor = "#fb1e00";
                tijeras.style.backgroundColor = "#429100";
                
            }else if (usuario == 4){
                ganador= "¡GANAS! ";
                ganador = ganador + " lagarto devora papel";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                
                papelPC.style.backgroundColor = "#fb1e00";
                lagarto.style.backgroundColor = "#429100";
                
            }else{
                ganador= "¡PIERDES! ";
                ganador = ganador + " papel desautoriza spock";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
            
                spock.style.backgroundColor = "#fb1e00";
                papelPC.style.backgroundColor = "#429100";
                
            }
            break;
        case 3:
            if(usuario==1){
                ganador= "¡GANAS! ";
                ganador = ganador + " piedra aplasta tijeras";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                tijerasPC.style.backgroundColor = "#fb1e00";
                piedra.style.backgroundColor = "#429100";
                
            }else if(usuario==2){
                ganador="¡PIERDES! ";
                ganador = ganador + " tijeras cortan papel";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                papel.style.backgroundColor = "#fb1e00";
                tijerasPC.style.backgroundColor = "#429100";
                
            }else if(usuario ==3){
                ganador= "¡EMPATE! ";
                ganador = ganador + " tijeras contra tijeras";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                tijeras.style.backgroundColor = "#fb1e00";
                tijerasPC.style.backgroundColor = "#fb1e00";
                
            }else if (usuario == 4){
                ganador="¡PIERDES! ";
                ganador = ganador + " tijeras decapitan lagarto";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                lagarto.style.backgroundColor = "#fb1e00";
                tijerasPC.style.backgroundColor = "#429100";
                
            }else{
                ganador= "¡GANAS! ";
                ganador = ganador + " spock rompe tijeras";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                tijerasPC.style.backgroundColor = "#fb1e00";
                spock.style.backgroundColor = "#429100";
                
            }
            break;
        case 4:
            if(usuario==1){
                ganador= "¡GANAS! ";
                ganador = ganador + " piedra aplasta lagarto";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                lagartoPC.style.backgroundColor = "#fb1e00";
                piedra.style.backgroundColor = "#429100";
                
            }else if(usuario==2){
                ganador="¡PIERDES! ";
                ganador = ganador + " lagarto devora papel";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                papel.style.backgroundColor = "#fb1e00";
                lagartoPC.style.backgroundColor = "#429100";
                
            }else if(usuario ==3){
                ganador= "¡GANAS! ";
                ganador = ganador + " tijeras decapitan lagarto";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                lagartoPC.style.backgroundColor = "#fb1e00";
                tijeras.style.backgroundColor = "#429100";
                
            }else if (usuario == 4){
                ganador= "¡EMPATE! ";
                ganador = ganador + " lagarto contra lagarto";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                lagarto.style.backgroundColor = "#fb1e00";
                lagartoPC.style.backgroundColor = "#fb1e00";
                
            }else{
                ganador="¡PIERDES! ";
                ganador = ganador + " lagarto envenena spock";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                spock.style.backgroundColor = "#fb1e00";
                lagartoPC.style.backgroundColor = "#429100";
                
            }
            break;
        case 5:
            if(usuario==1){
                ganador="¡PIERDES! ";
                ganador = ganador + " spock vaporiza piedra";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                piedra.style.backgroundColor = "#fb1e00";
                spockPC.style.backgroundColor = "#429100";
                
            }else if(usuario==2){
                ganador= "¡GANAS! ";
                ganador = ganador + " papel desautoriza a spock";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                spockPC.style.backgroundColor = "#fb1e00";
                papel.style.backgroundColor = "#429100";
                
            }else if(usuario ==3){
                ganador="¡PIERDES! ";
                ganador = ganador + " spock rompe tijeras";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                tijeras.style.backgroundColor = "#fb1e00";
                spockPC.style.backgroundColor = "#429100";
                
            }else if (usuario == 4){
                ganador= "¡GANAS! ";
                ganador = ganador + " lagarto envenena a spock";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                spockPC.style.backgroundColor = "#fb1e00";
                lagarto.style.backgroundColor = "#429100";
                
            }else{
                ganador= "¡EMPATE! ";
                ganador = ganador + " spock contra spock";
                mensaje.innerHTML = ganador;
                resultado.appendChild(mensaje);
                spock.style.backgroundColor = "#fb1e00";
                spockPC.style.backgroundColor = "#fb1e00";
                
            }
            break;
    }
    mostrarResultado();
   
}