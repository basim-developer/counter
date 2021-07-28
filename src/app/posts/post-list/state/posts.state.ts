import { Post } from "./posts.model";

export interface PostsState{
    posts: Post[];
}


export const initialState: PostsState = {
    posts: [
        {id: 1, title:'sample1', description:'sample'},
        {id: 2, title:'sample2', description:'sample'},
    ]
}