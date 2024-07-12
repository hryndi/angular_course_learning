import { Component, Injectable } from '@angular/core';
import { TTodos, TEditObj } from '../../Todos';
import { BehaviorSubject, Observable } from 'rxjs';
import { arrRemove } from 'rxjs/internal/util/arrRemove';

@Injectable({ providedIn: 'root' })
export class ItemsServiceComponent {
  private _listItemsSubject = new BehaviorSubject<TTodos[]>([]);
  readonly listItems$ = this._listItemsSubject.asObservable();
  private _objectToEdit = new BehaviorSubject<TEditObj | null>(null);
  readonly objectToEdit$: Observable<TEditObj | null> =
    this._objectToEdit.asObservable();
  get listItems(): TTodos[] {
    return this._listItemsSubject.getValue();
  }
  get objectToEdit(): TEditObj | null {
    return this._objectToEdit.getValue();
  }

  updateListItems(newItems: TTodos[]): void {
    this._listItemsSubject.next(newItems);
  }

  updateObjectToEdit(id: string | null) {
    switch (typeof id) {
      case null:
        return;

      case 'string':
        const selectedItem = this._listItemsSubject.value?.find(
          (item) => item.id === id
        );
        selectedItem && this._objectToEdit.next(selectedItem);
        return;
      default:
        console.error('an error occured. Selected item was not found.');
    }
  }

  resetObjectToEdit() {
    this._objectToEdit.next(null);
    console.log('success');
  }

  updateListItem(newVal: string): void {
    const objToEdit = this._objectToEdit.value;
    if (objToEdit) {
      const newListItems = this._listItemsSubject.value.map((item) =>
        item.id === objToEdit.id ? { ...item, value: newVal } : item
      );
      this._listItemsSubject.next(newListItems);
    } else console.error('object to edit is empty');
  }

  deleteListItem(id: string): void {
    const updatedListItems = this._listItemsSubject.value.filter(
      (item) => item.id !== id
    );
    this._listItemsSubject.next(updatedListItems);
    console.log(this.listItems);
  }
}
