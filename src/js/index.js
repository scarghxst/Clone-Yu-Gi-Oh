
const btnAvancar = document.getElementById('btn-avançar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  const cartaoAtualElement = cartoes[cartaoAtual];
  cartaoAtualElement.classList.remove("selecionado");

  cartaoAtual++;
  const cartaoProximoElement = cartoes[cartaoAtual];
  cartaoProximoElement.classList.add("selecionado");
});

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  const cartaoAtualElement = cartoes[cartaoAtual];
  cartaoAtualElement.classList.remove("selecionado");

  cartaoAtual--;
  const cartaoAnteriorElement = cartoes[cartaoAtual];
  cartaoAnteriorElement.classList.add("selecionado");
});