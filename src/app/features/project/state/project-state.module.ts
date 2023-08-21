import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProject from './reducers/project.reducer';
import { ProjectEffects } from './project.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProject.projectFeatureKey, fromProject.projectReducer),
    EffectsModule.forFeature([ProjectEffects])
  ]
})
export class ProjectStateModule { }
