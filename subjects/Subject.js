import { Subject  } from "rxjs";

const subject$ = new Subject();

subject$.subscribe(val => console.log('first sub', val));

subject$.next('1');

subject$.subscribe(val => console.log('second sub', val));

subject$.next('2');
subject$.next('3');
