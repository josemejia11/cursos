(() => {

    const retirarDinero = (montoRetirar: number): Promise <number> => {

        let dinerActual = 1000;

        return new Promise((res, err) => {
            if(montoRetirar > dinerActual){
                err('No hay suficientes fondos');
            } else {
                dinerActual -= montoRetirar;
                res(dinerActual);
            }
        });

    }


    retirarDinero(100)
    .then(montoActual => console.log(`me queda ${montoActual}`))
    .catch(console.warn)
})();


