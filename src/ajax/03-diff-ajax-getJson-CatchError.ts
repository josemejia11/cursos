import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/deMlay/1';

const manejoError = (res: AjaxError) => {
    console.warn('Error', res.message);
    return of({
        ok: false,
        usuarios: []
    });
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejoError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejoError)
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);


obs$.pipe(
    catchError(manejoError)
).subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('Error en subs:', err),
    complete: () => console.log('complete')
});

// obs2$.subscribe(data => console.log('data:', data));