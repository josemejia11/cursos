import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numero = [1,2,3,4,5];

// const totalAcc = (acc, cur) => {
//     return acc + cur;
// }

const totalAcc = (acc, cur) => acc + cur;

//reduce
from(numero).pipe(
    reduce(totalAcc,0)
)
.subscribe(console.log);

//scan
from(numero).pipe(
    scan(totalAcc,0)
)
.subscribe(console.log);

//redux
interface Usuario{
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan<Usuario>( (acc,cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);