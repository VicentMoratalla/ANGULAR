import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {
  orders;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
    this.authService.user$.subscribe(u => {
      this.orderService.getOrdersByUser(u.uid).valueChanges().subscribe((orders) => {
        this.orders = orders;
      })
    });
    // this.orders$ = this.authService.user$.pipe(switchMap(u =>this.orderService.getOrdersByUser(u.uid).snapshotChanges()));
  }
}
