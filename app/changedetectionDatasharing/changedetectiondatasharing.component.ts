import { Component, signal } from "@angular/core";

import { Messages1Component } from "../messages1/messages1.component";
import { MessagesList1Component } from "../messages1/messages-list1/messages-list1.component";

@Component({
    selector:'app-changedetinput',
    imports: [Messages1Component, MessagesList1Component],
    templateUrl:'changedetectiondatasharing.component.html',
    styleUrl:'changedetectiondatasharing.component.css',
    standalone:true
})

export class ChangeDetectionDatashComponent {

  get appOutput() {
    console.log('[App Component] binding re-evaluated.');
    return;
  }

    
}