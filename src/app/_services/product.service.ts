import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_model/product.model';
import { MyOrderDetails } from '../_model/order.model';
import { OrderDetails } from '../_model/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public createTransaction(amount: string) {
    return this.httpClient.get("http://localhost:8080/createTransaction/"+amount);
  }

  public markAsDelivered(orderId: string) {
      return this.httpClient.get("http://localhost:8080/markOrderAsDelivered/"+orderId)
  }

  public getAllOrderDetailsForAdmin(status: string): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:8080/getAllOrderDetails/"+status);
  }

  public getMyOrders(): Observable<MyOrderDetails[]> {
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:8080/getOrderDetails");
  }

  public deleteCartItem(cartId: string) {
    return this.httpClient.delete("http://localhost:8080/deleteCartItem/"+cartId);
  }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>("http://localhost:8080/addNewProduct", product);
  }

  public getAllProducts(pageNumber: number, searchKeyword: string = "") {
    return this.httpClient.get<Product[]>("http://localhost:8080/getAllProducts?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }

  public getProductDetailsById(productId: string) {
    return this.httpClient.get<Product>("http://localhost:8080/getProductDetailsById/"+productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete("http://localhost:8080/deleteProductDetails/"+productId);
  }

  public getProductDetails(isSingleProductCheckout: string, productId: string) {
    return this.httpClient.get<Product[]>("http://localhost:8080/getProductDetails/"+isSingleProductCheckout+"/"+productId);
  }

  public placeOrder(orderDetails: OrderDetails, isCartCheckout: string) {
    return this.httpClient.post("http://localhost:8080/placeOrder/"+isCartCheckout, orderDetails);
  }

  public addToCart(productId: string) {
    return this.httpClient.get("http://localhost:8080/addToCart/"+productId);
  }

  public getCartDetails() {
    return this.httpClient.get("http://localhost:8080/getCartDetails");
  }
}
