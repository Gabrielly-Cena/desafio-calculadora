let saldoRankeadas = calcSaldoRankeadas(10,15)
let nivelHeroi = "Indeterminado"

function calcSaldoRankeadas (qntdVitoria, qntdDerrota){
   let calcSaldo = qntdVitoria - qntdDerrota
    return calcSaldo;
}

switch(true){
    case (saldoRankeadas <= 10):
        nivelHeroi = "Ferro"
    break;

    case (saldoRankeadas >= 11 && saldoRankeadas <= 20):
        nivelHeroi = "Bronze"
    break;

    case (saldoRankeadas >= 21 && saldoRankeadas <= 50):
        nivelHeroi = "Prata"
    break;

    case (saldoRankeadas >= 51 && saldoRankeadas <= 80):
        nivelHeroi = "Ouro"
    break;

    case (saldoRankeadas >= 81 && saldoRankeadas <= 90):
        nivelHeroi = "Diamante"
    break;

    case (saldoRankeadas >= 91 && saldoRankeadas <= 100):
        nivelHeroi = "Lendário"
    break;

    case (saldoRankeadas >= 101):
        nivelHeroi = "Imortal"
    break;

}


console.log(`O Herói tem o saldo de ${saldoRankeadas} e está no nível de ${nivelHeroi}`)
