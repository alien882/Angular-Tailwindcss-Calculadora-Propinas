import { Component, inject, input } from '@angular/core';
import { MenuItem } from '../../interfaces';
import { CurrencyPipe } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {

  private orderService = inject(OrderService)

  public menuItem = input.required<MenuItem>()

  onAddItem() {
    this.orderService.addItem(this.menuItem())
  }
}
