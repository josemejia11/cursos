import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente[next]:',value),
    error: error => console.warn('error[obs]:',error),
    complete: () => console.info('completado')
};

// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    //forzar un error
    // const a = undefined;
    // a.nombre = 'jose';

    subs.next('despues de complete');
    subs.complete();
    
});

obs$.subscribe(observer);


// obs$.subscribe( 
//     valor => console.log('next:', valor),
//     error => console.warn('error:', error),
//     () => console.info('Completado')
// );