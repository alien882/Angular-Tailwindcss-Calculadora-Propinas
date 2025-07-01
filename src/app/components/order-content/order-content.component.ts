import { Component, computed, inject } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CurrencyPipe } from '@angular/common';
import { MenuItem } from '../../interfaces';

@Component({
  selector: 'app-order-content',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './order-content.component.html',
  styleUrl: './order-content.component.css'
})
export class OrderContentComponent {

  private orderService = inject(OrderService)

  public order = computed<MenuItem[]>(() => {
    return this.orderService.order()
  })

  onRemoveItem(id: MenuItem["id"]) {
    this.orderService.removeItem(id)
  }
}
