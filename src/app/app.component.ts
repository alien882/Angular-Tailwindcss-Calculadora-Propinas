import { Component, computed, inject } from '@angular/core';
import { menuItems } from './data/db';
import { MenuItemComponent } from "./components/menu-item/menu-item.component";
import { OrderService } from './services/order.service';
import { OrderContentComponent } from "./components/order-content/order-content.component";
import { TipPercentageFormComponent } from "./components/tip-percentage-form/tip-percentage-form.component";
import { OrderTotalsComponent } from "./components/order-totals/order-totals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuItemComponent, 
    OrderContentComponent, 
    TipPercentageFormComponent, 
    OrderTotalsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private orderService = inject(OrderService)
  
  public listFood = menuItems
  
  public orderHasSomething = computed<boolean>(() => {
    return this.orderService.order().length > 0
  })
}
