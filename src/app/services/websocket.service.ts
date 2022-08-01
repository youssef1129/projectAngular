import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor(private socket: Socket) {}

   onSend(msg: string) {
    this.socket.emit('onSend', msg);
  }
  
  getData(){
    return this.socket.fromEvent('getData');
  }

  close() {
    this.socket.disconnect();
  }



}
