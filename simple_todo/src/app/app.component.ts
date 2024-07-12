import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { TTodos } from '../Todos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todos: TTodos[] = [];
}
