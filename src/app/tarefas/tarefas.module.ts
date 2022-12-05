import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent],
  providers: [TarefaService],
})
export class TarefasModule {}
