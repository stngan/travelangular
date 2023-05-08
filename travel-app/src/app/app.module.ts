import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';
import { SupportComponent } from './screens/support/support.component';
import { HomeComponent } from './screens/home/home.component';
import { HCMComponent } from './screens/destination/hcm/hcm.component';
import { HanoiComponent } from './screens/destination/hanoi/hanoi.component';
import { DestinationsNavComponent } from './components/destinations-nav/destinations-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DanangComponent } from './screens/destination/danang/danang.component';
import { DalatComponent } from './screens/destination/dalat/dalat.component';
import { NhatrangComponent } from './screens/destination/nhatrang/nhatrang.component';
import { LocalWeatherComponent } from './components/local-weather/local-weather.component';
import { DestinationMapComponent } from './components/destination-map/destination-map.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DanangFaqComponent } from './components/faq/danang-faq/danang-faq.component';
import { TopPlaceDanangComponent } from './components/top-place/top-place-danang/top-place-danang.component';
// import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
// import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
// import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
// import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
// import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
// import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
// import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
// import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
// import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
// import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
// import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
// import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
// import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
// import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { TopPlaceHcmComponent } from './components/top-place/top-place-hcm/top-place-hcm.component';
import { UseraccountComponent } from './screens/useraccount/useraccount.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    LoginComponent,
    SignupComponent,
    SupportComponent,
    HomeComponent,
    HCMComponent,
    HanoiComponent,
    DestinationsNavComponent,
    DanangComponent,
    DalatComponent,
    NhatrangComponent,
    LocalWeatherComponent,
    DestinationMapComponent,
    DanangFaqComponent,
    TopPlaceDanangComponent,
    TopPlaceHcmComponent,
    UseraccountComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    // MdbAccordionModule,
    // MdbCarouselModule,
    // MdbCheckboxModule,
    // MdbCollapseModule,
    // MdbDropdownModule,
    // MdbFormsModule,
    // MdbModalModule,
    // MdbPopoverModule,
    // MdbRadioModule,
    // MdbRangeModule,
    // MdbRippleModule,
    // MdbScrollspyModule,
    // MdbTabsModule,
    // MdbTooltipModule,
    // MdbValidationModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
