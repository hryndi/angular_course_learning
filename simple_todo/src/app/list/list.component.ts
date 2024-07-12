import { Component, Input } from '@angular/core';
import { TTodos, TEditObj } from '../../Todos';
import { NgFor } from '@angular/common';
import { ItemsServiceComponent } from '../items-service/items-service.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  items: TTodos[] = [];
  objectToEdit: TEditObj | null = this.itemsList.objectToEdit;

  constructor(private itemsList: ItemsServiceComponent) {}

  ngOnInit(): void {
    this.itemsList.listItems$.subscribe((items: TTodos[]) => {
      this.items = items;
    });
  }

  itemDeleteHandler(id: string): void {
    this.itemsList.deleteListItem(id);
  }

  editItemTrigger(id: string): void {
    this.itemsList.updateObjectToEdit(id);
    console.log(this.itemsList.objectToEdit);
  }
}
