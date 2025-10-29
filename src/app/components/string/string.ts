import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-string',
  imports: [CommonModule, DragDropModule],
  templateUrl: './string.html',
  styleUrl: './string.scss',
})
export class String {
  numbersList = [
    {
      label: 'One',
      order: '1',
    },
    {
      label: 'Two',
      order: '2',
    },
    {
      label: 'Three',
      order: '3',
    },
    {
      label: 'Four',
      order: '4',
    },
    {
      label: 'Five',
      order: '5',
    },
    {
      label: 'Six',
      order: '6',
    },
    {
      label: 'Seven',
      order: '7',
    },
  ];

  drop(event: CdkDragDrop<any[]>) {
    // Reorder the array
    moveItemInArray(this.numbersList, event.previousIndex, event.currentIndex);

    // Update the order values based on the new array position
    this.numbersList.forEach((item, index) => {
      item.order = (index + 1).toString();
    });
  }

  submit() {
    console.log('Updated order => ', this.numbersList);
  }
}
