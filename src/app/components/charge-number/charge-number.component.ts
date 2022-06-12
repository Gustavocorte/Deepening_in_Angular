import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-charge-number',
  templateUrl: './charge-number.component.html',
  styleUrls: ['./charge-number.component.css']
})
export class ChargeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.changeNumber.emit()
  }
}
