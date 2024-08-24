const input = document.getElementById("valor");
const select = document.getElementById("moeda");
const btn = document.getElementById("btn");
const res = document.getElementById("res");

let converter = () => {
  fetch(`https://economia.awesomeapi.com.br/json/last/${select.value}`)
    .then((response) => response.json())
    .then((data) => {
      calcData(data);
    });
};

let calcData = (dados) => {
  let inputValue = parseFloat(input.value);
  let sum = 0;

  Object.keys(dados).forEach((key) => {
    const item = dados[key];
    sum = inputValue * item.bid;
  });

  inserirDadosHTML(sum);
};

let inserirDadosHTML = (calcData) => {
  let divResult = document.getElementsByClassName("container-result")[0];
  console.log(calcData);

  if (!calcData) {
    divResult.style.display = "none";
  }
  res.innerHTML = "";

  res.innerHTML = `
        <div class="container-result">
            <div>
                <h1>R$: ${calcData.toFixed(2)}</h1>
            </div>
        </div>
    `;
};

btn.addEventListener("click", converter);

// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// certeza que foi o Saraiva simme eu so percbi ontem , depois de meses
// não vai querer arrumar nada não antes ? da uma olhada aí ta perfeito , depois eu te mostro oq fizeram no meu github , algum dos meninos, salvaram la com o nome "testiculos"
// o Saraiva é o unico que faria um merda dessas , sim
// fiquei sabendo que o marco tava de olho em uma menina tirando foto dela que histori
//a é essa ? foi du nada , fogo no rabo