import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from '../post-list/state/posts.model';
import {AppState} from './../../state/app.state';

import {addPost} from './../post-list/state/posts.action'

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css'],
})
export class AddPostsComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  addPost(){
    if(!this.postForm.valid){
      return;
    }

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }

    //fire action

    this.store.dispatch(addPost({ post }));
    this.router.navigate(['posts']);

  }

}
