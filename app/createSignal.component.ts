import { Component, signal } from "@angular/core";

@Component({
    selector:'app-createSignal',
    imports:[],
    template:`
    <h1>Angular <span>Signals</span></h1>
<div>
  <button (click)="incrCounter()">Increment Counter</button>
  <p>{{ count() }}</p>
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

export class CreateSignalComponent {
    constructor(){
    }
    count = signal<number>(0)
incrCounter() {
    this.count.set(this.count() + 1);
    console.log('Signal Value: ', this.count());
  }
    
}