// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5
let adult = document.getElementById("adults");
let children = document.getElementById("children");
let time = document.getElementById("time");
let button = document.getElementById("button");

adult.addEventListener('focus', function () {
    this.classList.add('validate');
})
children.addEventListener("focus", function () {
    this.classList.add('validate');
})
time.addEventListener("focus", function () {
    this.classList.add('validate');
})

button.addEventListener('click', function () {
    if (adult.validity.valid && children.validity.valid && time.validity.valid) {
    } else {
        document.getElementsByTagName("div")[1].children[0].textContent = 'Preencha os espaços em branco!';
    }
})
button.addEventListener("click", function () {
    if (adult.value != '' && time.value != '' && children.value != '') {

        let people = parseInt(adult.value) + parseInt(children.value) / 2;
        let meat = (parseInt(time.value) > 6 ? 650 * people : 400 * people) / 1000;
        let beer = (parseInt(time.value) > 6 ? 2000 * parseInt(adult.value) : 1200 * parseInt(adult.value)) / 400;
        let soda = Math.ceil((parseInt(time.value) > 6 ? 1500 * people : 1000 * people) / 1000);

        document.getElementsByTagName("div")[1].children[0].innerHTML = `<h3 id="meat">${meat}Kg de Carne</h3>
                                                                         <h3 id="beer">${beer} latas de Cerveja de 400ml </h3>
                                                                         <h3 id="soda">${soda} garrafas de Bebidas de 2L</h3>`;

    } else {

        adult.classList.add('validate');
        children.classList.add('validate');
        time.classList.add('validate');

    }
});