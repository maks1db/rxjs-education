const { AsyncSubject } = require('rxjs')
const { map } = require('rxjs/operators')

const subject$ = new AsyncSubject().pipe(map( x => x * 2));


subject$.subscribe(console.log);

subject$.next(1);
subject$.subscribe(console.log);

subject$.next(6)
subject$.next(7)
subject$.next(8)

setTimeout(() => {
    subject$.complete();
}, 2000);
