
import {createAction, props} from '@ngrx/store'
import { Post } from "./posts.model";

export const addPost = createAction(
    "[ADD_POST]",
    props<{post:Post}>()
)


export const updatePost = createAction(
    '[UPDATE_POST]',
    props<{post:Post}>()   
)


export const deletePost = createAction(
    '[DELETE_post]',
    props<{id:number}>()
)