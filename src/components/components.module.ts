import { NgModule } from '@angular/core';
import { F2pMainFooterComponent } from './f2p-main-footer/f2p-main-footer';
import { F2pMainMenuComponent } from './f2p-main-menu/f2p-main-menu';
import { EditFormComponent } from './edit-form/edit-form';
import { ArtistListComponent } from './artist-list/artist-list';
@NgModule({
	declarations: [F2pMainFooterComponent,
    F2pMainMenuComponent,
    EditFormComponent,
    ArtistListComponent],
	imports: [],
	exports: [F2pMainFooterComponent,
    F2pMainMenuComponent,
    EditFormComponent,
    ArtistListComponent]
})
export class ComponentsModule {}
