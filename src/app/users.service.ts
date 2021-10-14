import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { IProduct, IUser } from './interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: IUser | undefined;
  token: string | undefined = undefined;
  
  userLoggedInEvent: Subject<boolean> = new Subject();
  userFetchedEvent: Subject<boolean> = new Subject();

  constructor(
    private http: HttpClient,
  ) { }

  login(payload: Object): Promise<string> {
    return this.http
      .post(`https://reqres.in/api/login`, payload)
      .toPromise()
      .then((response: any) => response.token);
  }

  getProducts(): Promise<IProduct[]> {
    return this.http
      .get(`https://reqres.in/api/unnown?per_page=15`)
      .toPromise()
      .then((response: any) => {
        response.data.forEach((item: IProduct) => {
          item.color = item.color.substring(1);
        });
        return response.data;
      });
  }

  getUserDetails(): Promise<IUser> {
    return this.http
      .get(`https://reqres.in/api/users/1`)
      .toPromise()
      .then((response: any) => response.data);
  }
}
