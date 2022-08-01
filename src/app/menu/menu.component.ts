import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: Router) { }
  @Input('isHidden') isHidden='translateX(-100%)';
  ngOnInit(): void {    
  }
  
  goHome(){
    this.route.navigateByUrl('')
  }
  goImport(){
    this.route.navigateByUrl('import')
  }

  logout(){
    sessionStorage.removeItem('token')
    this.route.navigateByUrl('login')
  }

}
