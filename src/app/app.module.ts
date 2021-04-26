import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importamos el interceptor
import { AuthInterceptorService } from "./interceptor//auth-interceptor.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // Uso de los interceptors
      useClass: AuthInterceptorService, // Clase que utiliza para hacer las intervenciones
      multi: true // Permite añadir mas interceptor en caso de que sea necesario sin sobreescribir este
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
