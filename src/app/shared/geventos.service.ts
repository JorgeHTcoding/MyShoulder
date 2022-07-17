import { Injectable } from '@angular/core';
import { Gevento } from '../models/gevento.model';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Eventos } from '../models/eventos';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GeventosService {

  private url:string;
  public evento:Gevento;
  constructor(private http: HttpClient) { }
  //obtiene todos los eventos
  getAll():any{
    console.log("Entramos a getEvento")
    this.url="http://localhost:3000/eventos"
    return this.http.get(this.url)
  }
  //get user event
  getAllAnfitrion(id:number):any{
    console.log("Entramos a getEvento")
    this.url="http://localhost:3000/anfitrion?id="+id
    return this.http.get(this.url)
  }
  //obtiene todos los eventos de USER
  getOne(id_evento:number):any{
    console.log("Entramos a getEvento")
    this.url="http://localhost:3000/eventosUser?id="+id_evento
    return this.http.get(this.url)
  }
  // modificar(id_evento:number,evento:Eventos):any{
    

  
  //   // id_evento=id_evento;
  //   console.log("Entramos a modificar")
  //   console.log(gevento)
  //   this.url="http://localhost:3000/gestion-evento"
  //   return this.http.put(this.url,gevento)
  // }
  
  // eliminar(id_eventos:number):Observable<Object>{
  //   console.log("Entramos a eliminar")
  //   this.url="http://localhost:3000/gestion-evento"
  //   return this.http.delete(this.url + "?id_eventos=" + id_eventos);
  // }

  // getOne(id_eventos:number):Observable<Object>{ 
  //   this.url="http://localhost:3000/gestion-evento"
  //   console.log("Entramos a getOne")
  //   return this.http.get(this.url + "?id_eventos=" + id_eventos);
  // }

  
  // getOne(id_evento:number):any{
  //   console.log("Entramos a getOne")
  //   this.url="http://localhost:3000/eventos?id="+id_evento
  //   return this.http.get(this.url)
  // }

}
