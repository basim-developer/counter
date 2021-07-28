import { initialState } from "./posts.state";
import {createReducer, on} from '@ngrx/store';
import { addPost, deletePost, updatePost } from "./posts.action";

// import {postActions} from '../state/posts.action';


export const _postReducer = createReducer(
    initialState,

    on(addPost, (state,action)=>{
        let post = { ...action.post};
        post.id = (state.posts.length +1);
        return {
            ...state,
            posts: [...state.posts,post]
        }
    }),

    on(updatePost, (state, action)=>{

        const updatedPost = state.posts.map((post)=>{
            return action.post.id === post.id ? action.post : post;
        })

        return {
            ...state,
            posts:updatedPost
        }
    }),


    on(deletePost, (state, action)=>{

        const updatedPost = state.posts.filter((post)=>{
            return  post.id !== action.id;
        })

        return {
            ...state,
            posts:updatedPost
        }
    }),
    
    );

export function postReducer(state,action){
    return _postReducer(state,action);
}

