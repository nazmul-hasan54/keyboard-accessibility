import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TextEditorComponent } from '@xalorith/adk';
import Quill from 'quill';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, FormControl, Validators, FormArray } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategory } from './product-list';
import { ProductListTwoComponent } from './product-list-two';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { ProductListWithTableComponent } from './product-list-with-table/product-list-with-table.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileCardTwoComponent } from './profile-card-two/profile-card-two.component';
import { ProfileCardThreeComponent } from './profile-card-three/profile-card-three.component';
import { AccordionComponent } from './accordion/accordion.component';
import { WidgetComponent } from './widget/widget.component';
import { WeatherContentComponent } from './weather-content/weather-content.component';
import { OnedriveViewDesignComponent } from './onedrive-view-design/onedrive-view-design.component';
import { BlogPostTimelineComponent } from './blog-post-timeline/blog-post-timeline.component';
import { PracticalPostTimelineComponent } from './practical-post-timeline/practical-post-timeline.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeatherCustomActionsComponent } from './weather-custom-actions/weather-custom-actions.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { StructureTestComponent } from './structure-test/structure-test.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { DummyAnimationComponent } from './dummy_animation/dummy-animation.component';
import { CssTimelineComponent } from './css-timeline/css-timeline.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { KeyboardAccessibilityComponent } from "./keyboard-accessibility/keyboard-accessibility.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    BarChartComponent,
    LineChartComponent,
    TextEditorComponent,
    FormsModule,
    ReactiveFormsModule,
    ProductListComponent,
    ProductListTwoComponent,
    SkillBarComponent,
    ProductListWithTableComponent,
    ProfileCardComponent,
    ProfileCardTwoComponent,
    ProfileCardThreeComponent,
    AccordionComponent,
    WidgetComponent,
    WeatherContentComponent,
    OnedriveViewDesignComponent,
    BlogPostTimelineComponent,
    PracticalPostTimelineComponent,
    PopupModalComponent,
    WeatherWidgetComponent,
    WeatherCustomActionsComponent,
    CustomSliderComponent,
    StructureTestComponent,
    MobileMenuComponent,
    DummyAnimationComponent,
    CssTimelineComponent,
    PasswordGeneratorComponent,
    KeyboardAccessibilityComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myTesting';
  showBarChart: boolean = true;
  showLineChart: boolean = true;
  showPieChart: boolean = false;

  dropdownVisible = false;
  hideTimeout: any;

  myForm: FormGroup;
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zipCode: new FormControl('')
    }),
    items: new FormArray([])
  });


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  ngOnInit(): void {
    const Font = Quill.import('formats/font') as any;
    Font.whitelist = ['sans-serif', 'serif', 'monospace', 'roboto'];
    Quill.register(Font, true);

  }


  showDropdown() {
    clearTimeout(this.hideTimeout);
    this.dropdownVisible = true;
  }

  hideDropdownAfterDelay() {
    this.hideTimeout = setTimeout(() => {
      this.dropdownVisible = false;
    }, 300); // Delay in milliseconds
  }

  clearHideTimeout() {
    clearTimeout(this.hideTimeout);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!document.querySelector('.relative')?.contains(event.target as Node)) {
      this.dropdownVisible = false;
    }
  }
  editorOptions = {
    theme: 'snow',
    modules: {
      // toolbar: [
      //   [{ header: [1, 2, false] }],
      //   ['bold', 'italic', 'underline'],
      //   ['link', 'blockquote', 'code-block', 'image'],
      //   [{ list: 'ordered' }, { list: 'bullet' }]
      // ]
    }
  };

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  isMegaMenuOpen: boolean = false;

  toggleMegaMenu(): void {
    this.isMegaMenuOpen = !this.isMegaMenuOpen;
  }

  get items(): FormArray {
    return this.registrationForm.get('items') as FormArray;
  }

  createItem(itemData = { name: '', quantity:1, price:0 }): FormGroup{
    const itemForm = new FormGroup({
      name: new FormControl(itemData.name, [Validators.required]),
      quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      isEditMode: new FormControl(false)
    })
    return itemForm;
  }

  addItem(){
    // const itemForm = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
    //   price: new FormControl(0, [Validators.required, Validators.min(0)])
    // });

    this.items.push(this.createItem());
  }

  toggleEditMode(index: number){
    const itemFormGroup = this.items.at(index) as FormGroup;
    const isEditMode = itemFormGroup.get('isEditMode')?.value;
    itemFormGroup.patchValue({isEditMode: !isEditMode});
  }

  removeItem(index: number){
    this.items.removeAt(index);
  }

  onSubmit(){
    if(this.registrationForm.valid){
      console.log('Form Submitted', this.registrationForm.value);
    } else {
      console.log('Form is invalid')
    }
  }
}
