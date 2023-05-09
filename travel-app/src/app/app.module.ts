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
import { HighestAtHCMComponent } from './components/highest-rating-by-destination/highest-at-hcm/highest-at-hcm.component';
import { HighestAtDanangComponent } from './components/highest-rating-by-destination/highest-at-danang/highest-at-danang.component';
import { HighestAtDalatComponent } from './components/highest-rating-by-destination/highest-at-dalat/highest-at-dalat.component';
import { HighestAtHanoiComponent } from './components/highest-rating-by-destination/highest-at-hanoi/highest-at-hanoi.component';
import { HighestAtNhatrangComponent } from './components/highest-rating-by-destination/highest-at-nhatrang/highest-at-nhatrang.component';
import { AllvietnamComponent } from './components/allvietnam/allvietnam.component';
import { VnGeneralInformationComponent } from './components/vn-general-information/vn-general-information.component';
import { DalatWeatherForecastComponent } from './components/weather-forecast/dalat-weather-forecast/dalat-weather-forecast.component';
import { HanoiWeatherForecastComponent } from './components/weather-forecast/hanoi-weather-forecast/hanoi-weather-forecast.component';
import { HcmWeatherForecastComponent } from './components/weather-forecast/hcm-weather-forecast/hcm-weather-forecast.component';
import { NhatrangWeatherForecastComponent } from './components/weather-forecast/nhatrang-weather-forecast/nhatrang-weather-forecast.component';
import { DanangWeatherForecastComponent } from './components/weather-forecast/danang-weather-forecast/danang-weather-forecast.component';
import { TopPlaceDalatComponent } from './components/top-place/top-place-dalat/top-place-dalat.component';
import { TopPlaceHanoiComponent } from './components/top-place/top-place-hanoi/top-place-hanoi.component';
import { TopPlaceNhatrangComponent } from './components/top-place/top-place-nhatrang/top-place-nhatrang.component';
import { DanangLocationComponent } from './components/map/danang-location/danang-location.component';
import { HanoiFaqComponent } from './components/faq/hanoi-faq/hanoi-faq.component';
import { NhatrangFaqComponent } from './components/faq/nhatrang-faq/nhatrang-faq.component';
import { HcmFaqComponent } from './components/faq/hcm-faq/hcm-faq.component';
import { DalatFaqComponent } from './components/faq/dalat-faq/dalat-faq.component';
import { HanoiMapComponent } from './components/map/hanoi-map/hanoi-map.component';
import { HcmMapComponent } from './components/map/hcm-map/hcm-map.component';
import { DalatMapComponent } from './components/map/dalat-map/dalat-map.component';
import { NhatrangMapComponent } from './components/map/nhatrang-map/nhatrang-map.component';



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
    HighestAtHCMComponent,
    HighestAtDanangComponent,
    HighestAtDalatComponent,
    HighestAtHanoiComponent,
    HighestAtNhatrangComponent,
    AllvietnamComponent,
    VnGeneralInformationComponent,
    DalatWeatherForecastComponent,
    HanoiWeatherForecastComponent,
    HcmWeatherForecastComponent,
    NhatrangWeatherForecastComponent,
    DanangWeatherForecastComponent,
    TopPlaceDanangComponent,
    TopPlaceHcmComponent,
    TopPlaceDalatComponent,
    TopPlaceHanoiComponent,
    TopPlaceNhatrangComponent,
    DanangLocationComponent,
    HanoiFaqComponent,
    NhatrangFaqComponent,
    HcmFaqComponent,
    DalatFaqComponent,
    HanoiMapComponent,
    HcmMapComponent,
    DalatMapComponent,
    NhatrangMapComponent,







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
