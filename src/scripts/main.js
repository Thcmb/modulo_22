AOS.init();

// Data que o evento vai acontecer 
const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
// Recuperando o time stamp dessa data
const timeStampDoEvento = dataDoEvento.getTime();

// conta o tempo que falta até o evento da data
const contaAsHoras = setInterval(function() {
    // pegando a data de agora
    const agora = new Date(); 
    const timeStampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    // pegando a distancia entre as duas datas em ms
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    // transformando os ms em dias até o evento
    const diasAteoEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    // transformando os ms em horas
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    //transformando os ms em minutos
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    // transformando em segundos
    const segundossAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    // colocando a data na html do contador
    document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundossAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);