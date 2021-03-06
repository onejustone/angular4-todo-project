/**
 * Created by onejustone on 2017/5/24.
 */
import { NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

// 路由模块，首先在 index.html 中引入基路径 <base href="/">
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    // pathMatch 路由的字符匹配策略,
    children: [],
    // 子路由数组
  },
  {
    path: 'todo',
    redirectTo: 'todo/ALL'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
