import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './custom-slider.component.html',
  styleUrl: './custom-slider.component.css'
})
export class CustomSliderComponent {
  slides = [1, 2, 3, 4]; // Sample slide content
  currentIndex = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  // Method to start automatic sliding
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change every 3 seconds
  }

  // Method to go to the next slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  // Method to go to a specific slide
  goToSlide(index: number) {
    this.currentIndex = index;
    clearInterval(this.autoSlideInterval); // Stop auto sliding when user interacts
    this.startAutoSlide(); // Resume auto sliding
  }
}
