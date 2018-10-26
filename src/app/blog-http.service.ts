import { Injectable } from '@angular/core';
//Importing HttpClient and HttpErrorResponse
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

//Importing observables related code
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public blogData;
  public baseURL = 'https://blogapp.edwisor.com/api/v1/blogs' ;
  public apiKey = 'NDdjYTlhN2YyNTFjNWZmNGIxMDQxNjE3YWQ5YWE3NjEwMjllODQ2NTBmYzU5MmVhMjllZjQ3YzliMjY0Zjk3ZjFkYzIyNGE4M2NiYzc3Y2U2YmUzMzRhODQxMDcwM2JlYjlhMmQ2ODI1ODJjYjJkMzJmZDUxYWU1M2NkOWZkZTI5ZQ==';

  constructor(private _http:HttpClient) {
    console.log("blog-http service is called");
   }

  //general exception handler for http request
  private handleError(err:HttpErrorResponse){
    console.log("Handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBlogs():any{
    let myResponse = this._http.get(this.baseURL+'/all?authToken='+this.apiKey);
    console.log(myResponse);
    return myResponse;
  }

  public getDetailsOfCurrentBlog(currentBlogId): any{
    let myResponse = this._http.get(this.baseURL+'/view/'+currentBlogId+'?authToken='+this.apiKey);
    console.log(myResponse);
    return myResponse;
 }

 public createBlog(blogData){
   let myResponse = this._http.post(this.baseURL+'/create?authToken='+this.apiKey,blogData);
   return myResponse;
 }
 public deleteBlog(currentBlogId): any{
   let data = {};
   let myResponse = this._http.post(this.baseURL+'/'+currentBlogId+'/delete?authToken='+this.apiKey,data);
   return myResponse;
 }

 public editBlog(blogData,blogId){
   let myResponse = this._http.put(this.baseURL+'/'+blogId+'/edit?authToken='+this.apiKey,blogData);
   return myResponse;
 }
}
