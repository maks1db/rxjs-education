import { combineLatest, timer, of } from 'rxjs';
import { combineAll } from 'rxjs/operators'

const first$ = timer(1000, 4000);
const second$ = timer(2000, 4000);
const last$ = timer(3000, 4000);

of(first$, second$, last$).pipe(combineAll()).subscribe(console.log)
