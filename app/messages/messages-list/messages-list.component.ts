import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  imports: [],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {
  messages = input<string[]>([]);

  get msgListComp() {
    console.log('[MessagesList Component] binding re-evaluated.');
    return;
  }
}
