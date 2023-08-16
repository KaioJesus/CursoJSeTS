// Função recursiva -> funções que se chamam de volta dentro dela mesmo

function recursiva(max) {
    console.log(max);
    if(max >= 500) return;
    max++
    recursiva(max);
}

recursiva(0);