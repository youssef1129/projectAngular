import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Iarticle } from '../interfaces/Iarticle';
import { ArticleService } from '../services/article.service';
import { LocalstorageService } from '../services/localstorage.service';
import { WebsocketService } from '../services/websocket.service';
import { data } from '../data/data';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor(
    private route: Router,
    private socket: WebsocketService,
    private snackBar: MatSnackBar,
    private localstorage: LocalstorageService,
    private articleService: ArticleService
  ) {}

  data = data;
  isFilter = false;
  articles: Array<Iarticle> = [];
  backupArticles: Array<Iarticle> = [];
  depts: any = [];
  dept = '';
  group = '';
  ed: any;
  sd: any;
  info = { date: '', group: '', dept: '', perc: this.getPerc(), operations: 0 };
  isLoading=true
  pieChartDatasets = [
   {
     data: [0, 0],
   },
 ];
  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
   pieChartLabels = [
    'changed',
    'not Changed',
  ];


  getPerc() {
    let c = this.articles.filter((a) => a.isChanged === true).length;
    return (c * 100) / this.articles.length;
  }

  ngOnInit(): void {
    this.articleService.getData().subscribe((res) => {
      this.articles = res as Array<Iarticle>;
      this.backupArticles = res as Array<Iarticle>;
      this.pieChartDatasets = [
        {
          data: [this.getch(), this.getnch()],
        },
      ];
      this.isLoading=false;
    });

    this.socket.getData().subscribe((res: any) => {
      this.articles = [...this.articles, ...(res.data as Array<Iarticle>)];
      this.articles = [
        ...this.backupArticles,
        ...(res.data as Array<Iarticle>),
      ];
      this.snackBar.open('New article', 'Close', {
        duration: 2000,
        verticalPosition: 'top',
      });
    });
  }

  getch(){
       return this.articles.filter((a) => a.isChanged === true).length; //get number of changed articles
  }
  getnch(){
      return this.articles.filter((a) => a.isChanged !== true).length; //get number of not changed articles
  }


  filter() {
    this.group &&
      (this.articles = this.articles.filter((g) => g.group == this.group));
    this.dept &&
      (this.articles = this.articles.filter((g) => g.dept == this.dept));
    this.sd &&
      this.ed &&
      ((this.ed = new Date(this.ed).getTime()),
      (this.sd = new Date(this.sd).getTime()),
      (this.articles = this.articles.filter(
        (d) =>
          this.ed < new Date(d.time || '').getTime() &&
          new Date(d.time || '').getTime() < this.sd
      )));

    this.articles.length<=0 && (this.snackBar.open('No article found', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
        }),
        (this.articles = this.backupArticles));
      
        this.pieChartDatasets = [
          {
            data: [this.getch(), this.getnch()],
          },
        ]

    this.info = { ...this.info, group: this.group, dept: this.dept,date:`From ${new Date(this.ed).toDateString()} To ${new Date(this.sd).toDateString()}` };
  }
  changeSd(e: any) {
    this.sd = e.target.value;
  }
  changeEd(e: any) {
    this.ed = e.target.value;
  }
  reset() {
    this.articles = this.backupArticles;
    this.sd = '';
    this.ed = '';
    this.group = '';
    this.dept = '';
    this.info={date:'',dept:'',group:'',operations:this.articles.length,perc:this.getPerc()}
    this.pieChartDatasets = [
      {
        data: [this.getch(), this.getnch()],
      },
    ];
  }

  onGroupChange() {
    data.forEach((g) => {
      if (g.groupName === this.group) {
        this.depts = g.depts;
      }
    });
  }


  printAll() {
    this.localstorage.articles = this.articles;
    this.route.navigateByUrl('tickets');
  }

  print(article: Iarticle) {
    article.isChanged&&
    (this.localstorage.articles = [article],
    this.route.navigateByUrl('tickets'))
  }
}
