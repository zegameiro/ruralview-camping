var atividades_prices = {};
atividades_prices["0"] = 0;
atividades_prices["1"] = 20;
atividades_prices["2"] = 25;
atividades_prices["3"] = 6;
atividades_prices["4"] = 12;
atividades_prices["5"] = 0;
atividades_prices["6"] = 14;
atividades_prices["7"] = 17;
atividades_prices["8"] = 20;
atividades_prices["9"] = 0;

function getAtividades() {
    var at = parseInt($("#atividades").val());
    console.log(atividades_prices[at]);
    return atividades_prices[at];
}


function getGrupo(){
    var grupo = $("#grupo").val();
    var val = parseInt(grupo);
    console.log(val);
    return val;
}

function getAluguer(){
    var aluguer = $("#aluguer").val();
    var val = parseInt(aluguer) * 7;
    return val;
}

function getTotal2() {
    var SecondPrice = getAtividades() * getGrupo() + getAluguer();
    var usersec = document.getElementById('valor2');
    usersec.innerHTML = 'Valor: '+ SecondPrice;
    sessionStorage.setItem("preco2",SecondPrice);

    alert('O preço é de: ' + SecondPrice + '€')
    let lista2 = {
        SecondPrice
    }
    console.log(lista2)

    if (localStorage.getItem('pay2') == null) {
        let lst2 = [];
        lst2.push(lista2);
        localStorage.setItem('pay2', JSON.stringify(lst2));
    } else {
        let lst2 = JSON.parse(localStorage.getItem('pay2'));
        lst2.push(lista2);
        localStorage.setItem('pay2', JSON.stringify(lst2));
    }
}

