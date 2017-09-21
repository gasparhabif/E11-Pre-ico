import { Component, Output, EventEmitter }     from '@angular/core';

@Component({
  selector: 'address-check',
  templateUrl: './address-check.component.html',
  styleUrls: ['./address-check.component.scss']
})

export class AddressCheckComponent {
  checkLoading: boolean = false;
  @Output() open: EventEmitter <any> = new EventEmitter();
  @Output() close: EventEmitter <any> = new EventEmitter();

  check(): void {
      this.checkLoading = true;

      //After check this.checkLoading = false

  }
}
