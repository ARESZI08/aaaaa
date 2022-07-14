let nombres = [];
let total = 0;

function add(nombre, costo) {
    console.log(nombre, costo);
    nombres.push(nombre);
    total = total + costo;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(nombres.join(", \n"));
}