import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './popup-modal.component.html',
  styleUrl: './popup-modal.component.css'
})
export class PopupModalComponent {
  @Input() isOpen = false;
  @Output() onClose = new EventEmitter<void>(); // To notify the parent component

  closePopup() {
    this.isOpen = false;
    this.onClose.emit(); // Notify the parent component to update the `isOpen` value
  }
}
