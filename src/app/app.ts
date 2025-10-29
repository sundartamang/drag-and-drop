import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterModule, DragDropModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('dragAndDrop');
}
