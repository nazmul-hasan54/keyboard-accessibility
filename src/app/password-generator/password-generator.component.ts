import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css'
})
export class PasswordGeneratorComponent implements OnInit {
  password: string = '';

  ngOnInit(): void {
    this.generatePassword();
  }

  // generatePassword() {
  //   const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  //   const numbers = '0123456789';

  //   const allChars = upperCaseChars + lowerCaseChars + numbers;
  //   const passwordLength = 6;

  //   this.password = Array.from({ length: passwordLength }, () =>
  //     allChars[Math.floor(Math.random() * allChars.length)]
  //   ).join('');
  // }

  generatePassword() {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';

    const allChars = upperCaseChars + lowerCaseChars + numbers;
    const passwordLength = 6;

    // Ensure at least one of each type
    const capital = upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    const small = lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    const number = numbers[Math.floor(Math.random() * numbers.length)];

    const remainingChars = Array.from({ length: passwordLength - 3 }, () =>
      allChars[Math.floor(Math.random() * allChars.length)]
    );

    const passwordArray = [capital, small, number, ...remainingChars];
    this.password = this.shuffleArray(passwordArray).join('');
  }

  // Helper method to shuffle the array
  private shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
