const { BehaviorSubject } = require('rxjs');

const subject$ = new BehaviorSubject('first');

subject$.subscribe(console.log);

subject$.next('second');

subject$.subscribe(val => console.log('next', val));

subject$.next('three')