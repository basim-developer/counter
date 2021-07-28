import { Component, createPlatform, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { updatePost } from '../post-list/state/posts.action';
import { Post } from '../post-list/state/posts.model';
import { getPostById } from '../post-list/state/posts.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  postForms:FormGroup;

  post:Post;

  postSubscription:Subscription;

  constructor(private route:ActivatedRoute, private store:Store<AppState>, private router: Router) { }

  ngOnInit():void {

    this.route.paramMap.subscribe((param)=>{
      const id = param.get("id");
      this.postSubscription = this.store.select(getPostById, {id}).subscribe((data)=>{
        this.post = data;
        this.create();
      })

    });

  }


  create(){
    this.postForms = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }


  onUpdatePost(){

    const post: Post={
      id: this.post.id,
      title: this.postForms.value.title,
      description: this.postForms.value.description
    };

    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);

  }

ngOnDestroy(){
  this.postSubscription.unsubscribe();
}

}



