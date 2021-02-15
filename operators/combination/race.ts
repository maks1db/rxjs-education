import { race, interval } from 'rxjs';
import { mapTo } from 'rxjs/operators'

const race$ = race(
    interval(1000).pipe(mapTo('one')),
    interval(2000).pipe(mapTo('two')),
    interval(3000).pipe(mapTo('three'))
)

race$.subscribe(console.log)