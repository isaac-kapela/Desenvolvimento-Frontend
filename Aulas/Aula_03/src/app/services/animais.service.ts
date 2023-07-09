import { Animal } from "../models/animal";

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root',
})
export class AnimalService{

  constructor(private http: HttpClient){ }


  GetAnimais(): Observable<Animal[]>{
    return this.http.get<Animal[]>("http://localhost:8050/listar-animais");
  }

}

