import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
items: Item[] = [];
count = 0;
@ViewChild('alert') alert: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onItemAdded(item: Item) {
    if (this.count >= 6) {
      this.alert.nativeElement.className = 'd-show fixed-top';
    } else {
      this.items.push(item);
    }
  }

  onCountIncrease(increase: number) {
    if ( this.count <= 6 ) {
      this.count += increase;
    }
  }

  onCountDecrease(decrease: number) {
    this.count -= decrease;
  }

  onClose() {
    this.alert.nativeElement.className = 'fixed-top d-none';
    this.count--;
  }

}
