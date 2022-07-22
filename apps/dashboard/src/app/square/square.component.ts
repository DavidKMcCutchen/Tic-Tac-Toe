import { Component, Input } from '@angular/core';

@Component({
  selector: 'tic-tac-toe-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {

  @Input() value: 'X' | 'O';
};
