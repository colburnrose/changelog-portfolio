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
      this.portfolio = {
        firstName: 'Colburn',
        lastName: 'Sanders',
        subheading: 'Full Stack Developer / Content Creator / Gamer',
        socialMedia: [],
        description: 'Hi, I\'m Colburn Sanders, and I am a Full Stack Developer and Content Creator in the St. Louis area',
        updates: [],
        changeLog: [],
        // tslint:disable-next-line:max-line-length
        speakerBio: 'Colburn Sanders currently works as a developer of an agile development team to develop web applications using .NET development stack. Takes part in all areas of the software development cycle from design to development to testing. Troubleshoots and addresses problems across multiple platforms related to systems integration, compatibility, and quality insurance. I often go to tech conferences and meetups to learn new things and meet new people. I do work on the side to keep my skills fresh with the latest methods. I\'m most happy when solving problems and getting things done.',
      };
    }
}
