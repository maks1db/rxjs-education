const { ReplaySubject } = require('rxjs');

const subject$ = new ReplaySubject(3);

subject$.next(1);
subject$.next(2);

subject$.subscribe(val => console.log('first', val));

subject$.next(3);
subject$.next(4);



subject$.subscribe(val => console.log('second', val))