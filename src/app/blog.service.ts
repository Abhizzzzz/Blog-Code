import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //creating a dummy variable

  public allBlogs = [
    {
      blogId : "1",
      title : "Hello I am abhishek......",
      description : "Some big paragraph",
      created : "2018-10-20",
      aurthor : "Admin",
      bodyHtml : "<p>This is p tag</p> <a>Clicked 1</a>",
      tags: []
    },
    {
      blogId : "2",
      title : "Hello I am abhishek2......",
      description : "Some big paragraph2",
      created : "2018-10-21",
      aurthor : "Admin2",
      bodyHtml : "<p>This is p tag</p> <a>Clicked 2</a>",
      tags: ["hey","how","what"]
    },
    {
      blogId : "3",
      title : "Hello I am abhishek3......",
      description : "Some big paragraph3",
      created : "2018-10-22",
      aurthor : "Admin3",
      bodyHtml : "<p>This is p tag</p> <a>Clicked 3</a>",
      tags: []
    }
  ]

  public currentBlog;

  constructor() {
    console.log("service constructor called");
   }

   public getAllBlogs():any{
     return this.allBlogs;
   }

   public getDetailsOfCurrentBlog(currentBlogId): any{
    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        console.log("In Method");
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }
}
