import { Injectable, signal} from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MessagesService {
    msg$ = new BehaviorSubject<string[]>([]);

 private messages: string[] = [];

 get allMessages(){
    return [...this.messages]
 }
 addMsg(msg: string){
    this.messages = [...this.messages, msg];
    this.msg$.next(this.messages)
 }
}