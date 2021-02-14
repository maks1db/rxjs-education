import { AsyncSubject } from "rxjs";

const subject$ = new AsyncSubject();

subject$.subscribe(console.log);

subject$.next(1);
subject$.subscribe(console.log);

subject$.next(6);
subject$.next(7);
subject$.next(8);

setTimeout(() => {
    subject$.complete();
}, 2000);
