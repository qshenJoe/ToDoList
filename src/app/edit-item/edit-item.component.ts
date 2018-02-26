import { Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  Input } from '@angular/core';
import { Item } from '../to-do-list/item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @ViewChild('titleInput') titleInputRef: ElementRef;
  @ViewChild('contentInput') contentInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<Item>();
  @Output() increasement = new EventEmitter<Number>();

  increase = 1;
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    // array size constaint
    const itemTitle = this.titleInputRef.nativeElement.value;
    const itemContent = this.contentInputRef.nativeElement.value;
    const newItem = new Item();
    newItem.title = itemTitle;
    newItem.description = itemContent;
    newItem.time = newItem.createTime();
    this.itemAdded.emit(newItem);
    this.onClearInput();
    this.increasement.emit(this.increase);
  }

  onClearInput() {
    this.titleInputRef.nativeElement.value = '';
    this.contentInputRef.nativeElement.value = '';
  }
}
