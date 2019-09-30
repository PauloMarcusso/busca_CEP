//seletores
const cepInput = document.querySelector('#CEP');
const ruaInput = document.querySelector('#rua');
const bairroInput = document.querySelector('#bairro');
const ufInput = document.querySelector('#UF');

//funções
const buscaCep = (evt) =>{
    const cepDigitado = evt.target.value;

    if(cepDigitado.length != 8){
        return
    }

    fetch(`https://viacep.com.br/ws/${cepDigitado}/json`)
    .then((resposta)=>{return resposta.json()})
    .then((dados)=>{

        cepInput.value = dados.cep;
        ruaInput.value = dados.logradouro;
        bairroInput.value = dados.bairro;
        ufInput.value = dados.uf;

    })


}

//Eventos
cepInput.oninput = buscaCep;

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then((resposta) => { console.log(resposta.json())  })
// .then(dados) => { console.log(dados)  })
