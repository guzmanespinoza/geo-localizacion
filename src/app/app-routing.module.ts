import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMapComponent } from './pages/my-map/my-map.component';

const routes: Routes = [
  { path: '', component: MyMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
