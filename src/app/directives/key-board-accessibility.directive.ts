import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appKeyBoardAccessibility]',
  standalone: true
})
export class KeyBoardAccessibilityDirective implements OnInit {
  @Input() isFirstInRow = false;
  @Input() addRow!: () => void;
  @Input() deleteRow!: () => void;

  constructor(
    private el: ElementRef<HTMLElement>,
  ) { }

  ngOnInit(): void {
    if (this.isFirstInRow) {
      setTimeout(() => {
        this.el.nativeElement.focus();
      }, 0);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const focusable = this.getFocusableElements();
    // const index = focusable.indexOf(this.el.nativeElement as HTMLElement);
    const index = focusable.indexOf(this.el.nativeElement);
    const lastIndex = focusable.length - 1;

    // // Enter (normal)
    // if (event.key === 'Enter' && !event.altKey && !event.shiftKey) {
    //   event.preventDefault();
    //   if (index < lastIndex) focusable[index + 1]?.focus();
    // }

    //  // Shift + Enter
    //  if (event.key === 'Enter' && event.shiftKey) {
    //   event.preventDefault();
    //   if (index > 0) focusable[index - 1]?.focus();
    // }

     // Enter - Move to next input

     const isAddButton =
    (document.activeElement as HTMLElement)?.innerText?.trim() === 'Add Item';

     if (event.key === 'Enter' && !event.shiftKey && !event.altKey) {
      event.preventDefault();

      if (isAddButton && typeof this.addRow === 'function') {
        this.addRow();
        setTimeout(() => {
          const newFocusable = this.getFocusableElements();
          newFocusable[index]?.focus();
        });
      } else if (index < lastIndex) {
        focusable[index + 1]?.focus();
      }
    
      return;
    }

    // Shift + Enter - Move to previous input
    if (event.key === 'Enter' && event.shiftKey && !event.altKey) {
      event.preventDefault();
      if (index > 0) {
        focusable[index - 1]?.focus();
      }
      return;
    }

    // // Alt + Enter or Alt + '+'
    // if ((event.altKey && event.key === 'Enter') || (event.altKey && event.key === '+')) {
    //   event.preventDefault();
    //   if (this.addRow) {
    //     this.addRow();
    //     setTimeout(() => {
    //       const nextFocusable = this.getFocusableElements();
    //       nextFocusable[lastIndex + 1]?.focus(); // focus first field of the new row
    //     });
    //   }
    // }

    // Alt + Enter or Alt + '+'
    if ((event.altKey && event.key === 'Enter') || (event.altKey && event.key === '+')) {
      event.preventDefault();
      if (typeof this.addRow === 'function') {
        this.addRow(); // Add a new row
        setTimeout(() => {
          const updatedFocusable = this.getFocusableElements(); // Get updated focusable elements
          const newRowIndex = updatedFocusable.findIndex(el => el === document.activeElement) + 1;
          updatedFocusable[newRowIndex]?.focus(); // Focus the first field of the new row
        }, 0);
      }
    }

    // Alt + D to delete
    if (event.altKey && (event.key === 'd' || event.key === 'D')) {
      event.preventDefault();
      if (this.deleteRow) {
        this.deleteRow();
      }
    }

    // if (event.altKey && event.key === 'Enter') {
    //   event.preventDefault();
    //   if (this.addRow) {
    //     this.addRow();
    //     setTimeout(() => {
    //       const nextInputs = this.getFocusableElements();
    //       nextInputs[lastIndex + 1]?.focus(); // focus first input of new row
    //     });
    //   }
    //   return;
    // }

    // if (event.key === 'Enter' && !event.shiftKey) {
    //   event.preventDefault();
    //   if (index < lastIndex) {
    //     focusable[index + 1]?.focus();
    //   }
    // }

    // if (event.key === 'Enter' && event.shiftKey) {
    //   event.preventDefault();
    //   if (index > 0) {
    //     focusable[index - 1]?.focus();
    //   }
    // }
    
  }

  @HostListener('focus', ['$event'])
  onFocus(event: FocusEvent): void {
    const target = event.target as HTMLElement;

    // Check if the focused element is a <select> dropdown
    if (target.tagName.toLowerCase() === 'select') {
      target.click(); // Programmatically open the dropdown
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const form = this.el.nativeElement.closest('form');
    if (!form) return [];

    return Array.from(
      form.querySelectorAll<HTMLElement>(
        'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled') && el.tabIndex !== -1);
  }
  
}
