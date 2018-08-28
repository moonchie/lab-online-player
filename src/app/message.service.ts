import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  // add a message
  add(message: string) {
    this.messages.push(message);
  }

  // clear the message
  clear() {
    this.messages = [];
  }
  constructor() { }
}
