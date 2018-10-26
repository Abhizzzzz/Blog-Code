import { Component, OnInit} from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
//for redirection
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  blogTitle: String;
  blogDescription: String;
  blogBodyHtml: String;
  blogCategory: String;
  possibleCategories = ["Comedy","Humour","Drama","Technology"];

  constructor(public blogHttpService: BlogHttpService,private _route: ActivatedRoute,private router: Router,private toastr: ToastrService) {}

  ngOnInit() {
  }

  public createBlog():any{
    let blogData= {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(
      data =>{
        console.log(data);
        // alert("Blog Posted Succesfully");
        this.toastr.success('Blog Posted Succesfully', 'Success');
        //redirecting on blog-edit after 1 sec
        setTimeout(() =>{
          //this.router.navigate(['/blog', data.data.blogId]); also works but throws syntax error
          this.router.navigate(['/blog', data['data']['blogId']]);
        },3000);
      },
      error =>{
        console.log("error occured");

      }
    )

  }

}
