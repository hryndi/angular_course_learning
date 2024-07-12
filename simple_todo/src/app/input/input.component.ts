import { Component, Input } from '@angular/core';
import { ItemsServiceComponent } from '../items-service/items-service.component';
import { FormsModule } from '@angular/forms';
import { TTodos, TEditObj } from '../../Todos';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  // @Input() itemsList!: TTodos[];
  inputValue: string = '';
  isEditMode: TEditObj | null = null;
  constructor(private itemsList: ItemsServiceComponent) {}

  ngOnInit(): void {
    this.itemsList.objectToEdit$.subscribe((value: TEditObj | null) => {
      this.isEditMode = value;
      this.inputValue = value ? value.value : '';
    });
  }

  addNewItemHandler() {
    // this.itemsList?.push({ value: this.newTodo, id: this.getRandomId() });
    const currentList = this.itemsList.listItems;
    const updatedList = [
      ...currentList,
      { value: this.inputValue, id: this.getRandomId() },
    ];
    this.itemsList.updateListItems(updatedList);
    console.log(this.itemsList);
    console.log(this.itemsList.listItems);
  }

  getRandomId(): string {
    return Math.floor(Math.random() * 1000000).toString();
  }

  editItemHandler(): void {
    const selectedObj = this.itemsList.objectToEdit;
    console.log(this.inputValue);
    this.itemsList.updateListItem(this.inputValue);
    this.itemsList.resetObjectToEdit();
    this.inputValue = '';
    console.log(this.isEditMode);
  }
}
