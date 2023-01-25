import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { ActivatedRoute } from '@angular/router';
import { User } from './User';
import { AlertifyService } from '../service/alertify.service';
import { PostService } from './post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]

})
export class PostComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,private postService:PostService, private http: HttpClient,private alertifyService:AlertifyService) { }
  path: string = "https://jsonplaceholder.typicode.com/posts";
  pathuser: string = "https://jsonplaceholder.typicode.com/users";
  posts: Post[];
  users: User[];
  filterText:string
  //burada yıl,ay işndex ve number larak çalışıyor
  today=new Date(2023,0,25)
  ngOnInit() {
    this.getPosts(1);
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      console.log(params["userid"])
    })
  }
  getUsers() {
    this.http.get<User[]>(this.pathuser).subscribe(response => {
      this.users = response
    })
  }
  getPosts(userid:number) {

this.postService.getPosts(userid).subscribe(data=>{
  this.posts=data;
});
    }
  
  favoriteadd(post:any){
this.alertifyService.success("Added to post:"+ post.title)
  }
}