import {APP_INITIALIZER, Inject, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import {TokenInterceptor} from "./shared/token.interceptor";
import {SettingsInitializerService} from "./shared/settings-initializer.service";
// import localeDeCH from '@angular/common/locales/de-CH';
// import localeDe from '@angular/common/locales/de';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // BooksModule,
    // AdminModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      // for assets/settings[.template].json
      provide: APP_INITIALIZER,
      useFactory: (initService: SettingsInitializerService) => ( () => initService.init() ),
      deps: [SettingsInitializerService],
      multi: true
    }
    // { provide: LOCALE_ID, useValue: 'de-CH' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(LOCALE_ID) locale: string) {
    console.log('DEBUG - Current locale:', locale);
    // registerLocaleData(localeDeCH);
    // registerLocaleData(localeDe);
  }
}
