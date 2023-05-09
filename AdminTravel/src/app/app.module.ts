import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { AccountComponent } from './account/account.component';
@NgModule({
  declarations: [
    AppComponent,
    MainAdminComponent,
    DetailPostComponent,
    UpdatePostComponent,
    ClientViewComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
