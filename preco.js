var hotel_prices = {};
hotel_prices["barcadalva"] = 12;
hotel_prices["geres"] = 9;
hotel_prices["LimaEscape"] = 8;
hotel_prices["odelouca"] = 10;
hotel_prices["oleiros"] = 7;
hotel_prices["serradafreita"] = 9;


var hotel_link = window.location.pathname.split("/");
var len = hotel_link.length;
var hotel = hotel_link[len - 1].split(".")[0];

function getHotelPrice() {
    console.log(hotel_prices[hotel]);
    return hotel_prices[hotel];
}

function getCriancas() {
    var criancas = $("#criancas").val();
    var val = parseInt(criancas) * 5;
    return val;
}


function getEstadia() {
    var estadia = $("#estadia").val();
    var ret = 0;
    if (estadia == "2")
        ret = 5;
    return ret;
}


function getNights() {
    var noites = $("#noites").val();
    var val = parseInt(noites);
    return val;
}


function getAdults() {
    var adults = $("#adults").val();
    var val = parseInt(adults) * 9;
    return val;
}


function getTotal() {
    var HotelPrice = (getHotelPrice() + getCriancas() + getEstadia() + getAdults()) * getNights();
    console.log(HotelPrice)
    var usersec = document.getElementById('valor');
    usersec.innerHTML = 'Valor: '+ HotelPrice;
    sessionStorage.setItem("preco1",HotelPrice);

    alert('O preço inicial da sua estadia é: ' + HotelPrice + '€')
    // localstorage.getItem('valor').innerHTML = HotelPrice;

    let lista = {
        HotelPrice
    }
    console.log(lista)

    if (localStorage.getItem('pay') == null) {
        let lst = [];
        lst.push(lista);
        localStorage.setItem('pay', JSON.stringify(lst));
    } else {
        let lst = JSON.parse(localStorage.getItem('pay'));
        lst.push(lista);
        localStorage.setItem('pay', JSON.stringify(lst));
    }
}