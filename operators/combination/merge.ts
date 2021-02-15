import { merge, interval, of } from 'rxjs';
import { mapTo, mergeAll } from 'rxjs/operators';

const one$ = interval(1000);
const two$ = interval(1500);
const three$ = interval(2000);
const four$ = interval(2500);

merge(
    one$.pipe(mapTo('-')),
    two$.pipe(mapTo('--')),
    three$.pipe(mapTo('---')),
    four$.pipe(mapTo('----'))
).subscribe(console.log)