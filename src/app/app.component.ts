import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to our app!';
  users = [
  	{id: 25,name: 'Davide',username: 'davidedelerma'},
  	{id: 26,name: 'Ciao',username: 'ciaociaone'},
  	{id: 27,name: 'pip',username: 'pippop'}
  ]
}
