import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '../product.service';
// import { Product } from '../product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product: any;
  // err;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.product = { name: "", qty: "", price: ""}
  }

  newProduct(){
    this.productService.newProduct(this.product)
    .subscribe(product => { 
      this.router.navigate(['/']);
    });
  }
}
      //
//this.err = data
  //    this.err = "This name already exists"
    //  console.log(this.err);
