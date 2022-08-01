import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  theme='light'
  changetheme(){
    document.getElementsByTagName('body')[0].classList.remove(this.theme)
    this.theme==='light'? this.theme='dark':this.theme='light'

    document.getElementsByTagName('body')[0].classList.add(this.theme)
  }

}
