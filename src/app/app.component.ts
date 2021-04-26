import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebasInterceptor';

  // Variable que recibe los datos de la api
  totalAngularpackages;

  // URL a la que hacemos la petición
  url: string = "https://api.npms.io/v2/search?q=scope:angular"
  error;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(this.url).subscribe(data => {
      this.totalAngularpackages=data.total;
    },error => this.error = error)
  }

  onSubmit() {
    console.log(this.totalAngularpackages)
  }



}
