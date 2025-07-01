import { Injectable, signal } from '@angular/core';
import { MenuItem } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public order = signal<MenuItem[]>([])
  public tip = signal(0)

  addItem(item: MenuItem) {

    const itemExits = this.order().find(orderItem => orderItem.id === item.id)

    if (itemExits) {
      
      const updatedOrder = this.order().map(orderItem => {

        if (orderItem.id === item.id) {
          return {
            ...orderItem,
            quantity: orderItem.quantity! + 1
          }
        }

        return orderItem
      })

      this.order.set(updatedOrder)
    } else {

      const newItem = {...item, quantity: 1}
      this.order.update(prevOrder => [...prevOrder, newItem])
    }
  }

  removeItem(id: MenuItem["id"]) {
    const updatedOrder = this.order().filter(orderItem => {
      return orderItem.id !== id
    })
    this.order.set(updatedOrder)
  }

  placeOrder() {
    this.order.set([])
    this.tip.set(0)
  }
}
