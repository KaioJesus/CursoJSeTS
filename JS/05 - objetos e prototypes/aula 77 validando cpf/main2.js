function validaCPF_CNPJ(valor) {
    valor = valor.replace(/\D+/g, '');
 
    const v = [...valor.slice(0, 9)].map(v => Number(v)); //pegou o cpf dividiu nos 9 primeiros dígitos e transformou em um array de números;

    const d1 = v.map((v, i) => v * (i + 1))
                .reduce((a, v) => a += v) % 11;

    if (d1 === 10) {
        v.push(0);
    } else {
        v.push(d1);
    }
    
    const d2 = v.map((v, i) => v * (i))
                .reduce((a, v) => a += v) % 11;
 
    if (d2 === 10) {
        v.push(0);
    } else {
        v.push(d2);
    }
    console.log(v);
 
    return v.join('') === valor;
    
}

console.log(validaCPF_CNPJ('16194402709'))