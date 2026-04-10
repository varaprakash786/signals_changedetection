import { Component, signal } from "@angular/core";

import { MessagesComponent } from "../messages/messages.component";
import { MessagesListComponent } from "../messages/messages-list/messages-list.component";

@Component({
    selector:'app-changedetinput',
    imports: [MessagesComponent, MessagesListComponent],
    templateUrl:'changedetectioninput.component.html',
    styleUrl:'changedetectioninput.component.css',
    standalone:true
})

export class ChangeDetectionInputComponent {
messages = signal<string[]>([]);

  addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }

  get appOutput() {
    console.log('[App Component] binding re-evaluated.');
    return;
  }

    
}