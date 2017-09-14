import { Component} from '@angular/core';

@Component({
  selector: 'address-check',
  templateUrl: './address-check.component.html',
  styleUrls: ['./address-check.component.scss']
})

export class AddressCheckComponent {
  checkLoading: boolean = false;

  check(): void{
      this.checkLoading = true;
      
  }

}
