(() => {
    const sumar = (a: number, b:number):number => a+b;

    const nombre = ():string => 'Hola jose';

    const obtenersalario = ():Promise<string> => {
        return new Promise((res, err) => {
            res('jose');
        });

    }
    
    obtenersalario().then(a => console.log(a.toUpperCase()))

})();


