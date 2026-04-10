import { Component, computed, effect, signal, untracked } from "@angular/core";

@Component({
    selector:'app-untrackedSignal',
    imports:[],
    template:`
    <h1>Angular <span>Signals</span></h1>

<div class="subDiv1">
  <p>Updated Counter1: {{counter1() }}</p>
  <button (click)="updateCounter1()">Updated Counter1</button>
 
</div>

<div class="subDiv2">
<p>Updated Counter2: {{counter2() }}</p>
  <button (click)="updateCounter2()">Updated Counter1</button>
 
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

export class UntrackedSignalComponent {
    constructor(){
     
    }

    counter1 = signal(20);
    counter2 = signal(20);

    counterUpdate = effect(() => {
      console.log(`Counter 1: ${this.counter1()} \n Counter 2: ${untracked(() => 
        this.counter2()
      )}`
    )
    })

    updateCounter1(){
      this.counter1.update(() => this.counter1() + 1)
    }

    updateCounter2(){
      this.counter2.update(() => this.counter2() + 1)
    }

}