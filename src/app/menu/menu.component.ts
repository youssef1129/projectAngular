import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  isHidden = 'translateX(-100%)';
  goHome() {
    this.isHidden = 'translateX(0)';
    this.route.navigateByUrl('');
    this.togglemenu()
  }
  goImport() {
    this.isHidden = 'translateX(0)';
    this.route.navigateByUrl('import');
    this.togglemenu()
  }

  logout() {
    sessionStorage.removeItem('token');
    this.route.navigateByUrl('login');
  }
  theme = 'light';
  changetheme() {
    document.getElementsByTagName('body')[0].classList.remove(this.theme);
    this.theme === 'light' ? (this.theme = 'dark') : (this.theme = 'light');

    document.getElementsByTagName('body')[0].classList.add(this.theme);
    this.togglemenu()
  }

  togglemenu(){
    this.isHidden==='translateX(-100%)'
    ?
    this.isHidden='translateX(0)'
    :
    this.isHidden='translateX(-100%)'  
        
  }
}
