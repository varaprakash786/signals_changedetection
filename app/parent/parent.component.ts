import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class ParentComponent {
  users = signal([
    { name: 'ChildA', age: 25 },
    { name: 'ChildB', age: 30 },
  ]);

  updateUser() {
    this.users.update((users) =>
      users.map((user) => ({ ...user, age: user.age + 1 }))
    );
  }

  get parentComp() {
    console.log('[Parent Component] being re-evaluated');
    return;
  }
}
