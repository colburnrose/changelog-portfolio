import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/models/portfolio.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public portfolio: Portfolio;

  public ngOnInit(): void {

    }
}
