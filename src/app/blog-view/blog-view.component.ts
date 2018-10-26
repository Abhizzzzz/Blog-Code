import { Component, OnInit, OnDestroy } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

import { ToastrService } from 'ngx-toastr';
// for tracking the back page
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  // just declared here no need to make in global through app.module.ts
  providers: [Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentBlog;

  constructor(private _route: ActivatedRoute,private router: Router,public blogHttpService: BlogHttpService,private toastr: ToastrService,private location: Location) { 
    console.log("blog-view constructor called");
  }

  ngOnInit() {
    console.log("blog-view onInit called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    // this.currentBlog = this.blogHttpService.getDetailsOfCurrentBlog(myBlogId);
    this.currentBlog = this.blogHttpService.getDetailsOfCurrentBlog(myBlogId).subscribe(
      data =>{
        console.log("Logging data");
        console.log(data);
        //data[<key of json coming>]
        this.currentBlog = data["data"];
        console.log(this.currentBlog);
      },
      error =>{
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
    
  }

  public deleteThisBlog(): any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        console.log(data);
        this.toastr.success('Blog deleted Succesfully', 'Success');
        setTimeout(() =>{
          //this.router.navigate(['/blog', data.data.blogId]); also works but throws syntax error
          this.router.navigate(['/home']);
        },3000);
      },
      error =>{
        console.log("Error");
      }
    );
  }

  public goBackToPreviousPage(){
    // taking us to the previous location
    this.location.back();
  }

  ngOnDestroy() {
    console.log("blog-view destroyed");
    
  }

  

}