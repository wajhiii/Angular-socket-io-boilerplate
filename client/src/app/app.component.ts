import { Component } from '@angular/core';
import { ChatService } from './chat.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  newMessage: string | undefined;
  messageList: string[] = [];

  constructor(private chatService: ChatService){

  }

  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
