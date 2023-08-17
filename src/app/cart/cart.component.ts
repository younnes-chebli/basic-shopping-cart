import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  OnSubmit(): void {
    this.items = this.cartService.clearItems();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
