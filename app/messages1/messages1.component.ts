import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages1',
  imports: [FormsModule],
  templateUrl: './messages1.component.html',
  styleUrl: './messages1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Messages1Component {
  private msgService = inject(MessagesService)
  enteredText = '';

  get msgComp() {
    console.log('[Message1 Component] binding re-evaluated.');
    return;
  }

  onSubmit() {
    this.msgService.addMsg(this.enteredText);
    this.enteredText = '';
  }
}
