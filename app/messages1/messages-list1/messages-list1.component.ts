import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages-list1',
  imports: [],
  templateUrl: './messages-list1.component.html',
  styleUrl: './messages-list1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesList1Component {

  private msgService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef);

  ngOnInit(){
    this.msgService.msg$.subscribe(() => {
      this.cdRef.markForCheck()
    })
    
  }

  get messages(){
    return this.msgService.allMessages;
  }

  get msgListComp() {
    console.log('[MessagesList Component] binding re-evaluated.');
    return;
  }
}
