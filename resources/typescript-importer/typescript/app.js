"use strict";
(() => {
    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    let edad = 23;
    var PERSONAJE = {
        nombre,
        edad
    };
    console.log(`El personaje ${PERSONAJE.nombre} tiene ${PERSONAJE.edad}`);
    var batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    const habilidades = (personaje) => {
        console.log(`Las habilidades de ${personaje.nombre} son ${personaje.artesMarciales}`);
    };
    habilidades(batman);
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = (a, b) => {
        return (a + b) * 2;
    };
    console.log(resultadoDoble);
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger(nombre, poder, arma = 'arco') {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
            console.log(mensaje);
        }
        else {
            mensaje = nombre + ' tiene un ' + poder;
            console.log(mensaje);
        }
    }
    ;
    console.log(getAvenger('hawkeye', 'ninguno'));
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura, area = base * altura) {
            this.base = base;
            this.altura = altura;
            this.area = area;
        }
    }
    function calcular(base, altura) {
        return base * altura;
    }
    console.log(calcular(5, 2));
})();
