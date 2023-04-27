import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit { 
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}
ngOnInit(): void {
    // first get the product Id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = 
    Number (routeParams.get('productId'))
  
    //Find the product that corresponds with the Id provided in route
    this.product = products.find(product => product.id === productIdFromRoute)
}
  /* ...*/

}



