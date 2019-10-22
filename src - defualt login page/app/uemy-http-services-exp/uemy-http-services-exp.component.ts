import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { observable, Observable } from 'rxjs';
@Component({
  selector: 'app-uemy-http-services-exp',
  templateUrl: './uemy-http-services-exp.component.html',
  styleUrls: ['./uemy-http-services-exp.component.css']
})
export class UemyHttpServicesExpComponent implements OnInit {
public posts;
// private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _service: PostService) {}
   ngOnInit() {
      // get method for retrieve data from server
    this._service.getPosts()
    .subscribe(res => {
      this.posts = res;
    }, (error: Response) => {
      if (error.status === 404) {
        alert('something went wrong in you end point');
      }

    });
  }


   // for post method send data to serve
   createPost(inTitle: any) {
    const post = { title: inTitle.value };
    console.log(post);
    inTitle.value = '';
    this._service.createPost(post)
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
      });
  }
  // for update data
  updatePost(items: any) {
this._service.updatePost(items)
.subscribe(resrponse => {
console.log(resrponse);
});
  }
  // delete
  deletePost(items: any) {
  this._service.deletePost(items)
    .subscribe(resrponse => {
      const index = this.posts.indexOf(items);
      this.posts.splice(index, 1);
      alert('Record deleted!' + items.id);
    console.log(resrponse);
    });

      }


// private handleError(error:Response)
// {
//   if(error.status === 400)
//   return Observable.throw(new badInput(error.json()));
//   if(error.status === 404)
//   return Observable.throw(new notFoundError());
//   return Observable.throw(new AppError(error));
// }
}
