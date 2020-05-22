import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule
],

  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule
],
})
export class MaterialModule { }
