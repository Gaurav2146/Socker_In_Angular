import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { Socket, SocketIoModule} from 'ngx-socket-io';
import { SocketOneService } from './socket-one.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,SocketIoModule],
  providers: [SocketOneService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    message: string = '';
    messages: string[] = [];

    constructor(private socket: SocketOneService) {
        this.socket.on('chat message', (msg: string) => {
            this.messages.push(msg);
        });
    }

    sendMessage() {
        this.socket.emit('chat message', this.message);
        this.message = '';
    }
}
