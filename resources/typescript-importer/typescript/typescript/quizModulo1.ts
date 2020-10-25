(()=>{

    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    let edad = 23;
  
    var PERSONAJE = {
      nombre,
      edad
    };
    console.log(`El personaje ${PERSONAJE.nombre} tiene ${PERSONAJE.edad}`);

    
    // Cree una interfaz que sirva para validar el siguiente objeto
    interface Personaje {
        nombre: string;
        artesMarciales: string[];
    }
    var batman: Personaje = {
      nombre: 'Bruno Díaz',
      artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    }
    const habilidades = (personaje : Personaje) => {
        console.log(`Las habilidades de ${personaje.nombre} son ${personaje.artesMarciales}`);
    }

    habilidades(batman);
  
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = ( a:number, b:number) => {
        return (a + b) * 2;
    }
    console.log(resultadoDoble);
  
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger( nombre: string, poder?: string, arma:string = 'arco' ){
      let mensaje;
      if( poder ){
        mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        console.log(mensaje);

      }else{
        mensaje = nombre + ' tiene un ' + poder
        console.log(mensaje);
      }
      
    };
    console.log(getAvenger('hawkeye','ninguno'));

    
  
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(
            public base:number,
            public altura:number,
            public area:number = base*altura
        ){}
    }
    function calcular(base:number,altura:number){
        return  base*altura;
    }
    console.log(calcular(5,2));
  
  
  })();

