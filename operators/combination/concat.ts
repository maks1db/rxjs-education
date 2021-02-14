import { concat, of, from } from "rxjs";
import { delay } from "rxjs/operators";

const message$ = (val: string) => of(val).pipe(delay(1000));

concat(
    message$("3"),
    message$("2"),
    message$("1"),
    message$("hello")
).subscribe(console.log);
