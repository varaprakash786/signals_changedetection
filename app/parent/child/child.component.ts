import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  data = input<{ name: string; age: number }>();

  get childComp() {
    console.log('[Child Component] being re-evaluated');
    return;
  }
}
