import { Component, effect, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { interval, map, take } from "rxjs";

@Component({
    selector:'app-obsToSignal',
    imports:[],
    template:`
    <h1>Angular <span> Convert Observable to Signals</span></h1>
<div>
</div>

    `,
    styles:`
    h1 {
  font-size: 45px;
  font-weight: 300;
  text-align: center;
}
span {
  color: goldenrod;
  font-weight: 450;
}
button {
  display: block;
  padding: 10px 16px;
  border: none;
  outline: 0;
  border-radius: 5px;
  background-color: dodgerblue;
  font-size: 18px;
  margin: 20px auto;
}
div {
  align-content: center;
  border: 1px solid;
  margin: 20px auto;
  border-radius: 15px;
  background: #e8e8e8;
  width: 75vw;
}
p {
  font-size: 65px;
  margin-top: 0px;
  text-align: center;
  color: #333;
}

    `,
    standalone:true
})

export class ObservableToSignalComponent {
    constructor(){
      effect(() => {
        console.log('Random Number :', this.randomNumber())
      })
    }
   observable$ = interval(1000).pipe(
    map(() => Math.floor(Math.random() * 100).toString()),
    take(5)
   )

   randomNumber = toSignal(this.observable$, {initialValue: 'Loading...'} )
    
}