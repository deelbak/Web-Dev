import { Component, OnInit } from '@angular/core';
import { Category, categories} from '../categories';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // category: Category | undefined;
  products = [...products];
  product: Product | undefined;
  category: Category | undefined;
  constructor(
    private activRoute: ActivatedRoute
  ) { }

  likedProducts(item : Product){
    item.Likes++
    console.log(item.Likes)
  }
  removeProduct(ind : number){
    // @ts-ignore
    this.products = this.products.filter((x) => x.id !== ind);

  }
  ngOnInit() {
    const routeParams = this.activRoute.snapshot.paramMap;
    const categoryNFromRoute = (routeParams.get('categoryName'));
    console.log(routeParams)
    console.log(categoryNFromRoute)
    this.products = products.filter(p => p.category === categoryNFromRoute)
    console.log(this.products)
  }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
