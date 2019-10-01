import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
	private url = 'http://localhost:3000/chat';
	private socket = io(this.url);
	
  constructor() { }

  getmessage(next)
  {
  	this.socket.on('reply',data=>next(data));
  }

  sendmessage(message)
  {
  	this.socket.emit('sendmessage',message);
  }


  joinchannel(joinrequest)
  {
  	this.socket.emit('joinchannel',joinrequest);
  }

   leavechannel(leaverequest)
  {
  	this.socket.emit('leavechannel',leaverequest);
  }

  uploadimage(image)
  {
  	this.socket.emit('uploadimage',image);
  }

  getchannelnotice(next)
  {
  	this.socket.on('channelnotice',data=>next(data));
  }

   getimage(next)
  {
  	this.socket.on('image',data=>next(data));
  }

}
