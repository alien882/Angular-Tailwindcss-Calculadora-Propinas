import { Component, inject } from '@angular/core';
import { TipOptions } from '../../interfaces';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-tip-percentage-form',
  standalone: true,
  imports: [],
  templateUrl: './tip-percentage-form.component.html',
  styleUrl: './tip-percentage-form.component.css'
})
export class TipPercentageFormComponent {

  private orderService = inject(OrderService)

  public tipOptions: TipOptions[] = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  
  public get tip() : number {
    return this.orderService.tip()
  }
  

  
  public set tip(v : number) {
    this.orderService.tip.set(v)
  }
  
}
