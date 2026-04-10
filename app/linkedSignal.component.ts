import { Component, linkedSignal, signal } from "@angular/core";

@Component({
    selector:'app-linkedSignal',
    imports:[],
    template:`
    <h1>Angular <span>Signals</span></h1>
<div>
 
  <h1>Value: {{ value() }}</h1>
  <h1>LinkedSignal: {{ linkedValue() }}</h1>
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

export class LinkedSignalComponent {
   value = signal(10);
   linkedValue = linkedSignal(() => this.value() + 10)
    
}