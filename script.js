// h1 { color: red}
// .parrafito { ... }
// #pid { ...}

const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.getElementsByClassName('parrafito');
//const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const from = document.querySelector('#form');


//console.log(input.value);

console.log({
    h1,
    //p,
    //parrafito,
    //pid,
    input1,
    input2,
});

//h1.innerText = 'Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');
//1.classList.add('rojo');
//h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

//input.value = "456";

//const img = document.createElement('img');
//img.setAttribute('src', 'https://www.fr.de/bilder/2020/02/08/13529810/230695267-pale-blue-nasa-erde-voyager-carl-sagan-3hczLbr8VZ70.jpg');
//console.log(img);

//pid.innerHTML = "";
//pid.append(img);

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerHTML = "Resultado: " + sumaInputs;
}

