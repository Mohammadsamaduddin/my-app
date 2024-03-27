import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { Cars1Component } from './cars1/cars1.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailsComponent } from './mails/mails.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HooksComponent } from './hooks/hooks.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormtaskComponent } from './formtask/formtask.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', canActivate: [AuthenticationGuard], component: DashboardComponent, children:
      [
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'data-binding', component: DataBindingComponent },
        { path: 'calculator', component: CalculatorComponent },
        { path: 'rectangle', component: RectangleComponent },
        { path: 'circle', component: CircleComponent },
        { path: 'bmi', component: BmiComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'vehicles', component: VehiclesComponent },
        { path: 'cars', component: CarsComponent },
        { path: 'myntra', component: MyntraComponent },
        { path: 'cars1', component: Cars1Component },
        { path: 'accounts', component: AccountsComponent },
        { path: 'flipkart', component: FlipkartComponent },
        { path: 'mails', component: MailsComponent },
        { path: 'create-car', component: CreateCarComponent },
        { path: 'create-account', component: CreateAccountComponent },
        { path: 'hooks', component: HooksComponent },
        { path: 'create-user', component: CreateUserComponent },
        { path: 'formtask', component: FormtaskComponent }
      ]
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
