import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '../product.service';
// import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.product = { name: "", qty: "", price: ""}
    this.route.params.subscribe((params: Params) =>{
      this.id = params.id;
    })
    this.viewProduct(this.id)
  }

  viewProduct(id){
    this.productService.viewProduct(id)
    .subscribe(product => this.product = product);
  }

  updateProduct(){
    this.productService.updateProduct(this.id, this.product)
    .subscribe(product => {
      this.router.navigate(['/']);
    });
  }
}
