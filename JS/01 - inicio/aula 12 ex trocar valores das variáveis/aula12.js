let varA ='A'; // B
let varB ='B'; // C
let varC ='C'; // A
let varExtra = '';
[varA, varB, varC] = [varB, varC, varA];

// varExtra = varC;
// varC = varA;
// varA = varB;
// varB = varExtra;

console.log(varA, varB, varC);