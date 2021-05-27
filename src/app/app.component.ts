import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = '';

  setUserName(text: string) {
    this.userName = text;
    console.log(this.userName)
  }
}
