import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';


export class AnimalService{
  private rota: string = "http://localhost:8050/listar-animais"

  constructor(private httpClient: HttpClient) { }

  getAnimais(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.rota)
  }

  public postAnimal(animal: Animal): Observable<Animal>{
    return this.httpClient.post<Animal>(this.rota, animal)
  }
}

