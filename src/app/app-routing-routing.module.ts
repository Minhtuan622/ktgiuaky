import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GiaoVienComponent} from "./giao-vien/giao-vien.component";
import {MonHocComponent} from "./mon-hoc/mon-hoc.component";
import {ThemGiaoVienComponent} from "./them-giao-vien/them-giao-vien.component";

const routes: Routes = [
  {path: 'giaovien', component: GiaoVienComponent},
  {path: 'monhoc', component: MonHocComponent},
  {path: 'them', component: ThemGiaoVienComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
