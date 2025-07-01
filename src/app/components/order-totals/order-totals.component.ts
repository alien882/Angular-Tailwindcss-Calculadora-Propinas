import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-totals',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './order-totals.component.html',
  styleUrl: './order-totals.component.css'
})
export class OrderTotalsComponent {

  private orderService = inject(OrderService)

  public subTotal = computed<number>(() => {
    return this.orderService.order().reduce((total, item) => {
      return total + (item.quantity! * item.price)
    }, 0)
  })

  public tipAmount = computed<number>(() => {
    return this.subTotal() * this.orderService.tip()
  })

  public total = computed<number>(() => {
    return this.subTotal() + this.tipAmount() 
  })

  onPlaceOrder() {
    this.orderService.placeOrder()
  }
}
