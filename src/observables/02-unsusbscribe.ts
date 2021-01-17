import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:',value),
    error: error => console.warn('error[obs]:',error),
    complete: () => console.info('completado')
};


const intervalo$ = new Observable<number>(subscriber => {
    let num = 0;
    const interval = setInterval(() => {
        subscriber.next(num+=1);
        console.log(num);
    },1000);
    setTimeout(() => {
        subscriber.complete();
    }, 2500);
    return() => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs.add(subs2).add(subs3);

setTimeout(() => {
    subs.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('finalizado timeout')
}, 6000);