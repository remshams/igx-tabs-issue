import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IgxTabsModule } from '@infragistics/igniteui-angular';
import { ChildComponent } from './child/child.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [TabsComponent, ChildComponent],
  imports: [CommonModule, TabsRoutingModule, IgxTabsModule],
})
export class TabsModule {}
