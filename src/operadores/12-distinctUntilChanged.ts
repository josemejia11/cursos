import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";


const numeros$ = of(1,1,1,3,3,2,4,5,6,1,7);

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Cero'
    },
    {
        nombre: 'X'
    },
];

from(personajes).pipe(
    distinctUntilChanged( (ante, act) => ante.nombre === act.nombre )
).subscribe(console.log);