import { Component, OnInit } from '@angular/core';
import { ApicallService } from './services/apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newproject';
  constructor(private dataofapi: ApicallService) {}

  ngOnInit(): void {
    this.dataofapi.getData().subscribe((data:any) => {
      console.log(data);
    }) ;
  }
}
