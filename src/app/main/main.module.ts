import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IgxTabsModule } from 'igniteui-angular';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, IgxTabsModule],
})
export class MainModule {}
