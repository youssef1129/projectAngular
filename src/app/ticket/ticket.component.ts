import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPrinterService } from 'ngx-printer';
import { Iarticle } from '../interfaces/Iarticle';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  constructor(
    private localsotage: LocalstorageService,
    private router: Router,
    private printerService: NgxPrinterService
  ) {}
  articles: Array<Iarticle> = [];
  ngOnInit(): void {
    this.localsotage.articles.length > 0
      ? (this.articles = this.localsotage.articles)
      : this.router.navigateByUrl('');

    let arr: Iarticle[] = []  
    this.articles.forEach((a)=>{
      for(let i = 0;i<Number(a.qte);i++){
        arr.push(a)
      }
    })      

    this.articles=arr


    var beforePrint = function() {
        console.log('Functionality to run before printing.');
    };
    var afterPrint = function() {
        
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }

    window.onbeforeprint = ()=>{
      console.log('before printed1');

      // debugger
      
    };;
    window.onafterprint = ()=>{
      this.articles=[]
      // debugger
    };
  }

  counter(i: number) {
    return new Array(i);
  }
  print() {
    // debugger;
    // window.print()
    this.printerService.printDiv('myId');
  }
}
