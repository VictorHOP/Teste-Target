fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    const faturamentoMes = data.faturamentoMes;


    let menorValor = 9999999;
    let maiorValor = 1;
    let dias = 0;
    let somaFaturamento = 0;
    for (let i = 1; i < faturamentoMes.length; i++) {

      if (faturamentoMes[i].valor < menorValor && faturamentoMes[i].valor > 1) {
        menorValor = faturamentoMes[i].valor;
      }
      if (faturamentoMes[i].valor > maiorValor) {
        maiorValor = faturamentoMes[i].valor;
      }
      if (faturamentoMes[i].valor > 1) {
        dias++;
        somaFaturamento = faturamentoMes[i].valor + somaFaturamento;
      }
    }
    let media = somaFaturamento / dias;


    let diasAcima = 0;
    for (let i = 1; i < faturamentoMes.length; i++) {
      if (faturamentoMes[i].valor > media) {
        diasAcima++;
      }
    }

    console.log('Menor faturamento do mês: R$', menorValor.toFixed(2));
    console.log('Maior faturamento do mês: R$', maiorValor.toFixed(2));
    console.log('Media mensal: R$', media.toFixed(2));
    console.log('Dias acima da média: ', diasAcima);

  })