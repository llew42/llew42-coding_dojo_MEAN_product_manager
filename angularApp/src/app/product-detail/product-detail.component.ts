import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
// import { Product } from '../product';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  private id;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    })
    this.viewProduct(this.id)
    this.product = { name: "", qty: "", price: ""}
  }
  
  viewProduct(id){
    this.productService.viewProduct(id)
    .subscribe(product => this.product = product);
  }

  deleteProduct(){
    this.productService.deleteProduct(this.id).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}
