import { Component } from "@angular/core";
import { CounterComponent } from "../counter/counter.component";
import { ParentComponent } from "../parent/parent.component";

@Component({
    selector:'app-changedet',
    imports: [CounterComponent, ParentComponent],
    templateUrl:'changedetection.component.html',
    styleUrl:'changedetection.component.css',
    standalone:true
})

export class ChangeDetectionComponent {
      get appOutput() {
    console.log('[App Component] binding re-evaluated.');
    return;
  }
    
}