const estadosFaturamento = [
  { estado: 'SP', faturamento: 67836.43 },
  { estado: 'RJ', faturamento: 36678.66 },
  { estado: 'MG', faturamento: 29229.88 },
  { estado: 'ES', faturamento: 27165.48 },
  { estado: 'Outros', faturamento: 19849.53 },
];

let faturamentoTotal = 0;

for (let i = 0; i < estadosFaturamento.length; i++) {
  faturamentoTotal = estadosFaturamento[i].faturamento + faturamentoTotal;
}
for (let i = 0; i < estadosFaturamento.length; i++) {
  let porcentagem = estadosFaturamento[i].faturamento * 100 / faturamentoTotal;
  console.log('\n O Estado ', estadosFaturamento[i].estado, ' Contribuiu com ', porcentagem.toFixed(2), '% do faturamento total.');
}