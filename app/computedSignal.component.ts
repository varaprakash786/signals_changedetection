import { Component, computed, signal } from "@angular/core";

@Component({
    selector:'app-computedSignal',
    imports:[],
    template:`
    <h1>Angular <span>Signals</span></h1>
<div class="container">
<div class="subDiv1">
  Signal : {{count()}}
  <p>Computed Signal: {{ remainingCount() }}</p>
</div>

<div class="subDiv2">
<ul>
@for(value of arr(); track value){
<li>{{value}}</li>
}
</ul>
 <button (click)="modifyArr()">Add Value</button>
  <p>Sum Of Array: {{ sumArr() }}</p>
</div>
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

export class ComputedSignalComponent {
    constructor(){
    }
    count = signal(20);
    remainingCount = computed(() => 100 - this.count())

    arr = signal([1,2,3,4])
    sumArr = computed(() => this.arr().reduce((sum,i) => sum + i))

    modifyArr(){
      this.arr.update((val) => [...val, 10])
    }

}