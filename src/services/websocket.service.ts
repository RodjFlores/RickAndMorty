import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private webSocketSubject = webSocket<Object>('wss://ws.postman-echo.com/raw');
  webSocket$ = this.webSocketSubject.asObservable();

  /**
   * Sends a new value to the websocket.
   */
  sendmessage(message: Object) {
    this.webSocketSubject.next(message);
  }

  /**
   * Closes the websocket
   */
  closeConnection() {
    this.webSocketSubject.complete();
  }
  constructor() {}
}
