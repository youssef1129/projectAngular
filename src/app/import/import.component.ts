import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iarticle } from '../interfaces/Iarticle';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
})
export class ImportComponent implements OnInit {
  srcResult: any;
  articles: Array<Iarticle>=[]

  constructor(private router: Router,private localstorage: LocalstorageService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.srcResult = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.srcResult, 'UTF-8');
    fileReader.onload = () => {
      this.srcResult= fileReader.result;
      this.articles=JSON.parse(this.srcResult);
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }


  print(){
    this.localstorage.setData(this.articles)
    this.router.navigateByUrl('tickets')
  }
}
