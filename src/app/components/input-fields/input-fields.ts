import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-fields',
  imports: [CommonModule, DragDropModule, FormsModule],
  templateUrl: './input-fields.html',
  styleUrl: './input-fields.scss',
})
export class InputFields {
  inputFiles = [
    { label: 'Name', placeholder: 'Enter full name', order: 1, value: '' },
    { label: 'Phone number', placeholder: 'Enter phone number', order: 2, value: '' },
    { label: 'Address', placeholder: 'Enter Address', order: 3, value: '' },
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.inputFiles, event.previousIndex, event.currentIndex);

    // Update order values
    this.inputFiles.forEach((item, index) => {
      item.order = index + 1;
    });
  }

  submit() {
    console.log('Submitted Input Fields:', this.inputFiles);
  }
}
