import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketOneService extends Socket{

  constructor() {
    super({ url: 'http://localhost:3000', options: {} });
  }


}
