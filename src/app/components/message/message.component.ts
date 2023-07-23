import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/messages/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(public messageService: MessageService) { }
}
