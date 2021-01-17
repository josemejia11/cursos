import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const manejoError = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

const atrapaError = (err:AjaxError) => {
    console.warn('Error en:', err.message);
    return of([]);
}

const fetchPromess = fetch(url);

// fetchPromess
//     .then(res => res.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('error en users', err))

// fetchPromess
//     .then(manejoError)
//     .then(res => res.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('error en users', err))

ajax(url).pipe(
    pluck('response'),
    // map( res => res.response)
    catchError(atrapaError)
).subscribe(users => console.log('usuarios:',users));