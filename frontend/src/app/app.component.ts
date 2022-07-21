import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sessionplan.';
  public isMobile = window.innerWidth <= 768;
  ngOnInit(): void {
    window.onresize = () => this.isMobile = window.innerWidth <= 768;
  }
}
