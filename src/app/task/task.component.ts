import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: string = '';
  @Output() remove = new EventEmitter<void>();

  onRemove() {
    this.remove.emit();
  }
}