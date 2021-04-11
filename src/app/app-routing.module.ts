import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemInventoryComponent } from './component/item-inventory/item-inventory.component';

const routes: Routes = [
  {path:'',component:ItemInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
