import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
  {
    // aqui é tipo um atalho tmb
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full',
  },
  ...TarefaRoutes, // concatenando o array importado com este array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
