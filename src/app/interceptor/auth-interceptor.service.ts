// Importado de la liberia injectable
import { Injectable } from '@angular/core';

// Importado del HTTPInterceptor
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
// Importado del catch error para redirigir al usuario al login si el token expira
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router : Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /*
    Este método recoge el token del local storage y modifica la petición http para añadirselo en el header
    */

    // Recogemos el token


    localStorage.setItem('token', 'tokenDePrueba') // Esta linea setea el token para incluirlo en el header, falseado claro
    const token: string = localStorage.getItem('token')

    // recogemos la request para mantenerla intacta, incluso si después le hacemos modificaciones.
    let request = req;

    // Si existe el token intervenimos clonando la request y añadiendo los header
    console.log("El valor del token es -> "+token)
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization : `Bearer ${token}`
        }
      })
    }
    // Por qué se utiliza el acento invertido en el Bearer?

    // Se devuelve el enlace al siguiente interceptor
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/login') // Redirigimos al login en caso de que el token haya expirado
        }

        return throwError(err) // Devolvemos el error
      })
    )
  }


}
