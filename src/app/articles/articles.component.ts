import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Iarticle } from '../interfaces/Iarticle';
import { LocalstorageService } from '../services/localstorage.service';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  constructor(private route: Router,private socket: WebsocketService,private snackBar: MatSnackBar,private localstorage: LocalstorageService) { }

  
  articles:Array<Iarticle> = []
  ngOnInit(): void {
    this.socket.getData().subscribe((res: any)=>{
      this.articles = [...this.articles,...res.data as Array<Iarticle>]
      this.snackBar.open('New article','Close',{duration:2000,verticalPosition:'top'})
    });
  }

  printAll(){
    this.localstorage.articles=this.articles;
    this.route.navigateByUrl('tickets');
  }

  print(article:Iarticle){
    this.localstorage.articles=[article];
    this.route.navigateByUrl('tickets');
  }

}
