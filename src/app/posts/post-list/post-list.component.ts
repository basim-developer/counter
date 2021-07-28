import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from 'src/app/counter/state/counter.state';
import { Post } from './state/posts.model';
import { PostsState } from './state/posts.state';
import { getPosts } from './state/posts.selectors';
import { deletePost } from './state/posts.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(
    private store: Store<{ counter: CounterState; posts: PostsState }>
  ) {}

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }


  deletePost(id:number){
    if(confirm('Are you sure want to delete?')){
      this.store.dispatch(deletePost({id}));
    }
  }

}
