import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

Success( message:string){
  alertify.success(message);
}

Warning(message:string){
  alertify.warning(message);

}
Failure(message:string){
  alertify.error(message);

}
}
