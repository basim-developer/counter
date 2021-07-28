import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts',
    component: PostListComponent,
    children: [
      { path: 'add', component: AddPostsComponent },
      {path: 'edit/:id', component: EditPostComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
