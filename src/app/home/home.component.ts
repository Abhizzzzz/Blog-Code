import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  
  public allBlogs;
  constructor(public blogHttpService: BlogHttpService) { 
    console.log("home constructor called");
  }

  ngOnInit() {
    console.log("home onInit called");
    // this.allBlogs = this.blogHttpService.getAllBlogs();
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data =>{
        console.log("Logging data");
        console.log(data);
        //data[<key of json coming>]
        this.allBlogs = data["data"];
        console.log(this.allBlogs);
      },
      error =>{
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
  }
  ngOnDestroy() {
    console.log("home destroyed");
    
  }

}
