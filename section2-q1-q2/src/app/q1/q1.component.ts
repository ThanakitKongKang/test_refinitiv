import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.scss']
})
export class Q1Component implements OnInit {
  leftStyle = "width:200px; min-width: 200px;"
  centerStyle = "flex-grow:1;min-width:100px;"
  rightStyle = "width:300px; min-width: 300px;"

  input: string = '0';
  selectedCal: string = null;
  calModes: string[] = ["isPrime", "isFibonacci"]
  result: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.selectedCal = this.calModes[0]
  }

  validateInput(): void {
    const pattern = '^[+-]?[0-9]{1,}(?:\.[0-9]{1,2})?$'
    if (this.input.match(pattern)) {
      let inputNumber = Number(this.input)
      if (inputNumber < 0) {
        this.input = '1';
      }

      else if (inputNumber % 1 !== 0) {
        this.input = Math.round(inputNumber).toString();
      }
    }
    else if (this.input.includes("-") || this.input.split(".").length !== 2) {
      this.input = ''
    }
  }

  isPrime(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;

  }

  isSquare(num: number): boolean {
    return num > 0 && Math.sqrt(num) % 1 === 0;
  }

  isFibonacci(num: number): boolean {
    if (this.isSquare(5 * (num * num) - 4) || this.isSquare(5 * (num * num) + 4)) {
      return true;
    } else { return false; }
  }

  calculationChanged(): void {
    this.validateInput();
    if (this.selectedCal === this.calModes[0]) {
      this.result = this.isPrime(Number(this.input));
    } else if (this.selectedCal === this.calModes[1]) {
      this.result = this.isFibonacci(Number(this.input));
    }

  }
}
