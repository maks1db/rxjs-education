import { interval } from 'rxjs';
import { combineAll, map, take } from 'rxjs/operators'


const base$ = interval(1000).pipe(take(2));
const main$ = base$.pipe(map(
    val => interval(1000).pipe(
        map((inner) => console.log(`From ${val}: ${inner}`)),
        take(3)
    )
))

main$.pipe(combineAll()).subscribe(console.log)