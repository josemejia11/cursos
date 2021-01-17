import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x,y}) => ({x,y})),
    // takeWhile( ({ y }) => y <= 200 )
    takeWhile( ({ y }) => y <= 200, true )// true es para recibir el valor que rompe la codicion

).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});