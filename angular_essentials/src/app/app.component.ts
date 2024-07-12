import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
