import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/models/portfolio.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public portfolio: Portfolio;
  public logOpen = true;

  public ngOnInit(): void {
      this.portfolio = {
        firstName: 'Colburn',
        lastName: 'Sanders',
        subheading: 'Full Stack .NET Developer',
        socialMedia: [
          {
            icon: 'fa fa-linkedin fa-2x',
            link: 'https://www.linkedin.com/in/colburnrose/',
            color: '#0077B5'
          },
          {
            icon: 'fa fa-github fa-2x',
            link: 'https://github.com/colburnrose',
            color: '#6E5494'
          },
          {
            icon: 'fa fa-twitter fa-2x',
            link: 'https://twitter.com/colburnomareo',
            color: '#00C6FF'
          }
        ],
        description: 'Hi, I\'m Colburn Sanders, and I am a Full Stack Developer and Content Creator in the St. Louis area',
        updates: [
          {
            description: '.NET Devup Conference',
            links: 'https://devupconf.org/',
          }
        ],
        changeLog: [
          {
            color: '#1OA2F45',
            month: 'January',
            year: 2018,
            // tslint:disable-next-line:max-line-length
            highlight: 'Full Stack Software Developer @EagleTech_Group.',
            details: 'Aquired a remote ASP.NET project as maintenance while working the multip-sports applicaions',
          },
          {
            color: '#1OA2F45',
            month: 'August',
            year: 2017,
            highlight: 'New Role as Full Stack Software Developer @EagleTech_Group',
            details: 'Building a full stack .NET MVC 5 web-app for a multi-sports application',
          },
          {
            color: '#1OA2F45',
            month: 'April - July',
            year: 2017,
            highlight: 'Completed Java Full Stack Bootcamp at Claim Academy STL',
            details: '',
          },
        ],
        // tslint:disable-next-line:max-line-length
        speakerBio: 'Colburn Sanders currently works as a developer of an agile development team to develop web applications using .NET development stack. Takes part in all areas of the software development cycle from design to development to testing. Troubleshoots and addresses problems across multiple platforms related to systems integration, compatibility, and quality insurance. I often go to tech conferences and meetups to learn new things and meet new people. I do work on the side to keep my skills fresh with the latest methods. I\'m most happy when solving problems and getting things done.',
      };
    }
    // method to expand change log
    public toggleOpen(toggle: string): void {
      switch (toggle) {
        case 'logOpen':
        this.logOpen = !this.logOpen;
      }
    }
}
