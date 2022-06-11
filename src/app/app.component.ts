import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Gustavo';

  userDate = {
    email: 'gustavo@981',
    prof: 'admin',
  }

  title = 'Angular';
}
