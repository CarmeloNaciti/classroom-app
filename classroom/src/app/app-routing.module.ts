import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent } from './component/person.component';
import { GroupComponent } from './component/group.component';

const routes: Routes = [
    { path: 'person/:id',  component: PersonComponent },
    { path: 'group', component: GroupComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
