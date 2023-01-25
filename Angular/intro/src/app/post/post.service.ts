import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Post} from "./post"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { } 
  path:string = "https://jsonplaceholder.typicode.com/";
  getPosts(userid:number):Observable<Post[]> {
        if (userid)
{
  let yeniyol=this.path +"posts?userId=" + userid
     return this.http.get<Post[]>(yeniyol);
    
     return this.http.get<Post[]>(yeniyol)
}
     else
     {
      return this.http.get<Post[]>(this.path +"posts")
      }
    }
  }
