function calcularMDC(a, b) {
    let R;
    while ((a % b) > 0)  {
        R = a % b;
        a = b;
        b = R;
    }
    return b;
}

function encontrarMaiorDivisor(nums) {
    if (nums.length === 0) {
        return null;
    }

    let resultadoMDC = nums[0];

    for (let i = 1; i < nums.length; i++) {
        resultadoMDC = calcularMDC(resultadoMDC, nums[i]);

        // Se o MDC se tornar 1, não é possível encontrar um divisor comum maior.
        if (resultadoMDC === 1) {
            break;
        }
    }

    return resultadoMDC;
}

// Exemplo de uso
const nums = [12, 18, 24, 36];
const maiorDivisor = encontrarMaiorDivisor(nums);

console.log(`O maior inteiro positivo que divide todos os elementos do array é: ${maiorDivisor}`);
