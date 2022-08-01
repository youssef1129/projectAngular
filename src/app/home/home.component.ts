import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isHidden = 'translateX(-100%)';
  constructor(private route: Router) { }
  data: any;
  ngOnInit(): void {
    !sessionStorage.getItem('token')&&this.route.navigateByUrl('login')
    
  }

  togglemenu(){
    this.isHidden==='translateX(-100%)'
    ?
    this.isHidden='translateX(0)'
    :
    this.isHidden='translateX(-100%)'  
        
  }

}
