import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getProducts().then(products => {
      this.products = products;
    })
  }

}
