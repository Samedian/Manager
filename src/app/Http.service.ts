import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDepartment } from './IDepartment';
import { Observable } from 'rxjs';
import { IManager } from './IManager';

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private http: HttpClient) {}

  getDepartment() : Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>("https://localhost:44309/api/AngularMaterial/Department");
  }

  getManagers(id) : Observable<IManager[]> {
    return this.http.get<IManager[]>("https://localhost:44309/api/AngularMaterial/Manager?id="+id);
  }
}