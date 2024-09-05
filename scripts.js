document.addEventListener('DOMContentLoaded', () => {
    const celulas = Array.from(document.getElementsByClassName('celula'));
    const reiniciar = document.getElementById('reiniciar');
    let jogador = 'X';
    let jogoAtivo = true;

    const verificarVencedor = () => {
        const combinações = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let [a, b, c] of combinações) {
            if (celulas[a].textContent && celulas[a].textContent === celulas[b].textContent && celulas[a].textContent === celulas[c].textContent) {
                return celulas[a].textContent;
            }
        }
        return null;
    };

    const atualizarTabuleiro = (index) => {
        if (celulas[index].textContent === '' && jogoAtivo) {
            celulas[index].textContent = jogador;
            const vencedor = verificarVencedor();
            if (vencedor) {
                alert(`${vencedor} venceu!`);
                jogoAtivo = false;
            } else if (celulas.every(c => c.textContent !== '')) {
                alert('Empate!');
                jogoAtivo = false;
            } else {
                jogador = jogador === 'X' ? 'O' : 'X';
            }
        }
    };

    celulas.forEach((celula, index) => {
        celula.addEventListener('click', () => atualizarTabuleiro(index));
    });

    reiniciar.addEventListener('click', () => {
        celulas.forEach(c => c.textContent = '');
        jogador = 'X';
        jogoAtivo = true;
    });
});
