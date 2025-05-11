import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { KeyBoardAccessibilityDirective } from '../directives/key-board-accessibility.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keyboard-accessibility',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    KeyBoardAccessibilityDirective,
    CommonModule
  ],
  templateUrl: './keyboard-accessibility.component.html',
  styleUrl: './keyboard-accessibility.component.css'
})
export class KeyboardAccessibilityComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', Validators.required],
      address: [''],
      phone: [''],
      customerType: ['', Validators.required],
      details: this.fb.array([]),
    });

  }

  get details(): FormArray {
    return this.form.get('details') as FormArray;
  }

  addRow() {
    this.details.push(
      this.fb.group({
        productName: ['', Validators.required],
        productCategory: ['', Validators.required],
        quantity: [1, Validators.required],
        price: [0, Validators.required],
      })
    );
  }

  removeRow(index: number) {
    this.details.removeAt(index);
  }

  submit() {
    console.log(this.form.value);
  }
}
