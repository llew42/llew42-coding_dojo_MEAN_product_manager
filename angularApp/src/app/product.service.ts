import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('/product')
  }

  viewProduct(id){
    return this.http.get('/product/' + id);
  }

  newProduct(product){
    return this.http.post('/product/new', product);
  }

  updateProduct(id, product){
    return this.http.put('/product/edit/' + id, product);
  }

  deleteProduct(id){
    return this.http.delete('/product/' + id);
  }
}
