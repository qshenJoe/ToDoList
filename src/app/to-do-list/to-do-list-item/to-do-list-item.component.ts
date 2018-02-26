import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent implements OnInit {
  @Input() item: Item;
  @ViewChild('displayItem') displayItem: ElementRef;
  constructor() { }
  @Output() decreasement = new EventEmitter<Number>();
  decrease = 1;
  ngOnInit() {
  }

  onRemoveItem() {
    this.displayItem.nativeElement.className = 'd-none';
  }

  onDecrease() {
    this.decreasement.emit(this.decrease);
  }
}
