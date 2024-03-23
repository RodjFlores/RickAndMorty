import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css',
  imports: [CommonModule,FormsModule],
  standalone:true
})
export class ConnectComponent {
  public connectionHistory:Object[] = []
  public message:string = 'Hello!'

  constructor(private ws:WebsocketService ){
    this.ws.webSocket$.subscribe({
      error: (e) => console.error(e),
      next: (res) => {
        const msgObject = {...res, from: "THE ECHO OF THE VOID"}
        this.connectionHistory.push(msgObject);
      },
      complete: () => this.connectionHistory.push({"ECHO_CHAMBER":"CLOSED!"}),
    })
  }

  /**
   * Sends a message to the websocket
   * and pushes an item to the history array
   */
  sendMessage() {
    const msgObject = {
      from: 'me',
      message:this.message
    }
    this.connectionHistory.push(msgObject)
    this.ws.sendmessage(msgObject);
  }

  /**
   * Closes the websocket
   */
  complete() {
    this.ws.closeConnection();
  }
}
