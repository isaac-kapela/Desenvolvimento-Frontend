import { Animal } from 'src/app/models/animal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {  }

  public getAnimais() : Observable<Animal[]> {
    return this.http.get<Animal[]>("https://pokeapi.co/api/v2/pokemon");
  }

  public adicionarAnimal(animal: Animal): Observable<string> {
    return this.http.post<string>("http://localhost:8050/adicionar-animal", animal);
  }
}
