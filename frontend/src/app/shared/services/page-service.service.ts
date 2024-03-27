import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {

  constructor(private http: HttpClient) { }
  Page_Id!: string;
  url = environment.baseApi;
  page: any[] = [];

  async getAllPage() :Promise<any | null>{
    return new Promise<any | null>((resolve, reject) => {
      this.http.get<any>(`${this.url}`).subscribe(
        (data) => {
          this.page = data;
          resolve(data);
        },
      (error) =>{
        reject(error);
      }
      )
    })
  }

  async getContent(id: string): Promise<any | null> {
    return new Promise<any | null>((resolve, reject) => {
      this.http.get<any>(`${this.url}/${id}`).subscribe(
        (data) => {
          resolve(data);
        },
        (error) =>{
          reject(error);
        }
      )
    })
  }

  async delete(id: string) :Promise<any | null>{
    return new Promise<any | null> ((resolve, reject) => {
      this.http.delete(`${this.url}/${id}`).subscribe(
      (data) =>{
        console.log(data);
        resolve(data)
      },
      (error) =>{
        reject(error);
      }
    )
  })
  }
}
