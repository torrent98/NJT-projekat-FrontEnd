import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from "./admin/admin.component";
import { ForbiddenComponent } from "./forbidden/forbidden.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";
import { AuthGuard } from "./_auth/auth.guard";

import { HomeComponent } from "./home/home.component";
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductResolveService } from './product-resolve.service';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { BuyProductResolverService } from './buy-product-resolver.service';

const routes: Routes = [

  { 
    path: "", 
    component: HomeComponent 
  },

  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ["Admin"] },
  },

  {
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] },
  },

  { 
    path: "login", 
    component: LoginComponent 
  },

  { 
    path: "forbidden", 
    component: ForbiddenComponent 
  },

  {
    path: "register",
    component: RegisterComponent
  },

  {
    path: "addNewProduct",
    component: AddNewProductComponent,
    canActivate: [AuthGuard],
    data: { roles: ["Admin"] },
    resolve: {
      product: ProductResolveService,
    },
  },

  {
    path: "showProductDetails",
    component: ShowProductDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ["Admin"] },
  },

  {
    path: "productViewDetails",
    component: ProductViewDetailsComponent,
    resolve: { product: ProductResolveService },
  },

  {
    path: "cart",
    component: CartComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] }
  },

  {
    path:"myOrders",
    component: MyOrdersComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] }
  },

  {
    path: "orderInformation",
    component: OrderDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ["Admin"] },
  },

  {
    path:"orderConfirm",
    component: OrderConfirmationComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] }
  },

  {
    path: "buyProduct",
    component: BuyProductComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] },
    resolve: {
      productDetails: BuyProductResolverService,
    },
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
