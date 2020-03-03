const taks = {
    "actividad 1": "Crear un objecto",
    "actividad 2": "Hacer una operacion numerica",
    "actividad 3": "Hacer una operación lógica",
    "actividad 4": "Utilizar las 3 actividades anteriores en un ejemplo"
};

const person = {
    'name': 'Daniel',
    'lastname': 'Soto',
    'age': 27,
    'location': 'Lima'
};
console.log('Actividad 1', person);

var a1 = 5;
var b1 = 10;

console.log('Actividad 2:', a1 * b1);

const c = a1 >= 5 ? 'Hola' : 'Chao';

console.log('Actividad 3:', c);

const saludo = (numb) => {
    if(numb === 5) {
        return `Hola, mi nombre es ${person.name} ${person.lastname}.Vivo en ${person.location} y tengo ${person.age} años de edad.`
    } else {
        return `adios ${b1 * numb}`;
    }
};


console.log('Actividad 4 if', saludo(5));

console.log('Actividad 4 else', saludo(11));

