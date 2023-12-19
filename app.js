const cronometro = document.getElementById('cronometro')
const botonInicioPausar = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

let [horas, minutos, segundos] = [0,0,0];

let intervaloDeTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro () {
  segundos ++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormato = asignarFormato (segundos);
  const minutosConFormato = asignarFormato (minutos);
  const horasConFormato = asignarFormato (horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;

}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}

botonInicioPausar.addEventListener('click', function (){
  if (estadoCronometro === 'pausado') {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausar.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicioPausar.classList.remove('iniciar');
    botonInicioPausar.classList.add('pausar');
    estadoCronometro = 'ejecutando';
  } else {
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausar.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausar.classList.remove('pausar');
    botonInicioPausar.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
});

botonReiniciar.addEventListener('click', function() {
  window.clearInterval(intervaloDeTiempo);

  horas = 0;
  minutos = 0;
  segundos = 0;

  cronometro.innerText = '00:00:00';

  botonInicioPausar.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonInicioPausar.classList.remove('pausar');
  botonInicioPausar.classList.add('iniciar');

  estadoCronometro = 'pausado';
})